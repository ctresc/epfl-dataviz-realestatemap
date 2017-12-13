//globals
var width, height, projection, path, graticule, svg, selectedCounties = [], attributeArray = [], currentAttribute = 0, playing = false;

function init() {
    setMap();
    setLineChart();
}

function setMap() {

    width = 960, height = 580;  // map width and height, matches

    projection = d3.geo.albersUsa()   // define our projection with parameters
        .scale(1070)
        .translate([width / 2, height / 2])
        .precision(.1);

    path = d3.geo.path()  // create path generator function
        .projection(projection);  // add our define projection to it

    graticule = d3.geo.graticule(); // create a graticule

    svg = d3.select("#map").append("svg")   // append a svg to our html div to hold our map
        .attr("width", width)
        .attr("height", height);

    svg.append("defs").append("path")   // prepare some svg for outer container of svg elements
        .datum({ type: "Sphere" })
        .attr("id", "sphere")
        .attr("d", path);

    svg.append("use")   // use that svg to style with css
        .attr("class", "stroke")
        .attr("xlink:href", "#sphere");

    svg.append("path")    // use path generator to draw a graticule
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path);

    tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .direction('n')
        .html(function (d) {
            return d.properties.NAME10 + "<br/>House price: " + d.properties[attributeArray[currentAttribute]]
        });

    svg.call(tip);

    loadData();  // let's load our data next

}

function setLineChart() {
    var svg2 = d3.select("#line-chart").append("svg").attr("width", width).attr("height", height),
        margin2 = { top: 20, right: 20, bottom: 30, left: 50 },
        width2 = width - margin2.left - margin2.right,
        height2 = height - margin2.top - margin2.bottom,
        g2 = svg2.append("g").attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

    var parseTime = d3.time.format("%d-%b-%y");

    var x = d3.time.scale()
        .rangeRound([0, width2]);

    var y = d3.scale.linear()
        .rangeRound([height2, 0]);

    // Define the axes
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(5);

    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);

    var line = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.close); });

    d3.tsv("data/line.tsv", function (d) {
        d.date = parseTime.parse(d.date);
        d.close = +d.close;
        return d;
    }, function (error, data) {
        if (error) throw error;

        x.domain(d3.extent(data, function (d) { return d.date; }));
        y.domain(d3.extent(data, function (d) { return d.close; }));

        g2.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height2 + ")")
            .call(xAxis);

        g2.append("g")
            .attr("class", "y axis")
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price ($)")
            .call(yAxis);

        g2.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);
    });
}

function loadData() {

    queue()   // queue function loads all external data files asynchronously
        .defer(d3.json, "data/county_us_topo.json")  // our geometries
        .defer(d3.csv, "data/County_Zhvi_AllHomes_Formatted.csv")  // and associated data in csv file
        .await(processData);   // once all files are loaded, call the processData function passing
    // the loaded objects as arguments
}

function processData(error, counties, timeData) {
    // function accepts any errors from the queue function as first argument, then
    // each data object in the order of chained defer() methods above

    var county_geo = counties.objects.county.geometries;  // store the path in variable for ease
    for (var i in county_geo) {    // for each geometry object
        for (var j in timeData) {  // for each row in the CSV
            if (county_geo[i].id == timeData[j]['CountyCodeFIPS']) {   // if they match
                for (var k in timeData[0]) {   // for each column in the a row within the CSV
                    stringTypeProperties = ['Idx', 'CountyCodeFIPS', 'RegionName', 'State', 'Metro', 'SizeRank'];

                    if (!stringTypeProperties.includes(k)) {  // let's not add the name or id as props since we already have them
                        if (attributeArray.indexOf(k) == -1) {
                            attributeArray.push(k);  // add new column headings to our array for later
                        }

                        county_geo[i].properties[k] = Number(timeData[j][k]); // add each CSV column key/value to geometry object
                    }
                }
                break;  // stop looking through the CSV since we made our match
            }
        }
    }
    d3.select('#clock').html(attributeArray[currentAttribute]);  // populate the clock initially with the current year
    drawMap(counties);  // let's mug the map now with our newly populated data object
    animateMap();
}

