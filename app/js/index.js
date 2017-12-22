var $d3g = {};
d3threeD( $d3g ); // imported over script tag d3threeD.js

// GLOBALS
var renderer, stats, scene, camera,  max_amount = -Infinity, factor = 10000,  mapBase,
scale = 0.8, width, height, attributeArray = [], currentAttribute = 0; county_geo = [];
var tweenGroup2D3D = new TWEEN.Group();
var INFO_TITLE = 'US REAL ESTATE PRICES AVERAGED OVER ALL HOMES PER COUNTY';
var INFO_LOAD = '';

var main = function () {
    width = window.innerWidth * scale;
    height = window.innerHeight * scale;
    loadData();
}

main();


// DATA LOADING FUNCTIONS
// loader settings
var opts = {
    lines: 9, // The number of lines to draw
    length: 25, // The length of each line
    width: 8, // The line thickness
    radius: 34, // The radius of the inner circle
    color: '#ffffff', // #rgb or #rrggbb or array of colors
    speed: 1.9, // Rounds per second
    trail: 40, // Afterglow percentage
    className: 'spinner', // The CSS class to assign to the spinner
};

var target = document.getElementById('container');
var info = document.getElementById('info');

function loadData() {

    queue()   // queue function loads all external data files asynchronously
        .defer(d3.json, "data/county_us_topo.json")  // our geometries
        .defer(d3.csv, "data/County_Zhvi_AllHomes_Formatted.csv") // and associated data in csv file
        .await(processData);   // once all files are loaded, call the processData function passing
    // the loaded objects as arguments
}

function processData(error, counties, timeData) {

    // trigger loader
    var spinner = new Spinner(opts).spin(target);
    info.innerHTML = INFO_LOAD;


    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin("");
    loader.load( "data/albersUsa.svg", function(obj)
        {
            mapBase = obj;
            // function accepts any errors from the queue function as first argument, then
            // each data object in the order of chained defer() methods above
            county_geo = counties.objects.county.geometries;  // store the path in variable for ease
            for (var i in county_geo) {    // for each geometry object
                var found = false;
                for (var j in timeData) {  // for each row in the CSV
                    if (county_geo[i].id == timeData[j]['CountyCodeFIPS']) {   // if they match
                        for (var k in timeData[0]) {   // for each column in the a row within the CSV
                            stringTypeProperties = ['Idx', 'CountyCodeFIPS', 'RegionName', 'State', 'Metro', 'SizeRank'];

                            if (!stringTypeProperties.includes(k)) {  // let's not add the name or id as props since we already have them
                                if (attributeArray.indexOf(k) == -1) {
                                    attributeArray.push(k);  // add new column headings to our array for later
                                }
                                var currentValue = timeData[j][k] ? Number(timeData[j][k]) : -2 * factor;
                                if (currentValue > max_amount && currentValue != -99 && currentValue != 'undefined' && currentValue != 0) {
                                    max_amount = currentValue;
                                }
                                county_geo[i].properties[k] = currentValue; // add each CSV column key/value to geometry object
                            }
                        }
                        found = true;
                        break;  // stop looking through the CSV since we made our match
                    }
                }
                if (!found) {
                    for (var k in timeData[0])  {
                        stringTypeProperties = ['Idx', 'CountyCodeFIPS', 'RegionName', 'State', 'Metro', 'SizeRank'];

                        if (!stringTypeProperties.includes(k)) {  // let's not add the name or id as props since we already have them
                            if (attributeArray.indexOf(k) == -1) {
                                attributeArray.push(k);  // add new column headings to our array for later
                            }
                            county_geo[i].properties[k] = -2 * factor; // add each CSV column key/value to geometry object
                        }
                    }
                }
            }
            d3.select('#clock').html(attributeArray[currentAttribute]);  // populate the clock initially with the current year

            init();

            // stop spin.js loader
            spinner.stop();
            info.innerHTML = INFO_TITLE;

            // show toggle
            var toggle = document.getElementById('toggle');
            toggle.style.visibility = 'visible';

            animate();

            new TWEEN.Tween(mapBaseMaterial)
                    .to({opacity: 1}, 1500)
                    .easing(TWEEN.Easing.Linear.None)
                    .onComplete(function(){
                            var amnt = county_geo[path_to_county_geo[0]].properties[attributeArray[currentAttribute]];
                            for (let [i, mesh] of group.children.entries()) {
                                if (i > 0 && pathShapes[i-1] != pathShapes[i]) {
                                    amnt = county_geo[path_to_county_geo[pathShapes[i]]].properties[attributeArray[currentAttribute]];
                                    clr = lut.getColor(Math.max(amnt, 0));
                                }     
                                if (amnt < 0) continue;                     
                                new TWEEN.Tween(mesh.position)
                                    .to({z: amnt / factor + 1}, Math.floor(1500 + Math.random() * 1000))
                                    .easing(TWEEN.Easing.Sinusoidal.InOut)
                                    .delay(Math.floor(Math.random() * 2500))
                                    .start();                           
                            }
                    })
                    .start();
            new TWEEN.Tween(legend.material)
                    .to({opacity: 1}, 1500)
                    .easing(TWEEN.Easing.Linear.None)
                    .delay(6500)
                    .start()          
           new TWEEN.Tween(labels['title'].material)
                    .to({opacity: 1}, 1500)
                    .easing(TWEEN.Easing.Linear.None)
                    .delay(6500)
                    .start()
            for ( var i = 0; i < Object.keys( labels[ 'ticks' ] ).length; i++ ) {
                new TWEEN.Tween(labels[ 'lines' ][ i ].material)
                    .to({opacity: 1}, 1500)
                    .easing(TWEEN.Easing.Linear.None)
                    .delay(6500)
                    .start()
                new TWEEN.Tween(labels[ 'ticks' ][ i ].material)
                    .to({opacity: 1}, 1500)
                    .easing(TWEEN.Easing.Linear.None)
                    .delay(6500)
                    .start()
            }
            var sldr = document.getElementById('slider_container');
            var bottom = { val: -60 };
            var tween = new TWEEN.Tween(bottom)
                    .to({ val: 0 }, 1000)
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .onUpdate(function() {
                        sldr.style.setProperty('bottom', bottom.val + 'px');
                    })
                    .delay(8000)
                    .start();
            animateMap();
        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.error( 'An error happened' );
        });
}


