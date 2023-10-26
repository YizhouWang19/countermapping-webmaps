var config = {
    style: 'mapbox://styles/yizhouwang19/clo316rct000w01qvhjt33b3s',
    accessToken: 'pk.eyJ1IjoieWl6aG91d2FuZzE5IiwiYSI6ImNsbjF3anFwcTAybm8ycW5oNmdyd3VhaWcifQ.auQlBSQ76G-1HtO6Ahd1CQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Who is affected by flooding in New York City?',
    byline: 'By Yizhou Wang',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',


    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flooding risk in New York',
            description: 'With climate change and sea level rise, severe flooding could happen in NYC. Therefore, NYC government have madeNew York City Stormwater Resiliency Plan, Recovery and Resilience Projects and DEP Green Infrastructure to respond. However, the coastal area is gentrifying as climate resilience projects are expensive and may be lack of access to the low-income communities or a minority communities as Environmental Justice Areas in New York. Affordable Housings and people below proverty line are also more likely to be at flooding risks. During the storm weather by the hurricane in 2012, New York City Housing Authority public housing developments were without power for days or even weeks.',
            location: {
                center: [-73.98082, 40.74661],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: 'pluto-hous-type-master-featu-7b5u7f',
                  opacity: 0,
                 }
            ],
            onChapterExit: [
                {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 1,
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Public Housing in flooding',
            image: 'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab10/story_starterfiles/story_starterfiles/images/redhook.png',
            description: 'In the fall of 2012, New York City was hit with a hurricane that left tens of thousands of public housing residents without power for days or even weeks. When Hurricane Sandy struck, the Red Hook Houses were inundated with 6 feet (1.8 m) of floodwater through sewer overflow and high tides. The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that hurt the health of residents.',
            location: {
                center: [-74.004608, 40.675838],
                zoom: 16.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pluto-hous-type-master-featu-7b5u7f',
                    opacity: 1,
                }
            ],
            onChapterExit: []
        },
        
    ]
};