function drawMap(geo_object) {

    svg.selectAll(".county")   // select county objects (which don't exist yet)
        .data(topojson.feature(geo_object, geo_object.objects.county).features)  // bind data to these non-existent objects
        .enter().append("path") // prepare data to be appended to paths
        .attr("class", "county") // give them a class for styling and access later
        .attr("id", function (d) { return "code_" + d.id; }, true)  // give each a unique id for access later
        .attr("d", path) // create them using the svg path generator defined above
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .on('click', function (d) {
            let color = selectCounty(d);
            d3.select(this)
                .style('fill', color);
        });

    var dataRange = getDataRange(); // get the min/max values from the current year's range of data values

    d3.selectAll('.county')  // select all the counties
        .attr('fill-opacity', function (d) {
            return getColor(d.properties[attributeArray[currentAttribute]], dataRange)[1];  // give them an opacity value based on their current value
        })
        .attr('fill', function (d) {
            return getColor(d.properties[attributeArray[currentAttribute]], dataRange)[0];  // give them an opacity value based on their current value
        });
}

function selectCounty(d) {
    let color = '';
    let dataRange = getDataRange();
    if (selectedCounties.indexOf(d.id) == -1) {
        selectedCounties.push(d.id);
        color = 'orange'
    }
    else {
        let index = selectedCounties.indexOf(d.id);
        selectedCounties.splice(index, 1);
        color = getColor(d.properties[attributeArray[currentAttribute]], dataRange)[0];
    }
    return color;
}

function sequenceMap() {

    var dataRange = getDataRange(); // get the min/max values from the current year's range of data values
    d3.selectAll('.county')
        .transition()  //select all the counties and prepare for a transition to new values
        .duration(750)  // give it a smooth time period for the transition
        .attr('fill-opacity', function (d) {
            return getColor(d.properties[attributeArray[currentAttribute]], dataRange)[1];  // the end color value
        })
        .attr('fill', function (d) {
            return getColor(d.properties[attributeArray[currentAttribute]], dataRange)[0];  // the end color value
        });

}

function getColor(valueIn, rangeValues) {

    var color = 'steelblue';
    var opacity = 0;

    if (typeof valueIn == 'undefined') {
        color = 'darkgrey'
        opacity = 0.5;
    } else if (valueIn == 0) {
        color = 'red'
        opacity = 0.5;
    } else {

        var opacityMap = d3.scale.linear() // create a linear scale
            .domain([rangeValues[0], rangeValues[1]])  // input uses min and max values
            .range([.3, 1]);   // output for opacity between .3 and 1 %

        color = 'green';
        opacity = opacityMap(valueIn);
    }

    return [color, opacity];  // return that number to the caller
}

function getDataRange() {
    // function loops through all the data values from the current data attribute
    // and returns the min and max values

    var min = Infinity, max = -Infinity;
    d3.selectAll('.county')
        .each(function (d, i) {
            for (var attribute in attributeArray) {
                var currentValue = d.properties[attributeArray[attribute]]; //Array[currentAttribute]];
                if (currentValue < min && currentValue != -99 && currentValue != 'undefined' && currentValue != 0) {
                    min = currentValue;
                }
                if (currentValue > max && currentValue != -99 && currentValue != 'undefined' && currentValue != 0) {
                    max = currentValue;
                }
            }
        });
    return [min, max];  //awesome sauce
}

function animateMap() {
    var dateFormat = d3.time.format("%Y-%m");

    d3.select("#slider")
        .call(chroniton()
            .domain([dateFormat.parse(attributeArray[0]), dateFormat.parse(attributeArray[attributeArray.length - 1])])
            .labelFormat(d3.time.format('%Y-%m'))
            .width(width)
            .playButton(true) // can also be set to loop
            .loop(true)
            .playbackRate(0.1) // 1.00 = 10px?
            .on("change", function (d) {
                filterValue = dateFormat(d);
                currentAttribute = attributeArray.indexOf(filterValue);
                sequenceMap();
            })
        );
}


window.onload = init();  // magic starts here
