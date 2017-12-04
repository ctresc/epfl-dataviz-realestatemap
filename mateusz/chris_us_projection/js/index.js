var width = 960,
    height = 960,
    scale0 = (width - 1) / 2 / Math.PI;

var projection = d3.geo.satellite()
    .distance(1.1)
    .scale(1500)
    .rotate([86.00, -35.50, 12.12])
    .center([-2, 1])
    .tilt(15)
    .clipAngle(Math.acos(1 / 1.1) * 180 / Math.PI - 1e-6)
    .precision(.1);

var zoom = d3.behavior.zoom()
    .translate([width / 2, height / 2])
    .scale(scale0)
    .scaleExtent([scale0, 8 * scale0])
    .on("zoom", zoomed);

var graticule = d3.geo.graticule()
    .extent([[-123, 27], [-47 + 1e-6, 57 + 1e-6]])
    .step([3, 3]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg
    .call(zoom)
    .call(zoom.event);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);


d3.json("zips_us_topo.json", function (error, us) {
    if (error) throw error;

    svg.append("path")
        .datum(topojson.feature(us, us.objects.zip_codes_for_the_usa))
        .attr("class", "boundary")
        .attr("d", path);
});

function zoomed() {
    projection
        .translate(zoom.translate())
        .scale(zoom.scale());

    svg.selectAll("path")
        .attr("d", path);
}

d3.select(self.frameElement).style("height", height + "px");