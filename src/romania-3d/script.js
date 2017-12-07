var renderer, scene, camera, raycaster, meshes = [];
var mouse = new THREE.Vector2();

var counties = d3.map();

// transformation matrix
var positioning;

//var CENTER_COOR = [40.477572, -101.078555]; //US Center TODO
//var CENTER_COOR = [21.4652807,-84.0605353]; //Cuba Center
//var CENTER_COOR = [25.0094303, 45.9442858]; //Saudi Center (RO)

//var CENTER_COOR = [18.466333, -66.105721]; // Puerto Rico
//var CENTER_COOR = [49.246292, -123.116226]; // Canada
//var CENTER_COOR = [55.225610000052995, -162.00495109163745]; // Original Estimate
//var CENTER_COOR = [-162.00495109163745, 55.225610000052995]; // Estimate
//var CENTER_COOR = [-141.00495109163745, 42.225610000052995]; // Estimate
//var CENTER_COOR = [40.477572, -101.078555]; //US Center Flipped
var CENTER_COOR = [40.477572, -101.078555]; //US Center Flipped
//var CENTER_COOR = [175.477572, 171.078555]; //asdfasfd
//var CENTER_COOR = [-80, 80]; //asfefee
//var CENTER_COOR = [52.81379799415833, -174.9580400569851]; // Works with all but first
//var CENTER_COOR = [-162.00495109163745, 55.225610000052995]; // Works with all but second


var MAX_EXTRUSION = 10;

var months = [], currentMonth;

var numberFormatter = d3.format('0,000');

// function that maps population int to extrusion value
// requires the maximum possible population
var getExtrusion;

// function that maps population int to luminance
// requires the maximum possible population
var getLuminance;

function initRenderer() {
	renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0xffffff);

	document.body.appendChild(renderer.domElement);
}

function initThree() {
	initRenderer();

	raycaster = new THREE.Raycaster();

	scene = new THREE.Scene();

	initCamera();
	initLights();

	controls = new THREE.TrackballControls(camera, renderer.domElement);
	controls.minDistance = 10;
	controls.maxDistance = 50;

	animate();
}

function initCamera() {
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
	camera.position.set(-8.278324114488553, 23.715105536749885, 5.334970045945842);
	camera.up.set(-0.3079731382492934, 0.9436692395156481, -0.12099963846565401);

	restoreCameraOrientation(camera);
}

function initLights() {
	var pointLight = new THREE.PointLight(0xFFFFFF);
	pointLight.position.set(-800, 800, 800);
	scene.add(pointLight);

	var pointLight2 = new THREE.PointLight(0xFFFFFF);
	pointLight2.position.set(800, 800, 800);
	scene.add(pointLight2);

	var pointLight3 = new THREE.PointLight(0xFFFFFF);
	pointLight3.position.set(0, 800, -800);
	scene.add(pointLight3);
}

function initLine() {
    var material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 0, 100, 0 )
	);

	var line = new THREE.Line( geometry, material );
	scene.add( line );
}

function initLine2() {
    var material = new THREE.LineBasicMaterial({
        color: 0x00ff00
    });

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 100, 0, 0 )
	);

	var line = new THREE.Line( geometry, material );
	scene.add( line );
}

function initLine3() {
    var material = new THREE.LineBasicMaterial({
        color: 0xff0000
    });

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 0, 0, 100 )
	);

	var line = new THREE.Line( geometry, material );
	scene.add( line );
}

function updateInfoBox() {
	raycaster.setFromCamera( mouse, camera );

	var intersects = raycaster.intersectObjects(scene.children);

	var html = '';

	for (var i=0; i<intersects.length; i++) {
		var countyCode = intersects[i].object.userData.countyCode;
		if (countyCode) {
			var county = counties.get(countyCode);
			var population = county.get(currentMonth); 
			html = county.get('name') + ': ' + numberFormatter(population);
			break;
		}
	}

	document.getElementById('infobox').innerHTML = html;
}

