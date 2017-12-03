var width = 960, height = 600;

var path = d3.geo.path();

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);

queue()
	.defer(d3.json, "zips_us_topo.json")
	.await(ready);

function ready(error, us) {
	svg.append("g")
		.attr("class", "counties")
		.selectAll("path")
		.data(topojson.feature(us, us.objects.zip_codes_for_the_usa).features)
		.enter().append("path")
		.attr("class", "zip")
		.attr("data-zip", function (d) { return d.properties.zip; })
		.attr("data-state", function (d) { return d.properties.state; })
		.attr("data-name", function (d) { return d.properties.name; })
		.attr("d", path);
}