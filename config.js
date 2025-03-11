var config = {
    style: 'mapbox://styles/8fswq7jyua/cm71awcuy00sp01s1b78w2pyu',
    accessToken: 'pk.eyJ1IjoiOGZzd3E3anl1YSIsImEiOiJjbTZyY2ZhY3MxbGdkMm9zODI0aTZnOHZ4In0.Jb3YeTxjnhF1MJKbSf5O-A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Where are the Leisure Space in Singapore?',
    subtitle: 'Access to Parks and Water Activities Areas',
    byline: 'By Zeng Qining',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Parks and Water Activities Areas in Singapore',
            description: 'As a highly urbanised country, Singapore has implemented the Park Connector Network (PCN) programme since the 1990s, which aims to connect major parks, open spaces and natural areas through linear green corridors to enhance the greening of the city.The programme aims to connect major parks, open spaces and natural areas through linear green corridors to enhance the accessibility and utilisation of green spaces for fitness and to provide space for public recreation.<a href="https://www.nparks.gov.sg/"> <strong>Read more</strong></a> <br><br> In this visualisation map, we wish to understand the ease with which residents can participate in these leisure facilities. The first map shows the location of parks and water activity areas.<br><br><img src="asset/1.png" style="height:100%;width:250px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parkwateractivities',
                    opacity: 0
                },
                {
                    layer: 'wateractivitiessg',
                    opacity: 1               
                },
                {
                    layer: 'parkssg',
                    opacity: 1                
                },
                {
                    layer: 'hdb',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'parkwateractivities',
                    opacity: 0
                },
                {
                    layer: 'wateractivitiessg',
                    opacity: 1                
                },
                {
                    layer: 'parkssg',
                    opacity: 1                
                },
                {
                    layer: 'hdb',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Access from HDB',
            description: 'When computing a 500 meter walkshed from each leisure space (parks and water activities areas), we can start to understand where access to leisure space from HDBs remains limited.<br><br><img src="asset/2.png" style="height:100%; width:250px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parkwateractivities',
                    opacity:0.5
                },
                {
                    layer: 'wateractivitiessg',
                    opacity: 1                
                },
                {
                    layer: 'parkssg',
                    opacity: 1                
                },
                {
                    layer: 'hdb',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'parkwateractivities',
                    opacity: 0.5

                },
                {
                    layer: 'wateractivitiessg',
                    opacity: 1               
                },
                {
                    layer: 'parkssg',
                    opacity: 1                
                },
                {
                    layer: 'hdb',
                    opacity: 0
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Punggol / Senkang',
            description: 'Our mapping exercise informs us that Punggol / Senkang is one of the most vulnerable areas regarding walkshed coverage to leisure space.<br><br> Geographical mapping of areas with limited access to parks and water activity spaces can help identify neighborhoods with lower recreational equity and inform urban planners on where to enhance green and blue space connectivity.<br><br><img src="asset/3.png" style="height:100%; width:250px;"></img>',
            location: {
                center: [103.90280, 1.39981],
                zoom: 14.5,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parkwateractivities',
                    opacity: 0.5
                },
                {
                    layer: 'wateractivitiessg',
                    opacity: 0               
                },
                {
                    layer: 'parkssg',
                    opacity: 0                
                },
                {
                    layer: 'hdb',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parkwateractivities',
                    opacity: 0.5
                },
                {
                    layer: 'supermarkets-5hinjk',
                    opacity: 0      
                },
                {
                    layer: 'parkssg',
                    opacity: 0            
                },
                {
                    layer: 'hdb',
                    opacity: 1
                }
            ],   
        },
        {
            id: 'forth-container',
            alignment: 'left',
            hidden: false,
            title: 'Tiong Bahru',
            description: 'At the same time, our mapping exercise reveals that Tiong Bahru is one of the best-served areas in terms of walkshed coverage to leisure spaces, with ample access to parks and water activity areas.<br><br> Geographical mapping of well-connected neighborhoods like Tiong Bahru highlights successful urban planning strategies, providing insights into how other areas can enhance their green and blue space accessibility. <br><br><img src="asset/3.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.82539, 1.28647],
                zoom: 14.5,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parkwateractivities',
                    opacity: 0.5
                },
                {
                    layer: 'wateractivitiessg',
                    opacity: 0               
                },
                {
                    layer: 'parkssg',
                    opacity: 0                
                },
                {
                    layer: 'hdb',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parkwateractivities',
                    opacity: 0.5
                },
                {
                    layer: 'supermarkets-5hinjk',
                    opacity: 0     
                },
                {
                    layer: 'parkssg',
                    opacity: 0            
                },
                {
                    layer: 'hdb',
                    opacity: 1
                }
            ],   
        },
    ]
};