// DATA INITIALIZATION FUNCTIONS
function init() {

    var container = document.getElementById( 'container' );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x333333 );

    sceneOverlay = new THREE.Scene();

    //

    // camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 2000 );
    camera = new THREE.OrthographicCamera( width / -2, width /2, height / 2, height / -2, 1, 2000 );
    camera.position.set( 0, -450, 1000 );
    scene.add(camera);

    /******** TO HIDE A LITTLE HACK **********/
    var floorMaterial = new THREE.MeshBasicMaterial( { color: 0x333333, side: THREE.DoubleSide } );

    var floorGeometry1 = new THREE.PlaneGeometry( 1000, 1000, 1, 1);
    var floorMesh1 = new THREE.Mesh( floorGeometry1, floorMaterial );
    scene.add( floorMesh1 );

    var floorGeometry2 = new THREE.PlaneGeometry( 100000000, max_amount / factor, 1, 1);
    //var floorMaterial2 = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
    var floorMesh2 = new THREE.Mesh( floorGeometry2, floorMaterial );
    floorMesh2.position.set(0, 200, -max_amount  / factor /2);
    floorMesh2.rotation.x = Math.PI / 2;
    scene.add( floorMesh2 );

    var floorMesh3 = new THREE.Mesh( floorGeometry2, floorMaterial );
    floorMesh3.position.set(0, -300, -max_amount / factor /2);
    floorMesh3.rotation.x = Math.PI / 2;
    scene.add( floorMesh3 );

    var floorMesh4 = new THREE.Mesh( floorGeometry2, floorMaterial );
    floorMesh4.position.set(-450, -300, -max_amount / factor /2);
    floorMesh4.rotation.x = Math.PI / 2;
    floorMesh4.rotation.y = Math.PI / 2;
    scene.add( floorMesh4 );

    var floorMesh5 = new THREE.Mesh( floorGeometry2, floorMaterial );
    floorMesh5.position.set(450, -300, -max_amount / factor /2);
    floorMesh5.rotation.x = Math.PI / 2;
    floorMesh5.rotation.y = Math.PI / 2;
    scene.add( floorMesh5 );
    /****************************************/

    /*  TODO - new camera really necessary? */
    cameraOverlay = new THREE.OrthographicCamera( width / -2, width /2, height / 2, height / -2, 1, 10 );
    cameraOverlay.position.set( 0, 0, 10 );
    sceneOverlay.add(cameraOverlay);
    //

    group = new THREE.Group();
    scene.add( group );

    //

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
    directionalLight.position.set( 0.75, 0.75, 1.0 ).normalize();
    scene.add( directionalLight );

    var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.2 );
    scene.add( ambientLight );

    //
    center = { x: 455, y: 205 };


    var cmaps = [ 'rainbow', 'cooltowarm', 'blackbody', 'grayscale' ];
    // var colorNumbers = ['16', '128', '256', '512' ];
    var colorBrewer5CatMap = ['#fef0d9','#fdcc8a','#fc8d59','#e34a33','#b30000'];

    lut = new THREE.Lut( cmaps[3], 512 );           
    var upper_colormap_bound_index = 750000 / max_amount * 511.0;
    tmp = Array.from(new Array(512),(val,index)=>[index / 511.0, '0x' + (new THREE.Color(d3.interpolateRdYlGn(index < upper_colormap_bound_index ? index / upper_colormap_bound_index - 0.05: 0.95 + 0.05 * (index - upper_colormap_bound_index) / (511 - upper_colormap_bound_index) )).getHexString())]);
    lut.addColorMap('rdylgn', tmp);
    lut = lut.changeColorMap('rdylgn');
    var roundedMax = Math.round( max_amount / Math.pow(10,5)) * Math.pow(10,5); 
    lut.setMax( roundedMax );
    lut.setMin( 0 );


    var obj = initSVGObject();
    addGeoObject( group, obj );


    var mapBaseGeometry = new THREE.PlaneGeometry( 1024, 1024, 1, 1);
    mapBaseMaterial = new THREE.MeshBasicMaterial( { map: mapBase, fog: false, side: THREE.DoubleSide} );
    var mapBaseMesh = new THREE.Mesh( mapBaseGeometry, mapBaseMaterial );
    mapBaseMesh.position.set(512 - center.x, -512 + center.y, 0);
    mapBaseMaterial.transparent = true;
    mapBaseMaterial.opacity = 0;
    scene.add( mapBaseMesh );

    legend = lut.setLegendOn( { 'layout':'vertical', position: { x: 650, y: -height / 25, z: 1 } , dimensions: { width: 50, height: height/2 }});
    legend.material.transparent = true;
    legend.material.opacity = 0;
    sceneOverlay.add(legend);
    labels = lut.setLegendLabels({ 'fontsize': 20, 'title': 'Average House Price', 'um': '$', 'ticks': 5, 'fontface': 'Helvetica'});
    sceneOverlay.add ( labels['title'] );
    labels['title'].scale.set(labels['title'].scale.x * 100, labels['title'].scale.y * 100, labels['title'].scale.z);
    labels['title'].position.set(lut.legend.position.x/* + lut.legend.dimensions.width */, labels['title'].position.y, labels['title'].position.z);
    labels['title'].material.transparent = true;
    labels['title'].material.opacity = 0;
    for ( var i = 0; i < Object.keys( labels[ 'ticks' ] ).length; i++ ) {
        sceneOverlay.add ( labels[ 'lines' ][ i ] );
        labels[ 'lines' ][ i ].position.set(labels[ 'lines' ][ i ].position.x, labels[ 'lines' ][ i ].position.y, labels[ 'lines' ][ i ].position.z);
        labels[ 'lines' ][ i ].material.transparent = true;
        labels[ 'lines' ][ i ].material.opacity = 0;
        sceneOverlay.add ( labels[ 'ticks' ][ i ] );
        labels[ 'ticks' ][ i ].scale.set(labels[ 'ticks' ][ i ].scale.x * 100, labels[ 'ticks' ][ i ].scale.y * 100, labels[ 'ticks' ][ i ].scale.z);
        labels['ticks'][i].position.set(labels['ticks'][i].position.x, labels[ 'ticks' ][ i ].position.y + 2*i + 10, labels['ticks'][i].position.z);
        labels[ 'ticks' ][ i ].material.transparent = true;
        labels[ 'ticks' ][ i ].material.opacity = 0;
    }

    //

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.autoClear = false; // To allow render overlay on top of sprited sphere
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );
    container.appendChild( renderer.domElement );

    //

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.target.set(0, 0, 0);
    controls.minAzimuthAngle = - Math.PI /2 * 0.9 ;
    controls.maxAzimuthAngle = Math.PI / 2 * 0.9;
    controls.minPolarAngle =  Math.PI * 0.05;
    controls.maxPolarAngle =  Math.PI * 0.95;
    controls.update();

    cameraInitialRotation = { x: camera.rotation.x, y: camera.rotation.y, z: camera.rotation.z };
    //

    stats = new Stats();
    container.appendChild( stats.dom );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}