function animate() {
	controls.update();
	renderer.render(scene, camera);
	updateInfoBox();

	requestAnimationFrame(animate);
}

function onDocumentMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}


function cameraIter(callback) {
	['position', 'up'].forEach(callback);
}

function saveCameraOrientation() {
	cameraIter(function (key) {
		sessionStorage.setItem('camera.' + key, JSON.stringify(camera[key].toArray()));
	});
}

function restoreCameraOrientation() {
	cameraIter(function (key) {
		var val = JSON.parse(sessionStorage.getItem('camera.' + key));
		if (val) {
			camera[key].fromArray(val);
		}
	});
}


function initGeometry(features, topographicalData) {


    var width  = 600;
    var height = 400;

    var centerFeature = topojson.feature(topographicalData, topographicalData.objects.counties).features[0];

	// create a first guess for the projection
	var center = d3.geo.centroid(centerFeature);
	var scale  = 150;
	var offset = [width/2, height/2];
	var projection = d3.geo.mercator().scale(scale).center(center)
		.translate(offset);

	// create the path
	var path = d3.geo.path().projection(projection);

	// using the path determine the bounds of the current map and use
	// these to determine better values for the scale and translation
	var bounds  = path.bounds(topographicalData);
	var hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
	var vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
	var scale   = (hscale < vscale) ? hscale : vscale;
	var offset  = [width - (bounds[0][0] + bounds[1][0])/2,
		height - (bounds[0][1] + bounds[1][1])/2];

	// new projection
	projection = d3.geo.mercator().center(center)
		.scale(scale).translate(offset);
	path = path.projection(projection);



	//var path = d3.geo.path().projection(d3.geo.orthographic().center(CENTER_COOR)); //orthographic().center(CENTER_COOR)); //.projection(d3.geo.mercator().center(CENTER_COOR)); //TOD .center(CENTER_COOR) inside projection

	features.forEach(function(feature) {
        if (feature.geometry.type === 'MultiPolygon') {
            // remove Bucharest hole
            feature.geometry.coordinates = feature.geometry.coordinates.slice(0, 1); //feature.geometry.coordinates[0][0];
            //feature.geometry.type = 'Polygon';
        }

        var pathStr = path(feature);

        if (pathStr && !pathStr.includes('NaN')) {
            var contour = transformSVGPath(pathStr);

            var county = counties.get(feature.id);

            if (county) {
                county.set('contour', contour);
                county.set('name', feature.properties.RegionName);
            }
        } else {
        	console.log(pathStr);
		}
	});
}

function initPositioningTransform() {
	positioning = new THREE.Matrix4();

	var tmp = new THREE.Matrix4();
	positioning.multiply(tmp.makeRotationX(Math.PI/2));
	//positioning.multiply(tmp.makeTranslation(-390, -10, 0));
	positioning.multiply(tmp.makeTranslation(-450, -250, 0));
}

function updateMeshes(month) {
	// remove current meshes
	meshes.forEach(function(mesh) {
		scene.remove(mesh);
	});

	meshes = counties.entries().map(function(entry) {
		var countyCode = entry.key, county = entry.value;
		console.log(countyCode);
		var population = county.get(month);
		var extrusion = getExtrusion(population);
		var luminance = getLuminance(population);
		var color = d3.hsl(105, 0.8, luminance).toString();

		var extrudeMaterial = new THREE.MeshLambertMaterial({color: color}); 
		var faceMaterial = new THREE.MeshBasicMaterial({color: color});

		var geometry = county.get('contour').extrude({ //TODO
			amount: extrusion,
			bevelEnabled: false,
			extrudeMaterial: 0,
			material: 1
		});

		var mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(
			[extrudeMaterial, faceMaterial]));

		mesh.userData.countyCode = countyCode;

		mesh.applyMatrix(positioning);
		mesh.translateZ(-extrusion);

		scene.add(mesh);

		return mesh;
	});
}

