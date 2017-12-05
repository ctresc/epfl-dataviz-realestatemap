
// Define Globals
var width,
    height,
    projection,
    housing,
    path,
    svg,
    color,
    x,
    attirbuteArray = [],
    currentAttribute = 0,
    play = false;

function init() {
    setMap();
    // animateMap();
}

function setMap() {
    width = 960;
    height = 960;

    projection = null; //to be defined

    housing = d3.map();

    path = d3.geoPath();
    // .projection(projection)

    x = d3.scaleLinear()
        .domain([1, 10])
        .rangeRound([600, 860]);

    color = d3.scaleThreshold()
        .domain(d3.range(2, 10))
        .range(d3.schemeBlues[9]);

    svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    g = svg.append("g")
        .attr("class", "key")
        .attr("transfrom", "translate(0,40");

    g.selectAll("rect")
        .data(color.range().map(function (d) {
            d = color.invertExtent(d);
            if (d[0] == null) d[0] = x.domain()[0];
            if (d[1] == null) d[1] = x.domain()[1];
            return d;
        }))
        .enter().append("rect")
        .attr("height", 8)
        .attr("x", function (d) { return x(d[0]); })
        .attr("width", function (d) { return x(d[1]) - x(d[0]); })
        .attr("fill", function (d) { return color(d[0]); });

    g.append("text")
        .attr("class", "caption")
        .attr("x", x.range()[0])
        .attr("y", -6)
        .attr("fill", "#000")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Unemployment rate");

    g.call(d3.axisBottom(x)
        .tickSize(13)
        .tickFormat(function (x, i) { return i ? x : x + "%"; })
        .tickValues(color.domain()))
        .select(".domain")
        .remove();

    loadData();
}

function loadData() {
    d3.queue()
        .defer(d3.json, "https://d3js.org/us-10m.v1.json")
        .defer(d3.csv, "County_Zhvi_AllHomes_Formatted.csv")
        .await(processData);
}

function processData(error, topology, csv) {
    if (error) throw error;

    console.log("us");
    console.log(topology);

    csv.forEach(function (d) { housing.set(d["CountyCodeFIPS"], +d["1996-04"]) })

    svg.append("g")
        .attr("class", "counties")
        .selectAll("path")
        .data(topojson.feature(topology, topology.objects.counties).features)
        .enter().append("path")
        .attr("fill", function (d) { 
            // console.log(d);
            // console.log(housing);
            var rate = housing.get(d.id);
            if(rate == null){rate=0.0}; // otherwise those counties will have no color at all
            return color(d.rate = rate); 
        })
        .attr("d", path)
        .on('mouseover', function(d){
            // debug if id's of counties are accurate
			var name = d.id;
			console.log(d);
		})
        .append("title")
        .text(function (d) { return d.rate + "%"; });

    svg.append("path")
        .attr("class", "county-borders")
        .attr("d", path(topojson.mesh(topology, topology.objects.counties, function (a, b) { return a !== b; })));
}

window.onload = init();