/// Part from g0v/twgeojson
/// Graphic Engine and Geo Data Init Functions
var addGeoObject = function( group, svgObject ) {

    var id_path_pairs = svgObject.id_path_pairs;
    var center = svgObject.center;

    pathShapes = [];
    path_to_county_geo = [];
    mapShape = [];
    var k = 0;
    for ( var i = 0; i < id_path_pairs.length; i ++ ) {


        path_to_county_geo[i] = county_geo.findIndex(function (obj) { return obj.id === id_path_pairs[ i ].id; });
        var amount = county_geo[path_to_county_geo[i]].properties[attributeArray[currentAttribute]];

        var path = $d3g.transformSVGPath( id_path_pairs[ i ].path );
        var color =  lut.getColor(Math.max(amount, 0));

        var material = new THREE.MeshLambertMaterial( {
            color: color,
            emissive: color,
        } );

        var simpleShapes = path.toShapes( true );
        mapShape = [...mapShape, ...simpleShapes];

        for ( var j = 0; j < simpleShapes.length; j ++ ) {

            pathShapes[k] = i;
            var shape3d = new THREE.ExtrudeBufferGeometry( simpleShapes[ j ], {
                amount: max_amount / factor,
                bevelEnabled: false
            } );

            var mesh = new THREE.Mesh( shape3d, material );

            mesh.rotation.x = Math.PI;              
            mesh.translateZ( - amount / factor - 1 - (amount < 0 ? 0: 1350));
            mesh.translateX( - center.x );
            mesh.translateY( - center.y );

            group.add( mesh );

            k++;
        }

    }

};

