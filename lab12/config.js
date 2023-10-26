var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1IjoieWl6aG91d2FuZzE5IiwiYSI6ImNsbjF3anFwcTAybm8ycW5oNmdyd3VhaWcifQ.auQlBSQ76G-1HtO6Ahd1CQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By Yizhou Wang',
    para1: 'Coastal Flooding in New York City has become an increasingly urgent concern, driven by the growing impacts of climate change. The  extensive waterfront areas and densely populated neighborhoods are particularly vulnerable to rising sea levels and more frequent and severe storms. With millions of residents and billions of dollars in real estate at risk, understanding the precise vulnerabilities of housing in these areas is crucial. The city has taken significant steps to address this issue, from implementing innovative infrastructure projects to stricter building codes, but more comprehensive risk assessment and mitigation strategies are required to protect vulnerable communities.',
    para2: 'Assessing Risks to Vulnerable Housing is a critical aspect of addressing this multifaceted challenge. It involves not only identifying which neighborhoods and housing units are most at risk but also developing strategies to protect and, in some cases, relocate residents. Additionally, it necessitates a thorough examination of the socio-economic factors that contribute to housing vulnerability, as low-income communities are often disproportionately affected. Public policy, investment in resilient infrastructure, and community engagement are all essential components of mitigating the risks associated with coastal flooding in New York City. To safeguard the future of the city and ensure the well-being of its residents, a proactive and holistic approach to addressing this issue is imperative.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    video: 'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab12/images/902-1_902-2364-PD2_preview.mp4',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Flooding Risks in New York',
            image: 'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab12/images/newyorkflooding.png',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
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
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Public Housing in flooding',
            image: 'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab12/images/redhook.png',
            description: 'In the fall of 2012, New York City was hit with a hurricane that left tens of thousands of public housing residents without power for days or even weeks.',
            location: {
                center: [-73.97600, 40.71906],
                zoom: 14,
                pitch: 60,
                bearing: 40,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

      {
    id: 'interlude',
    alignment: 'center',
    hidden: false,
    description: ' When Hurricane Sandy struck, the Red Hook Houses, a public housing development in Brooklyn, were inundated with 6 feet (1.8 m) of floodwater due to sewer overflow and high tides. The storm left residents without power and access to fresh water for months, making daily life extremely challenging. This prolonged exposure to the elements and lack of essential services caused structural damage to the buildings and severe health issues among the residents. The persistent moisture led to mold infestations within many apartments, exacerbating respiratory problems and allergies. This stark example underscores the pressing need to address vulnerabilities in housing and infrastructure across New York City to prevent such dire consequences in the face of future climate-related disasters. Comprehensive risk assessment, investment in resilient infrastructure, and community-centered solutions are vital to ensuring the well-being and resilience of residents living in flood-prone areas.',
    video:'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab12/images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-73.97615, 40.71901],
      zoom: 14.84,
      pitch: 48,
      bearing: 142.44,
    },
},




        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Who might be the victim?',
            image: 'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab12/images/victim.png',
            description: 'With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