// concurrently load multiple data sources; the callback will be invoked when everything is loaded
function loadData(sources, callback) {
	var remaining = sources.length;
	var results = {}

	sources.forEach(function(source) {
		function handler(error, data) {
			if (error) throw error;

			results[source.key] = data;

			remaining--;

			if (!remaining) {
				callback(results);
			}
		}

		args = source.args.slice();
		args.push(handler);
		d3[source.type].apply(d3, args);
	});
}

var dataSources = [
	{type: 'json', args: ['data/county_us_topo2.json'], key: 'topographicalData'},
	{type: 'csv', args: ['data/County_Zhvi_AllHomes.csv'], key: 'realEstateTimeSeries'}
];

function extractMonths(realEstateTimeSeries) {
	return Object.keys(realEstateTimeSeries[0]).filter(function(key) {
		return key.indexOf('-') == 4;
	}).map(function(month) {
		return month //parseInt(month, 10);
	});
}

function prepareCensusData(realEstateTimeSeries, months) {
	var max_price = 0;
	var month_sums = {};

	realEstateTimeSeries.forEach(function(row) {
		var countyCode = row.StateCodeFIPS.padStart(2, "0") + row.MunicipalCodeFIPS.padStart(3,"0");

		var datum = d3.map();

		months.forEach(function(month) {
			var value = parseInt(row[month], 10);

			datum.set(month, value);

			if (value > max_price) {
				max_price = value;
			}
		});

		counties.set(countyCode, datum);
	});

	return max_price;
}

initThree();
initPositioningTransform();
initLine();
initLine2();
initLine3();

var MonthButtons = React.createClass({
	getMonthFromHash: function() {
		var re = new RegExp('#/an/(\\d{4})');
		var match = window.location.hash.match(re);
		var currentMonth;

		if (match) {
			currentMonth = +match[1];
			if (this.props.months.indexOf(currentMonth) > -1) {
				return currentMonth;
			}
		}

		return false;
	},

	getInitialState: function() {
		var currentMonth = this.getMonthFromHash();

		if (!currentMonth) {
			currentMonth = this.props.months[0];
		}

		return {currentMonth: currentMonth};
	},

	componentDidMount: function() {
		window.addEventListener('hashchange', this.onHashChange);
	},

	componentWillUnmount: function() {
		window.removeEventListener('hashchange', this.onHashChange);
	},

	onHashChange: function(month) {
		var month = this.getMonthFromHash();

		if (month) {
			this.setState({currentMonth: month});
		}
	},

	render: function() {
		var self = this;

		currentMonth = self.state.currentMonth;  // used by infobox
		updateMeshes(this.state.currentMonth);

		function createButton(month) {
			var classes = classNames({
				'btn': true,
				'btn-default': true,
				'active': month == self.state.currentMonth
			});

			return <a className={classes} key={month} href={'#/an/' + month}>{month}</a>;
		}

		return <div id="current-month" className="btn-group" role="group">{self.props.months.map(createButton)}</div>;
	}
});

loadData(dataSources, function(results) {
	months = extractMonths(results.realEstateTimeSeries);
	var realestateValue = prepareCensusData(results.realEstateTimeSeries, months);

	getExtrusion = d3.scale.linear().domain([0, realestateValue]).range([0, MAX_EXTRUSION]);
	getLuminance = d3.scale.linear().domain([0, realestateValue]);

	var topographicalData = results.topographicalData;

	var features = topojson.feature(topographicalData, topographicalData.objects['counties']).features;
	initGeometry(features, topographicalData);

	React.render(<MonthButtons months={months} />, document.getElementById('container'));
});

document.addEventListener('mousemove', onDocumentMouseMove);
window.addEventListener('resize', onWindowResize);
window.addEventListener('beforeunload', saveCameraOrientation);