function initSVGObject() {

    var obj = {};

    /// The geo data of USA in SVG form
    obj.id_path_pairs = county_us_topo_albersUsa_svg_path_list; //.slice(0, 1705);  // slice for fast prototyping
    obj.center = center;

    return obj;

}



// ANIMATION FUNCTIONS
function animate() {

    requestAnimationFrame( animate );

    camera.updateProjectionMatrix();

    stats.update();

    TWEEN.update();
    tweenGroup2D3D.update();

    controls.update();

    render();

}

function render() {
    renderer.clear();
    renderer.render( scene, camera );
    renderer.clearDepth();
    renderer.render( sceneOverlay, cameraOverlay );
}

// from https://stackoverflow.com/questions/38395589/is-it-possible-to-tween-orbit-controls-with-three-js
function panCam(xTarget,yTarget,zTarget,tweenDuration){

    tweenGroup2D3D.removeAll();

    var camNewPosition= { x : xTarget, y : yTarget, z : zTarget};
    var camPosTween = new TWEEN.Tween(camera.position, tweenGroup2D3D).to(camNewPosition, tweenDuration).easing(TWEEN.Easing.Sinusoidal.InOut).start();
    var controlsPosTween = new TWEEN.Tween(controls.target).to({x: 0, y: 0, z:0}, tweenDuration).easing(TWEEN.Easing.Sinusoidal.InOut).start();
    var camRotTween = new TWEEN.Tween(camera.rotation, tweenGroup2D3D).to(cameraInitialRotation, tweenDuration).easing(TWEEN.Easing.Sinusoidal.InOut).start();
    var curZoom = {value: camera.zoom};
    var newZoom = {value: 1};
    var camZoomTween = new TWEEN.Tween(curZoom, tweenGroup2D3D).to(newZoom, tweenDuration).easing(TWEEN.Easing.Sinusoidal.InOut);
    camZoomTween.onUpdate(function() {
        camera.zoom = curZoom.value;
    });
    camZoomTween.start();
}

function step() {

    var amnt = county_geo[path_to_county_geo[0]].properties[attributeArray[currentAttribute]];
    var clr = lut.getColor(Math.max(amnt, 0));
    for (let [i, mesh] of group.children.entries()) {
        if (i > 0 && pathShapes[i-1] != pathShapes[i]) {
            amnt = county_geo[path_to_county_geo[pathShapes[i]]].properties[attributeArray[currentAttribute]];
            clr = lut.getColor(Math.max(amnt, 0));
        }

        new TWEEN.Tween(mesh.material.color)
            .to(clr, 1000)
            .easing(TWEEN.Easing.Quartic.Out)
            .start();
        new TWEEN.Tween(mesh.material.emissive)
            .to(clr, 1000)
            .easing(TWEEN.Easing.Quartic.Out)
            .start();

        new TWEEN.Tween(mesh.position)
            .to({z: amnt / factor + 1}, 1000)
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .start();

    }
}

function onWindowResize() {
    // Works
    width = window.innerWidth * scale;
    height = window.innerHeight * scale;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );

}

function animateMap() {
    var dateFormat = d3.time.format("%Y-%m");

    d3.select("#slider")
        .call(chroniton()
            .domain([dateFormat.parse(attributeArray[0]), dateFormat.parse(attributeArray[attributeArray.length - 1])])
            .labelFormat(d3.time.format('%Y-%m'))
            .width(width)
            .playButton(true)
            .loop(false) // can also be set to loop
            .playbackRate(0.1) // 1.00 = 10px?
            .on("change", function (d) {
                filterValue = dateFormat(d);
                currentAttribute = attributeArray.indexOf(filterValue);
                step();
            })
        );
}
