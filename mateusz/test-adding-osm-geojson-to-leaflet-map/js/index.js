
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([38.8486555, -104.824], 17);

// add an OpenStreetMap tile layer
/*
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);
/*
L.tileLayer('http://a{s}.acetate.geoiq.com/tiles/acetate-hillshading/{z}/{x}/{y}.png', {
	attribution: '&copy;2012 Esri & Stamen, Data from OSM and Natural Earth',
	subdomains: '0123',
	minZoom: 2,
	maxZoom: 18
}).addTo(map);
*/

var buildings = {
  "type": "FeatureCollection",
  "generator": "overpass-turbo",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2014-08-06T20:01:02Z",
  "features": [
    {
      "type": "Feature",
      "id": "way/231407632",
      "properties": {
        "@id": "way/231407632",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8297137,
              38.851659
            ],
            [
              -104.8296285,
              38.8516574
            ],
            [
              -104.8296231,
              38.8518245
            ],
            [
              -104.8294857,
              38.8518219
            ],
            [
              -104.829484,
              38.8518779
            ],
            [
              -104.8297066,
              38.8518822
            ],
            [
              -104.8297137,
              38.851659
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407634",
      "properties": {
        "@id": "way/231407634",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1148",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "apartments",
        "building:levels": "3",
        "height": "9 m",
        "name": "Hamlin House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8270189,
              38.8500789
            ],
            [
              -104.8270069,
              38.8500784
            ],
            [
              -104.8269352,
              38.8500754
            ],
            [
              -104.8269382,
              38.8500301
            ],
            [
              -104.8268984,
              38.8500284
            ],
            [
              -104.8268972,
              38.8500453
            ],
            [
              -104.8267784,
              38.8500404
            ],
            [
              -104.8267768,
              38.8500632
            ],
            [
              -104.8267711,
              38.8501471
            ],
            [
              -104.8268554,
              38.8501505
            ],
            [
              -104.8268544,
              38.8501641
            ],
            [
              -104.8268821,
              38.8501652
            ],
            [
              -104.8268801,
              38.8501938
            ],
            [
              -104.8270107,
              38.8501992
            ],
            [
              -104.8270168,
              38.8501092
            ],
            [
              -104.8270189,
              38.8500789
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407639",
      "properties": {
        "@id": "way/231407639",
        "building": "yes",
        "name": "Williams Central Plant",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8266053,
              38.8473017
            ],
            [
              -104.8265817,
              38.8477364
            ],
            [
              -104.8266582,
              38.8477389
            ],
            [
              -104.826646,
              38.8479636
            ],
            [
              -104.8267263,
              38.8479662
            ],
            [
              -104.826743,
              38.8476578
            ],
            [
              -104.8268045,
              38.8476598
            ],
            [
              -104.8268203,
              38.847368
            ],
            [
              -104.8267867,
              38.8473669
            ],
            [
              -104.8267899,
              38.8473078
            ],
            [
              -104.8266053,
              38.8473017
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407641",
      "properties": {
        "@id": "way/231407641",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8270042,
              38.8502994
            ],
            [
              -104.8269191,
              38.8502993
            ],
            [
              -104.826919,
              38.8503347
            ],
            [
              -104.826892,
              38.8503346
            ],
            [
              -104.826892,
              38.850358
            ],
            [
              -104.8270041,
              38.8503582
            ],
            [
              -104.8270042,
              38.8502994
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407642",
      "properties": {
        "@id": "way/231407642",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.827225,
              38.8515864
            ],
            [
              -104.8272222,
              38.8516487
            ],
            [
              -104.827325,
              38.8516515
            ],
            [
              -104.8273278,
              38.8515893
            ],
            [
              -104.827225,
              38.8515864
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407643",
      "properties": {
        "@id": "way/231407643",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1070",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "apartments",
        "building:levels": "4",
        "height": "13 m",
        "name": "Blanca Apartments",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8267895,
              38.848981
            ],
            [
              -104.8267883,
              38.8489974
            ],
            [
              -104.8266783,
              38.8489932
            ],
            [
              -104.826673,
              38.8490705
            ],
            [
              -104.8266962,
              38.8490729
            ],
            [
              -104.8266998,
              38.8490997
            ],
            [
              -104.8267337,
              38.8491
            ],
            [
              -104.8267347,
              38.8491185
            ],
            [
              -104.82679,
              38.8491188
            ],
            [
              -104.8267927,
              38.8490958
            ],
            [
              -104.8269588,
              38.8490994
            ],
            [
              -104.8270797,
              38.8491021
            ],
            [
              -104.827077,
              38.8490791
            ],
            [
              -104.8272102,
              38.8490798
            ],
            [
              -104.8272149,
              38.8489916
            ],
            [
              -104.8271332,
              38.8489896
            ],
            [
              -104.8270929,
              38.8489886
            ],
            [
              -104.8269587,
              38.8489852
            ],
            [
              -104.8267895,
              38.848981
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407652",
      "properties": {
        "@id": "way/231407652",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1228",
        "addr:postcode": "80903",
        "addr:street": "North Wood Avenue",
        "building": "house",
        "building:levels": "2",
        "height": "7.5 m",
        "name": "Stewart House",
        "nickname": "President's House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8266369,
              38.8519384
            ],
            [
              -104.8266348,
              38.851981
            ],
            [
              -104.826571,
              38.8519792
            ],
            [
              -104.826567,
              38.8520628
            ],
            [
              -104.8265898,
              38.8520635
            ],
            [
              -104.8265871,
              38.8521191
            ],
            [
              -104.8265649,
              38.8521184
            ],
            [
              -104.8265611,
              38.8521988
            ],
            [
              -104.8267859,
              38.8522053
            ],
            [
              -104.8267983,
              38.8519431
            ],
            [
              -104.8266369,
              38.8519384
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407653",
      "properties": {
        "@id": "way/231407653",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "44",
        "addr:postcode": "80903",
        "addr:street": "West Cache La Poudre Street",
        "amenity": "swimming_pool",
        "amenity_1": "climbing_wall",
        "amenity_2": "weight_lifting",
        "amenity_3": "cardio_room",
        "building": "yes",
        "height": "14 m",
        "leisure": "sports_centre",
        "level": "2",
        "name": "El Pomar Sports Center",
        "operator": "Colorado College",
        "phone": "+1-719-389-6475",
        "sport": "multi",
        "start_date": "1970"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8276745,
              38.8468714
            ],
            [
              -104.8275634,
              38.8468654
            ],
            [
              -104.8271759,
              38.846853
            ],
            [
              -104.8271477,
              38.846852
            ],
            [
              -104.8271468,
              38.8468335
            ],
            [
              -104.8270422,
              38.8468273
            ],
            [
              -104.8270404,
              38.8468478
            ],
            [
              -104.8269107,
              38.8468461
            ],
            [
              -104.826909,
              38.846875
            ],
            [
              -104.8265916,
              38.8468628
            ],
            [
              -104.8265808,
              38.8472701
            ],
            [
              -104.8268893,
              38.8472806
            ],
            [
              -104.8268695,
              38.8479643
            ],
            [
              -104.8269653,
              38.847981
            ],
            [
              -104.82701,
              38.8479666
            ],
            [
              -104.8270601,
              38.84794
            ],
            [
              -104.827097,
              38.8479113
            ],
            [
              -104.8271207,
              38.8478641
            ],
            [
              -104.827126,
              38.8478312
            ],
            [
              -104.8271339,
              38.8477923
            ],
            [
              -104.8271286,
              38.8477492
            ],
            [
              -104.8271233,
              38.8477184
            ],
            [
              -104.8271233,
              38.8476856
            ],
            [
              -104.8271312,
              38.8476486
            ],
            [
              -104.8271391,
              38.8476179
            ],
            [
              -104.8271497,
              38.8475789
            ],
            [
              -104.8271707,
              38.8475502
            ],
            [
              -104.8271918,
              38.8475153
            ],
            [
              -104.8272187,
              38.8474818
            ],
            [
              -104.8272629,
              38.8474435
            ],
            [
              -104.8273351,
              38.847406
            ],
            [
              -104.8274048,
              38.8473768
            ],
            [
              -104.8274799,
              38.847358
            ],
            [
              -104.827547,
              38.8473434
            ],
            [
              -104.8276435,
              38.8473371
            ],
            [
              -104.8276537,
              38.8472033
            ],
            [
              -104.8276832,
              38.8472074
            ],
            [
              -104.8276832,
              38.8472471
            ],
            [
              -104.8277556,
              38.8472513
            ],
            [
              -104.8277583,
              38.847174
            ],
            [
              -104.8278039,
              38.8471803
            ],
            [
              -104.8278039,
              38.8471552
            ],
            [
              -104.8277208,
              38.8470278
            ],
            [
              -104.8277261,
              38.8469463
            ],
            [
              -104.8276752,
              38.8469442
            ],
            [
              -104.8276745,
              38.8468714
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407657",
      "properties": {
        "@id": "way/231407657",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "920",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "dormitory",
        "building:levels": "4",
        "height": "14 m",
        "name": "Bemis Hall",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.826559,
              38.8480977
            ],
            [
              -104.8265496,
              38.8482036
            ],
            [
              -104.8264584,
              38.8481973
            ],
            [
              -104.826394,
              38.8482349
            ],
            [
              -104.8263484,
              38.8482391
            ],
            [
              -104.8263414,
              38.8483936
            ],
            [
              -104.8263404,
              38.8484166
            ],
            [
              -104.8265111,
              38.8484232
            ],
            [
              -104.8265111,
              38.8484483
            ],
            [
              -104.8266935,
              38.8484587
            ],
            [
              -104.8266935,
              38.8484295
            ],
            [
              -104.8267633,
              38.8484332
            ],
            [
              -104.826892,
              38.8484399
            ],
            [
              -104.8269081,
              38.8482624
            ],
            [
              -104.8267149,
              38.8482457
            ],
            [
              -104.8267257,
              38.8481078
            ],
            [
              -104.826559,
              38.8480977
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407659",
      "properties": {
        "@id": "way/231407659",
        "addr:housenumber": "1140",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "apartments",
        "building:levels": "2",
        "height": "8 m",
        "name": "Faculty/Staff Housing",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8267087,
              38.850704
            ],
            [
              -104.826707,
              38.8507299
            ],
            [
              -104.8266648,
              38.8507282
            ],
            [
              -104.8266604,
              38.8507943
            ],
            [
              -104.8266595,
              38.8508085
            ],
            [
              -104.8267003,
              38.8508102
            ],
            [
              -104.8266977,
              38.8508499
            ],
            [
              -104.8268705,
              38.8508568
            ],
            [
              -104.826875,
              38.8507893
            ],
            [
              -104.8269538,
              38.8507925
            ],
            [
              -104.8269569,
              38.8507443
            ],
            [
              -104.826916,
              38.8507426
            ],
            [
              -104.8269207,
              38.8506724
            ],
            [
              -104.8268588,
              38.8506699
            ],
            [
              -104.8268562,
              38.8507099
            ],
            [
              -104.8267087,
              38.850704
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407661",
      "properties": {
        "@id": "way/231407661",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8281121,
              38.847089
            ],
            [
              -104.8280564,
              38.847108
            ],
            [
              -104.8280958,
              38.8471812
            ],
            [
              -104.8281529,
              38.8471619
            ],
            [
              -104.8281121,
              38.847089
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407671",
      "properties": {
        "@id": "way/231407671",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1090",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "restaurant",
        "amenity_1": "event hall",
        "building": "yes",
        "building:levels": "3",
        "height": "14 m",
        "name": "Jerome P. McHugh Student Commons and Alumni Complex",
        "nickname": "The Preserve",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8268429,
              38.8491919
            ],
            [
              -104.826664,
              38.8491857
            ],
            [
              -104.8266596,
              38.8492376
            ],
            [
              -104.8266398,
              38.8492379
            ],
            [
              -104.8266301,
              38.8493149
            ],
            [
              -104.8266559,
              38.8493173
            ],
            [
              -104.8266193,
              38.8494089
            ],
            [
              -104.8266113,
              38.8496219
            ],
            [
              -104.8267123,
              38.8496222
            ],
            [
              -104.8267096,
              38.8495846
            ],
            [
              -104.8267391,
              38.8495846
            ],
            [
              -104.8267391,
              38.8495596
            ],
            [
              -104.8267605,
              38.8495596
            ],
            [
              -104.8267605,
              38.849522
            ],
            [
              -104.8267954,
              38.849522
            ],
            [
              -104.8267945,
              38.8494569
            ],
            [
              -104.8267931,
              38.8493462
            ],
            [
              -104.8267927,
              38.8493214
            ],
            [
              -104.8268437,
              38.8493214
            ],
            [
              -104.8268429,
              38.8491919
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407674",
      "properties": {
        "@id": "way/231407674",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "930",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "dormitory",
        "building:levels": "4",
        "height": "11 m",
        "name": "McGregor Hall",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8271566,
              38.8485272
            ],
            [
              -104.8269834,
              38.8485196
            ],
            [
              -104.8269609,
              38.8488295
            ],
            [
              -104.8271341,
              38.8488371
            ],
            [
              -104.8271566,
              38.8485272
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407677",
      "properties": {
        "@id": "way/231407677",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8271264,
              38.8502792
            ],
            [
              -104.8271221,
              38.8503646
            ],
            [
              -104.8271494,
              38.8503654
            ],
            [
              -104.8273133,
              38.8503704
            ],
            [
              -104.8273176,
              38.850285
            ],
            [
              -104.8271264,
              38.8502792
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407678",
      "properties": {
        "@id": "way/231407678",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1210",
        "addr:postcode": "80903",
        "addr:street": "North Wood Avenue",
        "building": "house",
        "building:levels": "2",
        "height": "7.5",
        "name": "Current President's House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.826645,
              38.8515125
            ],
            [
              -104.8266441,
              38.851575
            ],
            [
              -104.8266046,
              38.8515751
            ],
            [
              -104.8265886,
              38.8515879
            ],
            [
              -104.8265897,
              38.8516093
            ],
            [
              -104.8266042,
              38.8516214
            ],
            [
              -104.8266434,
              38.851621
            ],
            [
              -104.8266425,
              38.8516783
            ],
            [
              -104.8267763,
              38.8516795
            ],
            [
              -104.8267767,
              38.8516507
            ],
            [
              -104.8268476,
              38.8516513
            ],
            [
              -104.8268494,
              38.8515315
            ],
            [
              -104.8267007,
              38.8515301
            ],
            [
              -104.826701,
              38.851513
            ],
            [
              -104.826645,
              38.8515125
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407679",
      "properties": {
        "@id": "way/231407679",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "30",
        "addr:postcode": "80903",
        "addr:street": "West Cache La Poudre Street",
        "building": "yes",
        "building:levels": "1",
        "height": "5 m",
        "leisure": "ice_rink",
        "name": "Honnen Ice Arena",
        "operator": "Colorado College",
        "sport": "multi"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8265326,
              38.8467713
            ],
            [
              -104.8260109,
              38.846756
            ],
            [
              -104.8259862,
              38.8472692
            ],
            [
              -104.8260588,
              38.8472713
            ],
            [
              -104.8260572,
              38.8473056
            ],
            [
              -104.8260545,
              38.8473484
            ],
            [
              -104.8263959,
              38.8473611
            ],
            [
              -104.82642,
              38.847362
            ],
            [
              -104.8264225,
              38.8473182
            ],
            [
              -104.8264242,
              38.8472839
            ],
            [
              -104.8265077,
              38.8472864
            ],
            [
              -104.8265326,
              38.8467713
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407683",
      "properties": {
        "@id": "way/231407683",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.827262,
              38.8508526
            ],
            [
              -104.827259,
              38.8509135
            ],
            [
              -104.8272583,
              38.8509267
            ],
            [
              -104.8273334,
              38.8509289
            ],
            [
              -104.8273371,
              38.8508549
            ],
            [
              -104.827262,
              38.8508526
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407687",
      "properties": {
        "@id": "way/231407687",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1090",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "apartments",
        "building:levels": "4",
        "height": "14 m",
        "name": "John Lord Knight Apartment Complex",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8271414,
              38.8495408
            ],
            [
              -104.8271763,
              38.8494572
            ],
            [
              -104.8270646,
              38.8494318
            ],
            [
              -104.8270717,
              38.849405
            ],
            [
              -104.8269772,
              38.8493851
            ],
            [
              -104.8267931,
              38.8493462
            ],
            [
              -104.8267945,
              38.8494569
            ],
            [
              -104.8268956,
              38.8494814
            ],
            [
              -104.8271414,
              38.8495408
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407688",
      "properties": {
        "@id": "way/231407688",
        "addr:housenumber": "1144",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "apartments",
        "building:levels": "2",
        "height": "8 m",
        "name": "Faculty/Staff Housing",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8266995,
              38.8504375
            ],
            [
              -104.8266952,
              38.8504915
            ],
            [
              -104.8266903,
              38.8505761
            ],
            [
              -104.8266894,
              38.8505879
            ],
            [
              -104.8269164,
              38.8505983
            ],
            [
              -104.8269197,
              38.8505554
            ],
            [
              -104.8268991,
              38.8505544
            ],
            [
              -104.8269024,
              38.8505101
            ],
            [
              -104.8269074,
              38.8504475
            ],
            [
              -104.8266995,
              38.8504375
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407690",
      "properties": {
        "@id": "way/231407690",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1040",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "apartments",
        "building:levels": "4",
        "height": "13 m",
        "name": "Antero Apartments",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8262187,
              38.8488138
            ],
            [
              -104.8262181,
              38.8489019
            ],
            [
              -104.8263314,
              38.8489058
            ],
            [
              -104.826326,
              38.8489287
            ],
            [
              -104.8265993,
              38.848934
            ],
            [
              -104.826712,
              38.8489363
            ],
            [
              -104.8267552,
              38.8489371
            ],
            [
              -104.8267579,
              38.8489225
            ],
            [
              -104.8268491,
              38.8489266
            ],
            [
              -104.8268544,
              38.8488452
            ],
            [
              -104.8267642,
              38.8488407
            ],
            [
              -104.8267659,
              38.8488118
            ],
            [
              -104.8267067,
              38.8488082
            ],
            [
              -104.8266569,
              38.8488052
            ],
            [
              -104.8266542,
              38.848824
            ],
            [
              -104.8265993,
              38.8488222
            ],
            [
              -104.8264021,
              38.8488156
            ],
            [
              -104.8264065,
              38.8487971
            ],
            [
              -104.8262563,
              38.848793
            ],
            [
              -104.8262541,
              38.8488135
            ],
            [
              -104.8262187,
              38.8488138
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407691",
      "properties": {
        "@id": "way/231407691",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "906",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "Academic_Building",
        "building:levels": "1",
        "height": "3 m",
        "name": "Cossitt Hall",
        "occupier": "Dance Department",
        "occupier_1": "Classics Department",
        "operator": "Colorado College",
        "start_date": "1914"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.826554,
              38.8473244
            ],
            [
              -104.8264225,
              38.8473182
            ],
            [
              -104.82642,
              38.847362
            ],
            [
              -104.8263959,
              38.8473611
            ],
            [
              -104.8263835,
              38.8473941
            ],
            [
              -104.8263582,
              38.8474213
            ],
            [
              -104.8263233,
              38.8474393
            ],
            [
              -104.8262643,
              38.8474498
            ],
            [
              -104.8262087,
              38.847452
            ],
            [
              -104.8261544,
              38.8474424
            ],
            [
              -104.8261097,
              38.8474228
            ],
            [
              -104.826072,
              38.8473935
            ],
            [
              -104.8260545,
              38.8473484
            ],
            [
              -104.8260572,
              38.8473056
            ],
            [
              -104.8259237,
              38.8473035
            ],
            [
              -104.8259185,
              38.8475147
            ],
            [
              -104.8259156,
              38.8476357
            ],
            [
              -104.8259402,
              38.847638
            ],
            [
              -104.8265352,
              38.8476503
            ],
            [
              -104.826554,
              38.8473244
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407692",
      "properties": {
        "@id": "way/231407692",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "920",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "theatre",
        "amenity_1": "press",
        "building": "commercial",
        "building:levels": "1",
        "height": "3 m",
        "name": "Taylor Hall",
        "nickname": "Taylor Theatre",
        "nickname_1": "The Printing Press",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8259791,
              38.8481542
            ],
            [
              -104.8259747,
              38.8481893
            ],
            [
              -104.8259468,
              38.8481994
            ],
            [
              -104.8259422,
              38.8482728
            ],
            [
              -104.8260578,
              38.8482791
            ],
            [
              -104.8262482,
              38.8483919
            ],
            [
              -104.8263414,
              38.8483936
            ],
            [
              -104.8263484,
              38.8482391
            ],
            [
              -104.826394,
              38.8482349
            ],
            [
              -104.8264584,
              38.8481973
            ],
            [
              -104.8264601,
              38.8481725
            ],
            [
              -104.8259791,
              38.8481542
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407693",
      "properties": {
        "@id": "way/231407693",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8294634,
              38.851695
            ],
            [
              -104.8293968,
              38.8516952
            ],
            [
              -104.8293973,
              38.8518008
            ],
            [
              -104.8294639,
              38.8518007
            ],
            [
              -104.8294634,
              38.851695
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407694",
      "properties": {
        "@id": "way/231407694",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8286231,
              38.8482105
            ],
            [
              -104.828605,
              38.8481762
            ],
            [
              -104.8284347,
              38.8482306
            ],
            [
              -104.8284528,
              38.8482649
            ],
            [
              -104.8286231,
              38.8482105
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231407695",
      "properties": {
        "@id": "way/231407695",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1158",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "apartments",
        "building:levels": "4",
        "height": "14 m",
        "name": "El Diente Apartments",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8267334,
              38.8496707
            ],
            [
              -104.8267321,
              38.849703
            ],
            [
              -104.8267033,
              38.8497023
            ],
            [
              -104.8267012,
              38.8497547
            ],
            [
              -104.8267266,
              38.8497553
            ],
            [
              -104.8267257,
              38.8497775
            ],
            [
              -104.826803,
              38.8497794
            ],
            [
              -104.8268022,
              38.8497992
            ],
            [
              -104.8270377,
              38.8498048
            ],
            [
              -104.8272211,
              38.8498093
            ],
            [
              -104.8272246,
              38.8497225
            ],
            [
              -104.8271044,
              38.8497196
            ],
            [
              -104.8271053,
              38.8496974
            ],
            [
              -104.8269587,
              38.8496938
            ],
            [
              -104.8268152,
              38.8496903
            ],
            [
              -104.8268159,
              38.8496728
            ],
            [
              -104.8267334,
              38.8496707
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528217",
      "properties": {
        "@id": "way/231528217",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1010",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "chapel",
        "building:levels": "2",
        "height": "9 m",
        "historic": "church",
        "historic:url": "http://www2.coloradocollege.edu/welcome/walkingtour/nrshovefinal.pdf",
        "name": "Shove Memorial Chapel",
        "occupier": "Chaplain's Office",
        "operator": "Colorado College",
        "phone": "+1-719-389-6638",
        "ref:NRHP": "5000426",
        "start_date": "1931",
        "url": "http://www2.coloradocollege.edu/welcome/walkingtour/shove.php"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8221024,
              38.8477715
            ],
            [
              -104.8220175,
              38.84777
            ],
            [
              -104.8220169,
              38.8477899
            ],
            [
              -104.8217053,
              38.8477842
            ],
            [
              -104.8217073,
              38.8477173
            ],
            [
              -104.8216252,
              38.8477158
            ],
            [
              -104.8216259,
              38.8476925
            ],
            [
              -104.8215784,
              38.8476917
            ],
            [
              -104.8215763,
              38.847761
            ],
            [
              -104.8214089,
              38.847758
            ],
            [
              -104.8214078,
              38.8477948
            ],
            [
              -104.8213474,
              38.8477937
            ],
            [
              -104.8213448,
              38.8478811
            ],
            [
              -104.8215851,
              38.8478855
            ],
            [
              -104.8215824,
              38.8479777
            ],
            [
              -104.8217235,
              38.8479803
            ],
            [
              -104.8217257,
              38.8479069
            ],
            [
              -104.8220934,
              38.8479136
            ],
            [
              -104.8220941,
              38.8478906
            ],
            [
              -104.8221315,
              38.8478913
            ],
            [
              -104.8221339,
              38.8478128
            ],
            [
              -104.8221012,
              38.8478122
            ],
            [
              -104.8221024,
              38.8477715
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528220",
      "properties": {
        "@id": "way/231528220",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1107",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "Academic_Building",
        "building:levels": "2",
        "height": "6 m",
        "name": "Mierow House",
        "nickname": "Education Department",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8239387,
              38.8495287
            ],
            [
              -104.8238634,
              38.8495275
            ],
            [
              -104.8237861,
              38.8495262
            ],
            [
              -104.8237855,
              38.8495592
            ],
            [
              -104.8237598,
              38.8495598
            ],
            [
              -104.8237571,
              38.8496418
            ],
            [
              -104.8237579,
              38.8497226
            ],
            [
              -104.8239316,
              38.8497268
            ],
            [
              -104.8239387,
              38.8495287
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528225",
      "properties": {
        "@id": "way/231528225",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "802",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8215574,
              38.845361
            ],
            [
              -104.8215577,
              38.8455281
            ],
            [
              -104.821662,
              38.845528
            ],
            [
              -104.8216617,
              38.8453609
            ],
            [
              -104.8215574,
              38.845361
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528233",
      "properties": {
        "@id": "way/231528233",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1124",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "apartments",
        "building": "apartments",
        "building:levels": "3",
        "height": "10",
        "name": "Edith Gaylord House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8255303,
              38.8498053
            ],
            [
              -104.8255182,
              38.8500395
            ],
            [
              -104.825538,
              38.8500401
            ],
            [
              -104.8255365,
              38.8500689
            ],
            [
              -104.8256647,
              38.850073
            ],
            [
              -104.8256618,
              38.8501301
            ],
            [
              -104.8258029,
              38.8501345
            ],
            [
              -104.8258018,
              38.8501548
            ],
            [
              -104.8258621,
              38.8501567
            ],
            [
              -104.8258631,
              38.8501387
            ],
            [
              -104.8259833,
              38.8501425
            ],
            [
              -104.8259896,
              38.8500201
            ],
            [
              -104.8259511,
              38.8500176
            ],
            [
              -104.8258419,
              38.8500154
            ],
            [
              -104.8258409,
              38.8500337
            ],
            [
              -104.8256912,
              38.850029
            ],
            [
              -104.825697,
              38.8499178
            ],
            [
              -104.8258308,
              38.849922
            ],
            [
              -104.8258298,
              38.8499421
            ],
            [
              -104.8259583,
              38.8499462
            ],
            [
              -104.8260027,
              38.8499476
            ],
            [
              -104.8260051,
              38.8499019
            ],
            [
              -104.8260277,
              38.8499026
            ],
            [
              -104.8260325,
              38.8498101
            ],
            [
              -104.825706,
              38.8497998
            ],
            [
              -104.8256785,
              38.8497989
            ],
            [
              -104.8256797,
              38.849775
            ],
            [
              -104.8255573,
              38.8497711
            ],
            [
              -104.8255555,
              38.8498061
            ],
            [
              -104.8255303,
              38.8498053
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528242",
      "properties": {
        "@id": "way/231528242",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1030",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "dormitory",
        "building:levels": "2",
        "height": "9 m",
        "name": "Montgomery Hall",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.825782,
              38.8488016
            ],
            [
              -104.8257797,
              38.8490013
            ],
            [
              -104.8259864,
              38.8490027
            ],
            [
              -104.8259879,
              38.8488768
            ],
            [
              -104.8259426,
              38.8488765
            ],
            [
              -104.8259429,
              38.8488558
            ],
            [
              -104.8259435,
              38.8488027
            ],
            [
              -104.825782,
              38.8488016
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528246",
      "properties": {
        "@id": "way/231528246",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1106",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "dormitory",
        "building:levels": "2",
        "height": "7 m",
        "name": "Arthur House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8213638,
              38.8494842
            ],
            [
              -104.8212806,
              38.8494821
            ],
            [
              -104.8212082,
              38.8494789
            ],
            [
              -104.8212069,
              38.8495019
            ],
            [
              -104.8211881,
              38.8495019
            ],
            [
              -104.8211859,
              38.8495577
            ],
            [
              -104.8211847,
              38.8495906
            ],
            [
              -104.8212271,
              38.8495915
            ],
            [
              -104.8212231,
              38.8497028
            ],
            [
              -104.8213725,
              38.849706
            ],
            [
              -104.8213739,
              38.8496655
            ],
            [
              -104.8214183,
              38.8496664
            ],
            [
              -104.8214208,
              38.849597
            ],
            [
              -104.8214094,
              38.8495949
            ],
            [
              -104.8214121,
              38.849528
            ],
            [
              -104.8213638,
              38.8494842
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528250",
      "properties": {
        "@id": "way/231528250",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1025",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "Academic_Building",
        "building:levels": "3",
        "height": "9 m",
        "name": "Palmer Hall",
        "occupier": "Political Science Department",
        "occupier_1": "Economics Department",
        "occupier_2": "Geology Department",
        "occupier_3": "Sociology Department",
        "operator": "Colorado College",
        "start_date": "1904"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8222217,
              38.848668
            ],
            [
              -104.8222069,
              38.8489616
            ],
            [
              -104.8222594,
              38.8489624
            ],
            [
              -104.8223944,
              38.8489645
            ],
            [
              -104.8223948,
              38.8489437
            ],
            [
              -104.8230135,
              38.8489586
            ],
            [
              -104.823013,
              38.8489829
            ],
            [
              -104.8232067,
              38.8489872
            ],
            [
              -104.8232212,
              38.8486952
            ],
            [
              -104.8230404,
              38.8486906
            ],
            [
              -104.823041,
              38.8487116
            ],
            [
              -104.8228962,
              38.8487069
            ],
            [
              -104.8228804,
              38.8486909
            ],
            [
              -104.8228571,
              38.8486818
            ],
            [
              -104.8228312,
              38.8486829
            ],
            [
              -104.8228336,
              38.8486481
            ],
            [
              -104.8226405,
              38.8486418
            ],
            [
              -104.8226378,
              38.8486898
            ],
            [
              -104.8226098,
              38.8486763
            ],
            [
              -104.8225826,
              38.8486741
            ],
            [
              -104.8225597,
              38.8486833
            ],
            [
              -104.8225477,
              38.8486957
            ],
            [
              -104.8223979,
              38.8486909
            ],
            [
              -104.8223967,
              38.8486697
            ],
            [
              -104.8222217,
              38.848668
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528256",
      "properties": {
        "@id": "way/231528256",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "902",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "cafeteria",
        "building": "university",
        "building:levels": "2",
        "name": "Worner Campus Center",
        "operator": "Colorado College",
        "start_date": "1966"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8255483,
              38.8468085
            ],
            [
              -104.8251858,
              38.8467972
            ],
            [
              -104.8250762,
              38.8467938
            ],
            [
              -104.825036,
              38.8468064
            ],
            [
              -104.8250125,
              38.8468295
            ],
            [
              -104.8249985,
              38.8470006
            ],
            [
              -104.8250548,
              38.8470069
            ],
            [
              -104.8250447,
              38.8473183
            ],
            [
              -104.8254705,
              38.847337
            ],
            [
              -104.8254846,
              38.8473726
            ],
            [
              -104.8255134,
              38.8473975
            ],
            [
              -104.825559,
              38.8474143
            ],
            [
              -104.8257146,
              38.8474226
            ],
            [
              -104.8257602,
              38.847408
            ],
            [
              -104.8257897,
              38.8473892
            ],
            [
              -104.8258058,
              38.8473599
            ],
            [
              -104.8258165,
              38.8470445
            ],
            [
              -104.8258434,
              38.8470466
            ],
            [
              -104.825846,
              38.8469818
            ],
            [
              -104.8259345,
              38.8469839
            ],
            [
              -104.8259399,
              38.8468649
            ],
            [
              -104.8255517,
              38.8468524
            ],
            [
              -104.8255483,
              38.8468085
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528257",
      "properties": {
        "@id": "way/231528257",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "14",
        "addr:postcode": "80903",
        "addr:street": "East Cache La Poudre Street",
        "building": "Academic_Building",
        "building:levels": "3",
        "height": "10 m",
        "name": "Armstrong Hall",
        "occupier": "English Department",
        "occupier_1": "Religion Department",
        "occupier_2": "Language Department",
        "occupier_3": "Administrative Offices",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8230863,
              38.8467669
            ],
            [
              -104.8230687,
              38.8471208
            ],
            [
              -104.8240653,
              38.8471509
            ],
            [
              -104.8240829,
              38.846797
            ],
            [
              -104.8230863,
              38.8467669
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528264",
      "properties": {
        "@id": "way/231528264",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1021",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "library",
        "building": "academic_building",
        "building:levels": "3",
        "height": "10 m",
        "name": "Tutt Library",
        "operator": "Colorado College",
        "phone": "+1-719-389-6184",
        "start_date": "1962"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8235873,
              38.8483559
            ],
            [
              -104.8235743,
              38.8486421
            ],
            [
              -104.8236889,
              38.8486452
            ],
            [
              -104.8236874,
              38.8486777
            ],
            [
              -104.8236858,
              38.8487207
            ],
            [
              -104.8235257,
              38.848717
            ],
            [
              -104.82352,
              38.8488646
            ],
            [
              -104.8235079,
              38.8491314
            ],
            [
              -104.8239046,
              38.8491423
            ],
            [
              -104.8239239,
              38.8487179
            ],
            [
              -104.8237888,
              38.8487141
            ],
            [
              -104.8237913,
              38.8486577
            ],
            [
              -104.8238999,
              38.8486607
            ],
            [
              -104.8239134,
              38.8483649
            ],
            [
              -104.8235873,
              38.8483559
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528267",
      "properties": {
        "@id": "way/231528267",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8221772,
              38.8459476
            ],
            [
              -104.8220305,
              38.8459399
            ],
            [
              -104.8220256,
              38.845997
            ],
            [
              -104.8221723,
              38.8460046
            ],
            [
              -104.8221772,
              38.8459476
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528271",
      "properties": {
        "@id": "way/231528271",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8236962,
              38.850249
            ],
            [
              -104.8236184,
              38.8502482
            ],
            [
              -104.8236139,
              38.8504964
            ],
            [
              -104.8236917,
              38.8504972
            ],
            [
              -104.8236935,
              38.8503958
            ],
            [
              -104.8236939,
              38.8503724
            ],
            [
              -104.8236962,
              38.850249
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528273",
      "properties": {
        "@id": "way/231528273",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "5",
        "addr:postcode": "80903",
        "addr:street": "West Cache La Poudre Street",
        "building": "Academic_Building",
        "building:levels": "2",
        "height": "6 m",
        "name": "Packard Hall",
        "occupier": "Art Department",
        "occupier_1": "Music Department",
        "operator": "Colorado College",
        "start_date": "1974"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8250974,
              38.8461633
            ],
            [
              -104.8250944,
              38.8462237
            ],
            [
              -104.8250421,
              38.8462221
            ],
            [
              -104.8250316,
              38.8464346
            ],
            [
              -104.8251706,
              38.8464387
            ],
            [
              -104.8251727,
              38.8463966
            ],
            [
              -104.8254842,
              38.8464059
            ],
            [
              -104.8255903,
              38.8464091
            ],
            [
              -104.8255966,
              38.8462826
            ],
            [
              -104.8258462,
              38.8462902
            ],
            [
              -104.8258444,
              38.8463258
            ],
            [
              -104.8258415,
              38.8463844
            ],
            [
              -104.8258371,
              38.8464742
            ],
            [
              -104.8258343,
              38.8465308
            ],
            [
              -104.8261219,
              38.8465394
            ],
            [
              -104.8261337,
              38.8463009
            ],
            [
              -104.8260814,
              38.846291
            ],
            [
              -104.8260881,
              38.846146
            ],
            [
              -104.8256186,
              38.8461245
            ],
            [
              -104.8256187,
              38.846179
            ],
            [
              -104.8250974,
              38.8461633
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528276",
      "properties": {
        "@id": "way/231528276",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1112",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "Academic_Building",
        "building:levels": "3",
        "height": "12 m",
        "name": "Russell T. Tutt Science Center",
        "nickname": "Tutt Science",
        "occupier": "Psychology Department",
        "occupier_1": "Mathematics Department",
        "occupier_2": "Environmental Science Department",
        "operator": "Colorado College",
        "start_date": "2003"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8221308,
              38.8493652
            ],
            [
              -104.8220797,
              38.8493641
            ],
            [
              -104.8219903,
              38.8493622
            ],
            [
              -104.8219913,
              38.8493342
            ],
            [
              -104.8218458,
              38.849331
            ],
            [
              -104.8218451,
              38.8493514
            ],
            [
              -104.8217625,
              38.8493496
            ],
            [
              -104.8217445,
              38.8498487
            ],
            [
              -104.8218532,
              38.849851
            ],
            [
              -104.8218522,
              38.8498769
            ],
            [
              -104.821943,
              38.8498789
            ],
            [
              -104.8219902,
              38.8498799
            ],
            [
              -104.8219913,
              38.8498496
            ],
            [
              -104.8221133,
              38.8498522
            ],
            [
              -104.8221157,
              38.8497853
            ],
            [
              -104.8221238,
              38.8495598
            ],
            [
              -104.8221308,
              38.8493652
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528277",
      "properties": {
        "@id": "way/231528277",
        "building": "yes",
        "name": "Art Department Sculpture Studio",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8218726,
              38.8460986
            ],
            [
              -104.8215927,
              38.8460923
            ],
            [
              -104.8215849,
              38.8462316
            ],
            [
              -104.8215846,
              38.8463173
            ],
            [
              -104.821865,
              38.8463244
            ],
            [
              -104.821872,
              38.8461574
            ],
            [
              -104.8218726,
              38.8460986
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528293",
      "properties": {
        "@id": "way/231528293",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1109",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "Academic_Building",
        "building:levels": "2",
        "height": "7 m",
        "name": "Dern House",
        "nickname": "Hullbert Center for Southwest Studies",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8240576,
              38.8495682
            ],
            [
              -104.8240584,
              38.8496472
            ],
            [
              -104.8240539,
              38.8496509
            ],
            [
              -104.8240201,
              38.84965
            ],
            [
              -104.8240176,
              38.8497052
            ],
            [
              -104.8240726,
              38.8497067
            ],
            [
              -104.8241549,
              38.8497089
            ],
            [
              -104.8241569,
              38.8496642
            ],
            [
              -104.824161,
              38.849571
            ],
            [
              -104.8240576,
              38.8495682
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528319",
      "properties": {
        "@id": "way/231528319",
        "addr:housenumber": "1132",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "dormitory",
        "building": "house",
        "building:levels": "2",
        "height": "7 m",
        "name": "Windom House",
        "nickname": "Spanish House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8248383,
              38.8503725
            ],
            [
              -104.8248382,
              38.8504204
            ],
            [
              -104.8248382,
              38.8504558
            ],
            [
              -104.8248697,
              38.8504578
            ],
            [
              -104.8248712,
              38.8505022
            ],
            [
              -104.8250977,
              38.85051
            ],
            [
              -104.8250977,
              38.8504787
            ],
            [
              -104.8251326,
              38.8504787
            ],
            [
              -104.8251317,
              38.8504559
            ],
            [
              -104.8251299,
              38.8504098
            ],
            [
              -104.825093,
              38.8504078
            ],
            [
              -104.8250903,
              38.8503647
            ],
            [
              -104.8248778,
              38.8503554
            ],
            [
              -104.8248784,
              38.8503744
            ],
            [
              -104.8248383,
              38.8503725
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528321",
      "properties": {
        "@id": "way/231528321",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "130",
        "addr:postcode": "80903",
        "addr:street": "East Cache La Poudre Street",
        "building": "dormitory",
        "building:levels": "4",
        "height": "13 m",
        "name": "Slocum Hall",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8214199,
              38.8467039
            ],
            [
              -104.8213983,
              38.8471677
            ],
            [
              -104.8214975,
              38.8471705
            ],
            [
              -104.8214982,
              38.8471545
            ],
            [
              -104.8215772,
              38.8471767
            ],
            [
              -104.8215719,
              38.8472895
            ],
            [
              -104.8215661,
              38.8474368
            ],
            [
              -104.8215625,
              38.8475147
            ],
            [
              -104.8217324,
              38.8475194
            ],
            [
              -104.8217481,
              38.8471786
            ],
            [
              -104.8221631,
              38.8471871
            ],
            [
              -104.8221622,
              38.8471479
            ],
            [
              -104.8221631,
              38.8470962
            ],
            [
              -104.822219,
              38.8470981
            ],
            [
              -104.8222194,
              38.8470748
            ],
            [
              -104.8222221,
              38.8470049
            ],
            [
              -104.8221859,
              38.8470038
            ],
            [
              -104.8221745,
              38.8470033
            ],
            [
              -104.8221658,
              38.8470017
            ],
            [
              -104.8221463,
              38.8470022
            ],
            [
              -104.8221645,
              38.8467118
            ],
            [
              -104.8220101,
              38.8467096
            ],
            [
              -104.8219961,
              38.8469983
            ],
            [
              -104.8219936,
              38.8470499
            ],
            [
              -104.8219917,
              38.847076
            ],
            [
              -104.8218119,
              38.8470698
            ],
            [
              -104.8218131,
              38.8470447
            ],
            [
              -104.8218166,
              38.8469681
            ],
            [
              -104.8215506,
              38.8469605
            ],
            [
              -104.8215624,
              38.846708
            ],
            [
              -104.8214199,
              38.8467039
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528322",
      "properties": {
        "@id": "way/231528322",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "926",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "dormitory",
        "building:levels": "3",
        "height": "10 m",
        "name": "Ticknor Hall",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8259291,
              38.8483756
            ],
            [
              -104.8259228,
              38.8484694
            ],
            [
              -104.825921,
              38.8484964
            ],
            [
              -104.8259153,
              38.848581
            ],
            [
              -104.8260669,
              38.8485872
            ],
            [
              -104.8260718,
              38.8485155
            ],
            [
              -104.8262156,
              38.8485214
            ],
            [
              -104.826221,
              38.8484427
            ],
            [
              -104.8261073,
              38.8484384
            ],
            [
              -104.8260674,
              38.8484364
            ],
            [
              -104.8260711,
              38.8483814
            ],
            [
              -104.8259291,
              38.8483756
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528336",
      "properties": {
        "@id": "way/231528336",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1115",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "Academic_Building",
        "building:levels": "2",
        "height": "7 m",
        "name": "Interdisciplinary House",
        "occupier": "Feminist and Gender Studies Department",
        "occupier_1": "Race and Ethnic Studies",
        "occupier_2": "Asian Studies",
        "operator": "Colorado College",
        "phone": "+1-719-389-6909"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8239454,
              38.8498863
            ],
            [
              -104.8239425,
              38.8499584
            ],
            [
              -104.8241696,
              38.8499639
            ],
            [
              -104.8241723,
              38.8499147
            ],
            [
              -104.8241496,
              38.8499142
            ],
            [
              -104.8241514,
              38.8498663
            ],
            [
              -104.8240812,
              38.8498646
            ],
            [
              -104.8240825,
              38.8498303
            ],
            [
              -104.8240084,
              38.8498286
            ],
            [
              -104.8240072,
              38.849861
            ],
            [
              -104.823983,
              38.8498604
            ],
            [
              -104.8239819,
              38.8498872
            ],
            [
              -104.8239454,
              38.8498863
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528337",
      "properties": {
        "@id": "way/231528337",
        "addr:housenumber": "1196",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "dormitory",
        "building": "house",
        "building:levels": "2",
        "height": "7 m",
        "name": "Haskell House",
        "nickname": "French House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8248536,
              38.8506374
            ],
            [
              -104.8248508,
              38.8507107
            ],
            [
              -104.8248492,
              38.8507525
            ],
            [
              -104.8248483,
              38.8507774
            ],
            [
              -104.8248804,
              38.8507795
            ],
            [
              -104.8248804,
              38.8508108
            ],
            [
              -104.8249475,
              38.8508108
            ],
            [
              -104.8249475,
              38.8507607
            ],
            [
              -104.8249877,
              38.8507607
            ],
            [
              -104.8249877,
              38.8506876
            ],
            [
              -104.8249616,
              38.8506877
            ],
            [
              -104.8249609,
              38.8506395
            ],
            [
              -104.8248536,
              38.8506374
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528339",
      "properties": {
        "@id": "way/231528339",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1130 1/2",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "house",
        "building:levels": "1",
        "height": "4 m",
        "name": "Morreale Carriage House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8253079,
              38.8501162
            ],
            [
              -104.8252996,
              38.8502941
            ],
            [
              -104.8254115,
              38.8502973
            ],
            [
              -104.8254201,
              38.8501126
            ],
            [
              -104.8253996,
              38.850112
            ],
            [
              -104.8254009,
              38.8500839
            ],
            [
              -104.8253649,
              38.8500829
            ],
            [
              -104.8253633,
              38.8501178
            ],
            [
              -104.8253079,
              38.8501162
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528343",
      "properties": {
        "@id": "way/231528343",
        "addr:housenumber": "1104",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "dormitory",
        "building:levels": "3",
        "height": "9 m",
        "name": "Loomis Hall",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8261196,
              38.8489663
            ],
            [
              -104.8260392,
              38.8491209
            ],
            [
              -104.8260096,
              38.8491126
            ],
            [
              -104.8259721,
              38.8491314
            ],
            [
              -104.8259594,
              38.8491565
            ],
            [
              -104.8258751,
              38.8491535
            ],
            [
              -104.82561,
              38.8491439
            ],
            [
              -104.8256082,
              38.8492099
            ],
            [
              -104.8256032,
              38.8493928
            ],
            [
              -104.8256026,
              38.8494156
            ],
            [
              -104.8257518,
              38.8494158
            ],
            [
              -104.8257567,
              38.8492642
            ],
            [
              -104.8260198,
              38.8492704
            ],
            [
              -104.826013,
              38.8495409
            ],
            [
              -104.8261652,
              38.849545
            ],
            [
              -104.826165,
              38.8495181
            ],
            [
              -104.8261643,
              38.8494079
            ],
            [
              -104.8265461,
              38.8494175
            ],
            [
              -104.8265515,
              38.8493131
            ],
            [
              -104.8262265,
              38.8493003
            ],
            [
              -104.8261847,
              38.8492986
            ],
            [
              -104.826192,
              38.849171
            ],
            [
              -104.8262779,
              38.8490081
            ],
            [
              -104.8261196,
              38.8489663
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528344",
      "properties": {
        "@id": "way/231528344",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1106",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "health clinic",
        "building": "health_clinic",
        "building:levels": "1",
        "height": "4 m",
        "name": "Boettcher Health Center",
        "operator": "Colorado College",
        "phone": "+1-719-389-6384",
        "start_date": "1964"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8250332,
              38.8494867
            ],
            [
              -104.8251066,
              38.8495048
            ],
            [
              -104.8251876,
              38.849496
            ],
            [
              -104.8252463,
              38.8494672
            ],
            [
              -104.8252887,
              38.8494197
            ],
            [
              -104.8253026,
              38.8493717
            ],
            [
              -104.8252947,
              38.8493237
            ],
            [
              -104.8252624,
              38.849277
            ],
            [
              -104.825209,
              38.8492424
            ],
            [
              -104.8251542,
              38.8492274
            ],
            [
              -104.8251015,
              38.8492263
            ],
            [
              -104.8250262,
              38.8492473
            ],
            [
              -104.8249669,
              38.8492959
            ],
            [
              -104.8249437,
              38.849355
            ],
            [
              -104.8249533,
              38.8494117
            ],
            [
              -104.8249785,
              38.8494486
            ],
            [
              -104.8250332,
              38.8494867
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528345",
      "properties": {
        "@id": "way/231528345",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1128",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "house",
        "building:levels": "2",
        "height": "7 m",
        "name": "Mullett House",
        "nickname": "Russian House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8258487,
              38.8501904
            ],
            [
              -104.8258439,
              38.8502179
            ],
            [
              -104.8257019,
              38.8502114
            ],
            [
              -104.8257005,
              38.8502324
            ],
            [
              -104.825695,
              38.8503122
            ],
            [
              -104.8259345,
              38.8503199
            ],
            [
              -104.8259363,
              38.8502998
            ],
            [
              -104.8259709,
              38.8502993
            ],
            [
              -104.8259743,
              38.8502595
            ],
            [
              -104.8259775,
              38.8502218
            ],
            [
              -104.8259084,
              38.8502198
            ],
            [
              -104.825906,
              38.8501951
            ],
            [
              -104.8258487,
              38.8501904
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528350",
      "properties": {
        "@id": "way/231528350",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1107 1/2",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "garage",
        "building:levels": "1",
        "height": "4 m",
        "name": "Mierow House Garage",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8238408,
              38.8497486
            ],
            [
              -104.8238397,
              38.8497994
            ],
            [
              -104.8238868,
              38.8498006
            ],
            [
              -104.8239194,
              38.8498004
            ],
            [
              -104.8239201,
              38.8497663
            ],
            [
              -104.8239205,
              38.8497496
            ],
            [
              -104.8238408,
              38.8497486
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528351",
      "properties": {
        "@id": "way/231528351",
        "addr:housenumber": "1138",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8238027,
              38.8503978
            ],
            [
              -104.8237997,
              38.8505147
            ],
            [
              -104.8240984,
              38.8505194
            ],
            [
              -104.8241014,
              38.8504024
            ],
            [
              -104.8238027,
              38.8503978
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528358",
      "properties": {
        "@id": "way/231528358",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1040",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "amenity": "telescope",
        "amenity_1": "greenhouses",
        "building": "Academic_Building",
        "building:levels": "4",
        "height": "13 m",
        "name": "Barnes Science Center",
        "occupier": "Chemistry Department",
        "occupier_1": "Anthropolog Department",
        "operator": "Colorado College",
        "start_date": "1988"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8221383,
              38.8492214
            ],
            [
              -104.8221369,
              38.849142
            ],
            [
              -104.8221361,
              38.849093
            ],
            [
              -104.8221077,
              38.8490918
            ],
            [
              -104.8221097,
              38.849029
            ],
            [
              -104.8214559,
              38.849005
            ],
            [
              -104.8213975,
              38.8490029
            ],
            [
              -104.8213667,
              38.8490019
            ],
            [
              -104.8212823,
              38.8489983
            ],
            [
              -104.8212809,
              38.8490332
            ],
            [
              -104.821249,
              38.8490311
            ],
            [
              -104.821242,
              38.8491903
            ],
            [
              -104.8220935,
              38.8492198
            ],
            [
              -104.8221383,
              38.8492214
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528360",
      "properties": {
        "@id": "way/231528360",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "820",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "dormitory",
        "building:levels": "2",
        "height": "6 m",
        "name": "Colorado College Inn",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8213372,
              38.8458371
            ],
            [
              -104.8213352,
              38.8459082
            ],
            [
              -104.8219123,
              38.8459274
            ],
            [
              -104.8219139,
              38.8458935
            ],
            [
              -104.8219595,
              38.8458935
            ],
            [
              -104.8219595,
              38.8458726
            ],
            [
              -104.8219837,
              38.8458705
            ],
            [
              -104.8220075,
              38.8455372
            ],
            [
              -104.8216779,
              38.8455321
            ],
            [
              -104.8216786,
              38.8455531
            ],
            [
              -104.8213989,
              38.8455446
            ],
            [
              -104.8214009,
              38.845526
            ],
            [
              -104.8213303,
              38.8455239
            ],
            [
              -104.8213217,
              38.8456272
            ],
            [
              -104.821466,
              38.8456324
            ],
            [
              -104.821466,
              38.8456136
            ],
            [
              -104.8218908,
              38.8456307
            ],
            [
              -104.8218764,
              38.845858
            ],
            [
              -104.8213372,
              38.8458371
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528374",
      "properties": {
        "@id": "way/231528374",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8253894,
              38.8504948
            ],
            [
              -104.8253857,
              38.8505893
            ],
            [
              -104.8254813,
              38.8505916
            ],
            [
              -104.8254836,
              38.8505332
            ],
            [
              -104.8255012,
              38.8505336
            ],
            [
              -104.8255019,
              38.8505165
            ],
            [
              -104.8255026,
              38.8504975
            ],
            [
              -104.8253894,
              38.8504948
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528375",
      "properties": {
        "@id": "way/231528375",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1030",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "amenity": "Fishbowl",
        "building": "Academic_Building",
        "building:levels": "3",
        "height": "11 m",
        "name": "Olin Hall",
        "occupier": "Physics Department",
        "occupier_1": "Biology Department",
        "operator": "Colorado College",
        "start_date": "1962"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8215825,
              38.8482532
            ],
            [
              -104.82133,
              38.8482454
            ],
            [
              -104.8212948,
              38.8489365
            ],
            [
              -104.8213699,
              38.8489389
            ],
            [
              -104.8213667,
              38.8490019
            ],
            [
              -104.8213975,
              38.8490029
            ],
            [
              -104.8214008,
              38.8489385
            ],
            [
              -104.8215379,
              38.8489427
            ],
            [
              -104.8215616,
              38.8484767
            ],
            [
              -104.8215985,
              38.8484758
            ],
            [
              -104.821641,
              38.8484791
            ],
            [
              -104.8216369,
              38.8485594
            ],
            [
              -104.8219311,
              38.8485685
            ],
            [
              -104.8219427,
              38.8483421
            ],
            [
              -104.8216513,
              38.8483331
            ],
            [
              -104.821647,
              38.848418
            ],
            [
              -104.8216088,
              38.8484168
            ],
            [
              -104.8215742,
              38.8484158
            ],
            [
              -104.8215825,
              38.8482532
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528401",
      "properties": {
        "@id": "way/231528401",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1134",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "dormitory",
        "building": "house",
        "building:levels": "2",
        "height": "7 m",
        "name": "Max Kade House",
        "nickname": "German House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8257296,
              38.8504776
            ],
            [
              -104.8257293,
              38.8505144
            ],
            [
              -104.8257292,
              38.8505249
            ],
            [
              -104.8257233,
              38.8505498
            ],
            [
              -104.8257657,
              38.8505518
            ],
            [
              -104.8257656,
              38.850579
            ],
            [
              -104.8258191,
              38.8505818
            ],
            [
              -104.8258836,
              38.8505852
            ],
            [
              -104.8258802,
              38.8506106
            ],
            [
              -104.8259641,
              38.8506145
            ],
            [
              -104.8259732,
              38.8505039
            ],
            [
              -104.8259748,
              38.850485
            ],
            [
              -104.8259242,
              38.850483
            ],
            [
              -104.8259254,
              38.850462
            ],
            [
              -104.8258246,
              38.8504578
            ],
            [
              -104.8258252,
              38.8504788
            ],
            [
              -104.8257296,
              38.8504776
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528402",
      "properties": {
        "@id": "way/231528402",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8219716,
              38.8461599
            ],
            [
              -104.821872,
              38.8461574
            ],
            [
              -104.821865,
              38.8463244
            ],
            [
              -104.821864,
              38.8463498
            ],
            [
              -104.8219635,
              38.8463523
            ],
            [
              -104.8219716,
              38.8461599
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528403",
      "properties": {
        "@id": "way/231528403",
        "building": "yes",
        "name": "Central Services",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8227228,
              38.8456998
            ],
            [
              -104.8224194,
              38.8456902
            ],
            [
              -104.822416,
              38.8457562
            ],
            [
              -104.8221483,
              38.8457477
            ],
            [
              -104.8221448,
              38.8458134
            ],
            [
              -104.822716,
              38.8458314
            ],
            [
              -104.8227228,
              38.8456998
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528407",
      "properties": {
        "@id": "way/231528407",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1138",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "amenity": "dormitory",
        "building": "house",
        "building:levels": "3",
        "height": "10 m",
        "name": "Elbert House",
        "nickname": "Italian and Asian Studies House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8255126,
              38.8506237
            ],
            [
              -104.8255048,
              38.8507452
            ],
            [
              -104.8255377,
              38.8507464
            ],
            [
              -104.8255358,
              38.850776
            ],
            [
              -104.825629,
              38.8507796
            ],
            [
              -104.8256307,
              38.8507518
            ],
            [
              -104.8257034,
              38.8507546
            ],
            [
              -104.8256994,
              38.8508188
            ],
            [
              -104.8257251,
              38.8508198
            ],
            [
              -104.8258667,
              38.8508253
            ],
            [
              -104.8258678,
              38.8508075
            ],
            [
              -104.8259645,
              38.8508112
            ],
            [
              -104.8259684,
              38.8507504
            ],
            [
              -104.8259701,
              38.850724
            ],
            [
              -104.8259398,
              38.8507228
            ],
            [
              -104.8259426,
              38.850679
            ],
            [
              -104.8257383,
              38.8506711
            ],
            [
              -104.8257118,
              38.8506701
            ],
            [
              -104.8257094,
              38.8507082
            ],
            [
              -104.8256687,
              38.8507066
            ],
            [
              -104.8256735,
              38.8506299
            ],
            [
              -104.8255126,
              38.8506237
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528413",
      "properties": {
        "@id": "way/231528413",
        "addr:housenumber": "825",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "yes",
        "name": "Edith Kinney Gaylord Cornerstone Arts Center ",
        "operator": "Colorado College",
        "start_date": "2008"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8240946,
              38.8454631
            ],
            [
              -104.8240496,
              38.8455259
            ],
            [
              -104.8239041,
              38.8455175
            ],
            [
              -104.8238827,
              38.8456658
            ],
            [
              -104.823827,
              38.8456596
            ],
            [
              -104.823821,
              38.8457661
            ],
            [
              -104.8238692,
              38.8457723
            ],
            [
              -104.8238838,
              38.8458202
            ],
            [
              -104.8238107,
              38.8458296
            ],
            [
              -104.823827,
              38.8459145
            ],
            [
              -104.8238156,
              38.8461546
            ],
            [
              -104.8238934,
              38.8461421
            ],
            [
              -104.8239122,
              38.8461797
            ],
            [
              -104.8238806,
              38.8463051
            ],
            [
              -104.8241026,
              38.846351
            ],
            [
              -104.8241241,
              38.8462632
            ],
            [
              -104.8241777,
              38.8462716
            ],
            [
              -104.8242233,
              38.8461463
            ],
            [
              -104.8242635,
              38.8461546
            ],
            [
              -104.8242796,
              38.8460961
            ],
            [
              -104.8242448,
              38.8460878
            ],
            [
              -104.8242635,
              38.8460293
            ],
            [
              -104.8243011,
              38.8460146
            ],
            [
              -104.8243574,
              38.8458621
            ],
            [
              -104.8243259,
              38.8457952
            ],
            [
              -104.8243152,
              38.8457724
            ],
            [
              -104.8243956,
              38.8455596
            ],
            [
              -104.8240946,
              38.8454631
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528420",
      "properties": {
        "@id": "way/231528420",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "123",
        "addr:postcode": "80903",
        "addr:street": "East Uintah Street",
        "amenity": "grocery store",
        "building": "dormitory",
        "building:levels": "4",
        "height": "12 m",
        "name": "Mathias Hall",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8218904,
              38.8499712
            ],
            [
              -104.8218888,
              38.8500389
            ],
            [
              -104.8218564,
              38.8500384
            ],
            [
              -104.8218536,
              38.8501471
            ],
            [
              -104.8218904,
              38.8501477
            ],
            [
              -104.8218901,
              38.8501566
            ],
            [
              -104.8218404,
              38.8501557
            ],
            [
              -104.8218386,
              38.8502115
            ],
            [
              -104.8218847,
              38.8502124
            ],
            [
              -104.8218843,
              38.8502245
            ],
            [
              -104.8217182,
              38.8502208
            ],
            [
              -104.8217196,
              38.8501836
            ],
            [
              -104.8212826,
              38.8501738
            ],
            [
              -104.8212833,
              38.8501551
            ],
            [
              -104.8213607,
              38.8501568
            ],
            [
              -104.8213663,
              38.8500074
            ],
            [
              -104.8213215,
              38.8500064
            ],
            [
              -104.821324,
              38.8499378
            ],
            [
              -104.8211616,
              38.8499342
            ],
            [
              -104.8211599,
              38.8499811
            ],
            [
              -104.8211337,
              38.8499806
            ],
            [
              -104.8211332,
              38.8499976
            ],
            [
              -104.8211532,
              38.849998
            ],
            [
              -104.8211508,
              38.8500758
            ],
            [
              -104.8211814,
              38.8500763
            ],
            [
              -104.8211799,
              38.8501265
            ],
            [
              -104.8211575,
              38.8501261
            ],
            [
              -104.8211562,
              38.8501751
            ],
            [
              -104.8211799,
              38.8501755
            ],
            [
              -104.8211781,
              38.8502462
            ],
            [
              -104.821222,
              38.8502469
            ],
            [
              -104.8212212,
              38.850284
            ],
            [
              -104.8211999,
              38.8502837
            ],
            [
              -104.8211993,
              38.8503105
            ],
            [
              -104.8212415,
              38.8503109
            ],
            [
              -104.8212407,
              38.8503585
            ],
            [
              -104.8214296,
              38.8503605
            ],
            [
              -104.8214301,
              38.8503317
            ],
            [
              -104.8214823,
              38.8503322
            ],
            [
              -104.8214817,
              38.8503713
            ],
            [
              -104.8217214,
              38.8503737
            ],
            [
              -104.8217209,
              38.8504035
            ],
            [
              -104.8219377,
              38.8504057
            ],
            [
              -104.8219381,
              38.8503785
            ],
            [
              -104.8219977,
              38.8503791
            ],
            [
              -104.8219987,
              38.8503234
            ],
            [
              -104.8220503,
              38.850324
            ],
            [
              -104.8220488,
              38.850302
            ],
            [
              -104.8220543,
              38.8500763
            ],
            [
              -104.8221007,
              38.850077
            ],
            [
              -104.822102,
              38.8500211
            ],
            [
              -104.8220652,
              38.8500206
            ],
            [
              -104.8220663,
              38.8499738
            ],
            [
              -104.8219242,
              38.8499717
            ],
            [
              -104.8218904,
              38.8499712
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231528428",
      "properties": {
        "@id": "way/231528428",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1115 1/2",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "garage",
        "building:levels": "1",
        "height": "3 m",
        "name": "Central Campus Grounds Shop",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8237898,
              38.8498757
            ],
            [
              -104.8237845,
              38.8499708
            ],
            [
              -104.8238728,
              38.8499737
            ],
            [
              -104.823878,
              38.8498786
            ],
            [
              -104.8237898,
              38.8498757
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657075",
      "properties": {
        "@id": "way/231657075",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1205 1/2",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "garage",
        "height": "4 m",
        "name": "Tutt Alumni Garage",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8237022,
              38.8508629
            ],
            [
              -104.8235773,
              38.8508615
            ],
            [
              -104.8235532,
              38.8508612
            ],
            [
              -104.8235496,
              38.8510596
            ],
            [
              -104.8236583,
              38.8510619
            ],
            [
              -104.8236609,
              38.8510159
            ],
            [
              -104.8236592,
              38.8510129
            ],
            [
              -104.8236995,
              38.8510133
            ],
            [
              -104.8237022,
              38.8508629
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657079",
      "properties": {
        "@id": "way/231657079",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8198763,
              38.8466527
            ],
            [
              -104.8198354,
              38.846652
            ],
            [
              -104.8198361,
              38.8466257
            ],
            [
              -104.8197408,
              38.846624
            ],
            [
              -104.8197368,
              38.8466463
            ],
            [
              -104.8196949,
              38.846645
            ],
            [
              -104.8196907,
              38.8467312
            ],
            [
              -104.8197444,
              38.8467324
            ],
            [
              -104.8197421,
              38.8468093
            ],
            [
              -104.8198658,
              38.8468115
            ],
            [
              -104.8198665,
              38.8467864
            ],
            [
              -104.819827,
              38.8467857
            ],
            [
              -104.8198284,
              38.8467403
            ],
            [
              -104.8198737,
              38.8467411
            ],
            [
              -104.8198763,
              38.8466527
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657082",
      "properties": {
        "@id": "way/231657082",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "931",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "house",
        "building:levels": "2",
        "height": "7 m",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8206282,
              38.8474707
            ],
            [
              -104.8205551,
              38.8474689
            ],
            [
              -104.8205534,
              38.8475099
            ],
            [
              -104.8204396,
              38.8475071
            ],
            [
              -104.8204353,
              38.8476117
            ],
            [
              -104.8204875,
              38.847613
            ],
            [
              -104.8204885,
              38.8475893
            ],
            [
              -104.8205606,
              38.8475911
            ],
            [
              -104.8205587,
              38.8476369
            ],
            [
              -104.8206274,
              38.8476387
            ],
            [
              -104.8206297,
              38.8475856
            ],
            [
              -104.8206516,
              38.8475862
            ],
            [
              -104.8206529,
              38.8475544
            ],
            [
              -104.8206551,
              38.8474999
            ],
            [
              -104.820627,
              38.8474992
            ],
            [
              -104.8206282,
              38.8474707
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657085",
      "properties": {
        "@id": "way/231657085",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8195034,
              38.8500094
            ],
            [
              -104.8195026,
              38.850065
            ],
            [
              -104.8197103,
              38.8500668
            ],
            [
              -104.8197111,
              38.8500112
            ],
            [
              -104.8195034,
              38.8500094
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657086",
      "properties": {
        "@id": "way/231657086",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8196169,
              38.8470223
            ],
            [
              -104.8194723,
              38.8470209
            ],
            [
              -104.8194715,
              38.8470716
            ],
            [
              -104.819471,
              38.8471025
            ],
            [
              -104.8196156,
              38.8471038
            ],
            [
              -104.8196169,
              38.8470223
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657090",
      "properties": {
        "@id": "way/231657090",
        "building": "yes",
        "name": "Delta Gamma Sorority",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8200483,
              38.8487104
            ],
            [
              -104.8200453,
              38.8487784
            ],
            [
              -104.820294,
              38.8487852
            ],
            [
              -104.8202971,
              38.8487172
            ],
            [
              -104.8201468,
              38.8487131
            ],
            [
              -104.8200483,
              38.8487104
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657092",
      "properties": {
        "@id": "way/231657092",
        "building": "yes",
        "name": "Kappa Alpha Theta Sorority",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8200677,
              38.8482556
            ],
            [
              -104.820062,
              38.8483633
            ],
            [
              -104.8201935,
              38.8483675
            ],
            [
              -104.8201926,
              38.8483851
            ],
            [
              -104.8203226,
              38.8483892
            ],
            [
              -104.8203292,
              38.8482639
            ],
            [
              -104.8202246,
              38.8482606
            ],
            [
              -104.8200677,
              38.8482556
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657093",
      "properties": {
        "@id": "way/231657093",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8194388,
              38.8474357
            ],
            [
              -104.8194388,
              38.8474916
            ],
            [
              -104.8194388,
              38.8475119
            ],
            [
              -104.8196145,
              38.8475119
            ],
            [
              -104.8196145,
              38.8474357
            ],
            [
              -104.8194388,
              38.8474357
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657094",
      "properties": {
        "@id": "way/231657094",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8194673,
              38.8497604
            ],
            [
              -104.819285,
              38.8497577
            ],
            [
              -104.819284,
              38.8497977
            ],
            [
              -104.819283,
              38.8498392
            ],
            [
              -104.8194654,
              38.8498419
            ],
            [
              -104.8194673,
              38.8497604
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657098",
      "properties": {
        "@id": "way/231657098",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.819311,
              38.8493767
            ],
            [
              -104.8193056,
              38.8494195
            ],
            [
              -104.8193024,
              38.849445
            ],
            [
              -104.8193019,
              38.8495629
            ],
            [
              -104.8194557,
              38.8495675
            ],
            [
              -104.8194572,
              38.8495367
            ],
            [
              -104.8195431,
              38.8495393
            ],
            [
              -104.8195545,
              38.8495396
            ],
            [
              -104.8195575,
              38.8494794
            ],
            [
              -104.819513,
              38.8494781
            ],
            [
              -104.8195177,
              38.8493828
            ],
            [
              -104.819311,
              38.8493767
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657109",
      "properties": {
        "@id": "way/231657109",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1005",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "house",
        "building:levels": "1",
        "height": "3.5 m",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8202666,
              38.8479839
            ],
            [
              -104.8202354,
              38.8479824
            ],
            [
              -104.820175,
              38.8479796
            ],
            [
              -104.8201416,
              38.8479779
            ],
            [
              -104.8201007,
              38.8479759
            ],
            [
              -104.8200944,
              38.8480539
            ],
            [
              -104.8201435,
              38.8480563
            ],
            [
              -104.8201379,
              38.8481248
            ],
            [
              -104.8202147,
              38.8481286
            ],
            [
              -104.8202171,
              38.8480985
            ],
            [
              -104.8202572,
              38.8481005
            ],
            [
              -104.8202666,
              38.8479839
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657110",
      "properties": {
        "@id": "way/231657110",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8199478,
              38.8502113
            ],
            [
              -104.8199481,
              38.8502427
            ],
            [
              -104.8199494,
              38.8503834
            ],
            [
              -104.8199966,
              38.850384
            ],
            [
              -104.8200315,
              38.8503844
            ],
            [
              -104.8200578,
              38.8503847
            ],
            [
              -104.8200578,
              38.8503158
            ],
            [
              -104.8200922,
              38.850316
            ],
            [
              -104.8200926,
              38.8502594
            ],
            [
              -104.8200631,
              38.8502594
            ],
            [
              -104.8200631,
              38.8502155
            ],
            [
              -104.8199478,
              38.8502113
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657112",
      "properties": {
        "@id": "way/231657112",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8196105,
              38.8466239
            ],
            [
              -104.8195111,
              38.8466224
            ],
            [
              -104.8195108,
              38.8466584
            ],
            [
              -104.8194453,
              38.8466573
            ],
            [
              -104.8194432,
              38.8467331
            ],
            [
              -104.8195384,
              38.8467347
            ],
            [
              -104.8195362,
              38.8468157
            ],
            [
              -104.8196047,
              38.8468169
            ],
            [
              -104.8196105,
              38.8466239
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657119",
      "properties": {
        "@id": "way/231657119",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8194571,
              38.8473018
            ],
            [
              -104.8194569,
              38.8473203
            ],
            [
              -104.8194562,
              38.8473834
            ],
            [
              -104.8195872,
              38.8473842
            ],
            [
              -104.8195874,
              38.8473613
            ],
            [
              -104.8196873,
              38.8473619
            ],
            [
              -104.8196882,
              38.8472761
            ],
            [
              -104.8195329,
              38.8472752
            ],
            [
              -104.8195326,
              38.8473023
            ],
            [
              -104.8194571,
              38.8473018
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657122",
      "properties": {
        "@id": "way/231657122",
        "addr:housenumber": "1006",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "yes",
        "name": "Interfaith House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8195718,
              38.8479636
            ],
            [
              -104.8195671,
              38.8481006
            ],
            [
              -104.8196158,
              38.8481016
            ],
            [
              -104.8196165,
              38.8480814
            ],
            [
              -104.8196542,
              38.8480822
            ],
            [
              -104.8196564,
              38.8480171
            ],
            [
              -104.8196278,
              38.8480165
            ],
            [
              -104.8196298,
              38.8479574
            ],
            [
              -104.8196119,
              38.8479644
            ],
            [
              -104.8195718,
              38.8479636
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657124",
      "properties": {
        "@id": "way/231657124",
        "addr:housenumber": "1010",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8193693,
              38.8481355
            ],
            [
              -104.8193686,
              38.8481748
            ],
            [
              -104.8193645,
              38.8482045
            ],
            [
              -104.8193641,
              38.8482239
            ],
            [
              -104.8195459,
              38.8482261
            ],
            [
              -104.8195468,
              38.8481778
            ],
            [
              -104.8195255,
              38.8481775
            ],
            [
              -104.8195263,
              38.8481374
            ],
            [
              -104.8193693,
              38.8481355
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657125",
      "properties": {
        "@id": "way/231657125",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8203215,
              38.8501866
            ],
            [
              -104.8203279,
              38.8502704
            ],
            [
              -104.8205129,
              38.8502718
            ],
            [
              -104.820502,
              38.8502448
            ],
            [
              -104.8205036,
              38.8501899
            ],
            [
              -104.8203215,
              38.8501866
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657134",
      "properties": {
        "@id": "way/231657134",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8196139,
              38.8497237
            ],
            [
              -104.8196109,
              38.8497906
            ],
            [
              -104.8196886,
              38.8497927
            ],
            [
              -104.8196916,
              38.8497258
            ],
            [
              -104.8196139,
              38.8497237
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657138",
      "properties": {
        "@id": "way/231657138",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8203281,
              38.8503239
            ],
            [
              -104.8203223,
              38.8504086
            ],
            [
              -104.8204965,
              38.8504158
            ],
            [
              -104.8205023,
              38.8503312
            ],
            [
              -104.8203281,
              38.8503239
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657143",
      "properties": {
        "@id": "way/231657143",
        "addr:housenumber": "1018",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "yes",
        "name": "Civic Engagement",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8193699,
              38.8485093
            ],
            [
              -104.8193704,
              38.8485465
            ],
            [
              -104.8193708,
              38.8485822
            ],
            [
              -104.8194524,
              38.8485864
            ],
            [
              -104.8194485,
              38.8486031
            ],
            [
              -104.8195343,
              38.8486052
            ],
            [
              -104.8195379,
              38.8485801
            ],
            [
              -104.8195772,
              38.8485801
            ],
            [
              -104.8195793,
              38.8485464
            ],
            [
              -104.8195803,
              38.8485298
            ],
            [
              -104.8195236,
              38.8485321
            ],
            [
              -104.819524,
              38.848511
            ],
            [
              -104.8193699,
              38.8485093
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657144",
      "properties": {
        "@id": "way/231657144",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8192761,
              38.8502272
            ],
            [
              -104.8192742,
              38.8503577
            ],
            [
              -104.8193773,
              38.8503586
            ],
            [
              -104.8193792,
              38.8502281
            ],
            [
              -104.8192761,
              38.8502272
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657145",
      "properties": {
        "@id": "way/231657145",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8196088,
              38.8502796
            ],
            [
              -104.8196081,
              38.8503694
            ],
            [
              -104.8197086,
              38.8503698
            ],
            [
              -104.8197094,
              38.8502801
            ],
            [
              -104.8196088,
              38.8502796
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657153",
      "properties": {
        "@id": "way/231657153",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8194717,
              38.8498699
            ],
            [
              -104.8194702,
              38.849917
            ],
            [
              -104.8196296,
              38.8499202
            ],
            [
              -104.8196311,
              38.8498731
            ],
            [
              -104.8194717,
              38.8498699
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657158",
      "properties": {
        "@id": "way/231657158",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8202549,
              38.8502917
            ],
            [
              -104.8202547,
              38.8503545
            ],
            [
              -104.8203054,
              38.8503547
            ],
            [
              -104.8203057,
              38.8502919
            ],
            [
              -104.8202549,
              38.8502917
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657161",
      "properties": {
        "@id": "way/231657161",
        "building": "yes",
        "name": "KRCC Radio",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8196786,
              38.8468617
            ],
            [
              -104.8195285,
              38.8468565
            ],
            [
              -104.8194561,
              38.846854
            ],
            [
              -104.819454,
              38.846891
            ],
            [
              -104.819451,
              38.8469428
            ],
            [
              -104.8196735,
              38.8469505
            ],
            [
              -104.8196786,
              38.8468617
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657169",
      "properties": {
        "@id": "way/231657169",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8196551,
              38.8471337
            ],
            [
              -104.8195556,
              38.8471294
            ],
            [
              -104.8195536,
              38.8471574
            ],
            [
              -104.8194655,
              38.8471535
            ],
            [
              -104.8194629,
              38.8471892
            ],
            [
              -104.8194318,
              38.8471878
            ],
            [
              -104.8194294,
              38.8472219
            ],
            [
              -104.8194282,
              38.8472381
            ],
            [
              -104.8196469,
              38.8472476
            ],
            [
              -104.8196551,
              38.8471337
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657173",
      "properties": {
        "@id": "way/231657173",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8201118,
              38.8502347
            ],
            [
              -104.8201083,
              38.8503872
            ],
            [
              -104.8202261,
              38.8503889
            ],
            [
              -104.8202296,
              38.8502364
            ],
            [
              -104.8201118,
              38.8502347
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657181",
      "properties": {
        "@id": "way/231657181",
        "addr:housenumber": "1014",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "yes",
        "name": "Special Senior Status Faculty Offices",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8194226,
              38.8483465
            ],
            [
              -104.8194188,
              38.8484405
            ],
            [
              -104.8196025,
              38.8484449
            ],
            [
              -104.8196063,
              38.8483509
            ],
            [
              -104.8195728,
              38.8483501
            ],
            [
              -104.8194226,
              38.8483465
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657191",
      "properties": {
        "@id": "way/231657191",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8192814,
              38.8496275
            ],
            [
              -104.8192797,
              38.8496808
            ],
            [
              -104.8192792,
              38.8496957
            ],
            [
              -104.8196437,
              38.849703
            ],
            [
              -104.8196456,
              38.8496467
            ],
            [
              -104.8195959,
              38.8496457
            ],
            [
              -104.8195971,
              38.8496094
            ],
            [
              -104.8195378,
              38.8496082
            ],
            [
              -104.819537,
              38.8496327
            ],
            [
              -104.8192814,
              38.8496275
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657196",
      "properties": {
        "@id": "way/231657196",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1002",
        "addr:street": "North Weber Street",
        "building": "house",
        "building:levels": "2",
        "height": "6 m",
        "name": "Kappa Sigma Fraternity",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8194001,
              38.847955
            ],
            [
              -104.8193985,
              38.8480347
            ],
            [
              -104.819398,
              38.8480575
            ],
            [
              -104.8194428,
              38.8480581
            ],
            [
              -104.8194424,
              38.8480815
            ],
            [
              -104.8194757,
              38.8480722
            ],
            [
              -104.8195006,
              38.8480727
            ],
            [
              -104.8195042,
              38.8479637
            ],
            [
              -104.8194798,
              38.8479632
            ],
            [
              -104.8194441,
              38.8479555
            ],
            [
              -104.8194001,
              38.847955
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657198",
      "properties": {
        "@id": "way/231657198",
        "addr:housenumber": "1004",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "yes",
        "name": "Synergy House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.819834,
              38.8479614
            ],
            [
              -104.8198122,
              38.8479609
            ],
            [
              -104.8197756,
              38.8479687
            ],
            [
              -104.8197031,
              38.8479669
            ],
            [
              -104.819698,
              38.8480935
            ],
            [
              -104.8197845,
              38.8480957
            ],
            [
              -104.8197861,
              38.8480558
            ],
            [
              -104.8198301,
              38.8480568
            ],
            [
              -104.819834,
              38.8479614
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657202",
      "properties": {
        "@id": "way/231657202",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8195744,
              38.8489292
            ],
            [
              -104.8193773,
              38.8489211
            ],
            [
              -104.8193745,
              38.8489623
            ],
            [
              -104.8193712,
              38.849012
            ],
            [
              -104.8195683,
              38.8490201
            ],
            [
              -104.8195744,
              38.8489292
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657203",
      "properties": {
        "@id": "way/231657203",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "921-923",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "house",
        "building:levels": "2",
        "height": "7 m",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8204523,
              38.8472705
            ],
            [
              -104.8204513,
              38.847295
            ],
            [
              -104.8204967,
              38.8472962
            ],
            [
              -104.8204938,
              38.8473652
            ],
            [
              -104.8205321,
              38.8473662
            ],
            [
              -104.8205303,
              38.8474083
            ],
            [
              -104.8206809,
              38.8474121
            ],
            [
              -104.820684,
              38.8473372
            ],
            [
              -104.8206879,
              38.8472751
            ],
            [
              -104.8204523,
              38.8472705
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657207",
      "properties": {
        "@id": "way/231657207",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8193067,
              38.8500446
            ],
            [
              -104.8193041,
              38.8501111
            ],
            [
              -104.8194808,
              38.8501153
            ],
            [
              -104.8194824,
              38.8500755
            ],
            [
              -104.8194834,
              38.8500488
            ],
            [
              -104.8193067,
              38.8500446
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657211",
      "properties": {
        "@id": "way/231657211",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8197312,
              38.8502328
            ],
            [
              -104.81973,
              38.8502909
            ],
            [
              -104.8197648,
              38.8502914
            ],
            [
              -104.8197628,
              38.8503889
            ],
            [
              -104.8198687,
              38.8503903
            ],
            [
              -104.8198719,
              38.8502346
            ],
            [
              -104.8197312,
              38.8502328
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657213",
      "properties": {
        "@id": "way/231657213",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1008",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "university",
        "building:levels": "2",
        "hieght": "6.5 m",
        "name": "Debate House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8199981,
              38.848008
            ],
            [
              -104.8199805,
              38.8480076
            ],
            [
              -104.8199824,
              38.8479603
            ],
            [
              -104.8199297,
              38.847959
            ],
            [
              -104.8198906,
              38.8479575
            ],
            [
              -104.8198841,
              38.84807
            ],
            [
              -104.8199086,
              38.8480709
            ],
            [
              -104.8199073,
              38.8480928
            ],
            [
              -104.8199073,
              38.8480928
            ],
            [
              -104.8199948,
              38.8480949
            ],
            [
              -104.8199981,
              38.848008
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657216",
      "properties": {
        "@id": "way/231657216",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1001",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "alt_name": "Glass House",
        "building": "dormitory",
        "building:levels": "2",
        "height": "9 m",
        "name": "Lennox House",
        "nickname": "Glass House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8206365,
              38.8480766
            ],
            [
              -104.8205943,
              38.848076
            ],
            [
              -104.8205948,
              38.8480507
            ],
            [
              -104.8205473,
              38.8480501
            ],
            [
              -104.8205482,
              38.8480097
            ],
            [
              -104.8204475,
              38.8480074
            ],
            [
              -104.8204468,
              38.8480411
            ],
            [
              -104.8203813,
              38.8480403
            ],
            [
              -104.8203806,
              38.8480757
            ],
            [
              -104.8203188,
              38.8480749
            ],
            [
              -104.8203176,
              38.8481324
            ],
            [
              -104.8202971,
              38.8481321
            ],
            [
              -104.8202958,
              38.8481944
            ],
            [
              -104.8203885,
              38.8481937
            ],
            [
              -104.820435,
              38.8481947
            ],
            [
              -104.8204341,
              38.8482183
            ],
            [
              -104.8205326,
              38.8482205
            ],
            [
              -104.8205332,
              38.8482033
            ],
            [
              -104.8206381,
              38.8482056
            ],
            [
              -104.8206419,
              38.8481022
            ],
            [
              -104.8206365,
              38.8480766
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657224",
      "properties": {
        "@id": "way/231657224",
        "addr:housenumber": "223",
        "addr:postcode": "80903",
        "addr:street": "East San Rafael Street",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8196623,
              38.8488108
            ],
            [
              -104.8196568,
              38.8489783
            ],
            [
              -104.8196792,
              38.8489787
            ],
            [
              -104.8197531,
              38.8489802
            ],
            [
              -104.8197586,
              38.8488128
            ],
            [
              -104.8196623,
              38.8488108
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657225",
      "properties": {
        "@id": "way/231657225",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8199049,
              38.8483669
            ],
            [
              -104.8199006,
              38.8484475
            ],
            [
              -104.8199726,
              38.8484498
            ],
            [
              -104.8199769,
              38.8483692
            ],
            [
              -104.8199049,
              38.8483669
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657228",
      "properties": {
        "@id": "way/231657228",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8194408,
              38.8502322
            ],
            [
              -104.8194351,
              38.8503682
            ],
            [
              -104.8195294,
              38.8503701
            ],
            [
              -104.8195294,
              38.8503409
            ],
            [
              -104.8195611,
              38.8503369
            ],
            [
              -104.8195589,
              38.8502824
            ],
            [
              -104.8195213,
              38.8502803
            ],
            [
              -104.8195165,
              38.8502325
            ],
            [
              -104.8194408,
              38.8502322
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657231",
      "properties": {
        "@id": "way/231657231",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8192844,
              38.8498891
            ],
            [
              -104.8192805,
              38.8499726
            ],
            [
              -104.8194428,
              38.8499772
            ],
            [
              -104.8194466,
              38.8498936
            ],
            [
              -104.8192844,
              38.8498891
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657234",
      "properties": {
        "@id": "way/231657234",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "915",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "shed",
        "building:levels": "1",
        "height": "3 m",
        "name": "Autrey Field Grounds Shop",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8204344,
              38.8471397
            ],
            [
              -104.8204292,
              38.8472356
            ],
            [
              -104.8205376,
              38.8472392
            ],
            [
              -104.8205427,
              38.8471432
            ],
            [
              -104.8204344,
              38.8471397
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657236",
      "properties": {
        "@id": "way/231657236",
        "addr:housenumber": "1028",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "yes",
        "name": "Cutler Publications",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8193528,
              38.8487975
            ],
            [
              -104.8193498,
              38.8488511
            ],
            [
              -104.8193788,
              38.8488521
            ],
            [
              -104.8193771,
              38.8488824
            ],
            [
              -104.8195662,
              38.8488886
            ],
            [
              -104.819569,
              38.8488374
            ],
            [
              -104.8195203,
              38.8488358
            ],
            [
              -104.8195221,
              38.8488031
            ],
            [
              -104.8193528,
              38.8487975
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657242",
      "properties": {
        "@id": "way/231657242",
        "addr:housenumber": "1024",
        "addr:postcode": "80903",
        "addr:street": "North Weber Street",
        "building": "yes",
        "name": "Ahlberg Outdoor Education Center",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8193533,
              38.8486285
            ],
            [
              -104.8193528,
              38.8486676
            ],
            [
              -104.8193525,
              38.848696
            ],
            [
              -104.8193509,
              38.8487209
            ],
            [
              -104.8195205,
              38.848724
            ],
            [
              -104.819521,
              38.8487069
            ],
            [
              -104.8195695,
              38.8487078
            ],
            [
              -104.8195707,
              38.8486697
            ],
            [
              -104.8195718,
              38.8486325
            ],
            [
              -104.8193533,
              38.8486285
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657243",
      "properties": {
        "@id": "way/231657243",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8198376,
              38.8480905
            ],
            [
              -104.819836,
              38.8481366
            ],
            [
              -104.8198628,
              38.8481371
            ],
            [
              -104.8198628,
              38.8481371
            ],
            [
              -104.8198644,
              38.8480911
            ],
            [
              -104.8198376,
              38.8480905
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657245",
      "properties": {
        "@id": "way/231657245",
        "building": "yes",
        "name": "Jackson House",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8202499,
              38.848867
            ],
            [
              -104.8202478,
              38.8489217
            ],
            [
              -104.8202469,
              38.848956
            ],
            [
              -104.8202464,
              38.8489839
            ],
            [
              -104.8203323,
              38.8489848
            ],
            [
              -104.8203307,
              38.8490286
            ],
            [
              -104.8204253,
              38.8490301
            ],
            [
              -104.8204258,
              38.8490106
            ],
            [
              -104.8204678,
              38.8490113
            ],
            [
              -104.8204795,
              38.8490273
            ],
            [
              -104.820521,
              38.8490298
            ],
            [
              -104.8205438,
              38.8490132
            ],
            [
              -104.8205435,
              38.8489769
            ],
            [
              -104.8205833,
              38.8489767
            ],
            [
              -104.8205831,
              38.8489548
            ],
            [
              -104.8205845,
              38.8489204
            ],
            [
              -104.8205838,
              38.84889
            ],
            [
              -104.8205577,
              38.8488903
            ],
            [
              -104.8205737,
              38.8488747
            ],
            [
              -104.8205731,
              38.848852
            ],
            [
              -104.8205596,
              38.8488374
            ],
            [
              -104.8205351,
              38.8488288
            ],
            [
              -104.8205098,
              38.8488325
            ],
            [
              -104.820495,
              38.8488525
            ],
            [
              -104.8203532,
              38.8488476
            ],
            [
              -104.8203519,
              38.8488698
            ],
            [
              -104.8203131,
              38.8488684
            ],
            [
              -104.8202499,
              38.848867
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657249",
      "properties": {
        "@id": "way/231657249",
        "building": "yes",
        "name": "Kappa Kappa Gamma Sorority",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8202293,
              38.848448
            ],
            [
              -104.8202111,
              38.8486772
            ],
            [
              -104.8203836,
              38.8486855
            ],
            [
              -104.8203919,
              38.8485804
            ],
            [
              -104.8203342,
              38.8485776
            ],
            [
              -104.8203358,
              38.8485577
            ],
            [
              -104.8203049,
              38.8485563
            ],
            [
              -104.8203132,
              38.848452
            ],
            [
              -104.8202293,
              38.848448
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231657251",
      "properties": {
        "@id": "way/231657251",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8193934,
              38.8475486
            ],
            [
              -104.8193932,
              38.8475751
            ],
            [
              -104.819393,
              38.8476106
            ],
            [
              -104.8193928,
              38.8476458
            ],
            [
              -104.8195941,
              38.8476465
            ],
            [
              -104.8195947,
              38.8475493
            ],
            [
              -104.8193934,
              38.8475486
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231766214",
      "properties": {
        "@id": "way/231766214",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8221727,
              38.8454281
            ],
            [
              -104.8221786,
              38.8453055
            ],
            [
              -104.822141,
              38.8453046
            ],
            [
              -104.8221417,
              38.8452857
            ],
            [
              -104.8220869,
              38.8452841
            ],
            [
              -104.8220861,
              38.8453024
            ],
            [
              -104.8220636,
              38.8453017
            ],
            [
              -104.8220576,
              38.8454247
            ],
            [
              -104.8221211,
              38.8454266
            ],
            [
              -104.8221727,
              38.8454281
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231766319",
      "properties": {
        "@id": "way/231766319",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8219108,
              38.8454735
            ],
            [
              -104.8219083,
              38.8455222
            ],
            [
              -104.8219821,
              38.8455245
            ],
            [
              -104.8219845,
              38.8454757
            ],
            [
              -104.8219108,
              38.8454735
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/231766324",
      "properties": {
        "@id": "way/231766324",
        "building": "yes",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8218856,
              38.8454265
            ],
            [
              -104.8220017,
              38.8454309
            ],
            [
              -104.8220121,
              38.8452662
            ],
            [
              -104.8219298,
              38.845263
            ],
            [
              -104.8219276,
              38.8452987
            ],
            [
              -104.8218937,
              38.8452974
            ],
            [
              -104.8218856,
              38.8454265
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/295030295",
      "properties": {
        "@id": "way/295030295",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "1109 1/2",
        "addr:postcode": "80903",
        "addr:street": "North Cascade Avenue",
        "building": "garage",
        "building:levels": "1",
        "height": "4 m",
        "name": "Dern House Garage",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8240052,
              38.8497489
            ],
            [
              -104.8240069,
              38.8496985
            ],
            [
              -104.8239381,
              38.8496972
            ],
            [
              -104.8239365,
              38.8497476
            ],
            [
              -104.8240052,
              38.8497489
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/296100683",
      "properties": {
        "@id": "way/296100683",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "909",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "amenity": "childcare",
        "building": "yes",
        "building:levels": "1",
        "height": "4 m",
        "name": "Cheryl Sclhessman Bennett Children's Center",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8206944,
              38.8470564
            ],
            [
              -104.8206959,
              38.8470263
            ],
            [
              -104.8207044,
              38.8470266
            ],
            [
              -104.8207059,
              38.8469972
            ],
            [
              -104.8206969,
              38.8469969
            ],
            [
              -104.8206973,
              38.8469889
            ],
            [
              -104.8207,
              38.8469353
            ],
            [
              -104.8207116,
              38.8469356
            ],
            [
              -104.8207125,
              38.8469163
            ],
            [
              -104.8206997,
              38.8469159
            ],
            [
              -104.8207001,
              38.846908
            ],
            [
              -104.8207211,
              38.8469087
            ],
            [
              -104.8207271,
              38.8468977
            ],
            [
              -104.8207325,
              38.8468872
            ],
            [
              -104.8207365,
              38.8468768
            ],
            [
              -104.8207372,
              38.8468695
            ],
            [
              -104.8207365,
              38.8468627
            ],
            [
              -104.8207345,
              38.8468554
            ],
            [
              -104.8207224,
              38.8468324
            ],
            [
              -104.8207044,
              38.8468318
            ],
            [
              -104.8207048,
              38.8468239
            ],
            [
              -104.8207113,
              38.8466961
            ],
            [
              -104.8206817,
              38.8466952
            ],
            [
              -104.8206825,
              38.8466789
            ],
            [
              -104.8206516,
              38.8466779
            ],
            [
              -104.8206532,
              38.8466483
            ],
            [
              -104.820687,
              38.8466493
            ],
            [
              -104.8206892,
              38.8466068
            ],
            [
              -104.8204793,
              38.8466003
            ],
            [
              -104.8204778,
              38.8466314
            ],
            [
              -104.820476,
              38.8466661
            ],
            [
              -104.8205184,
              38.8466674
            ],
            [
              -104.8205178,
              38.8466679
            ],
            [
              -104.8205171,
              38.8466875
            ],
            [
              -104.8205159,
              38.8467175
            ],
            [
              -104.8205156,
              38.8467229
            ],
            [
              -104.8205153,
              38.846728
            ],
            [
              -104.8205136,
              38.846763
            ],
            [
              -104.8205039,
              38.8469527
            ],
            [
              -104.8204423,
              38.8469508
            ],
            [
              -104.8204385,
              38.8470257
            ],
            [
              -104.8204581,
              38.8470263
            ],
            [
              -104.820457,
              38.8470491
            ],
            [
              -104.8206944,
              38.8470564
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/296107276",
      "properties": {
        "@id": "way/296107276",
        "addr:city": "Colorado Springs",
        "addr:housenumber": "931 1/2",
        "addr:postcode": "80903",
        "addr:street": "North Nevada Avenue",
        "building": "shed",
        "building:levels": "1",
        "height": "3 m",
        "operator": "Colorado College"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -104.8204737,
              38.8476715
            ],
            [
              -104.8204761,
              38.8476177
            ],
            [
              -104.8204362,
              38.8476167
            ],
            [
              -104.8204338,
              38.8476704
            ],
            [
              -104.8204737,
              38.8476715
            ]
          ]
        ]
      }
    }
  ]
};

//L.geoJson(buildings).addTo(map);

var foo = L.geoJson(buildings, {
    style: function(feature) {
        switch (feature.properties.building) {
          case 'yes': return {color: "#0fff00", fillOpacity: .7, weight: 0};
          default:   return {color: "#00ff00", fillOpacity: 0};
        }
    }
});

var threed = new OSMBuildings(map).setData(buildings).setStyle({
"wallColor": "rgba(173, 132, 11, .1)",
"roofColor": "rgba(243, 199, 63, .1)"
  /*"wallColor": "#cccccc",
  "roofColor": "#fefefe"*/
});

$('input').on('change', function(){
	$('#map').toggleClass('threed');   
  L.removeLayer('threed');
});