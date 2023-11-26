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
    title: ' How do Construction of Parks Contribute to the Green Gentrification of New York City?',
    subtitle: 'CRP5850 Mapping and Countermapping -\n Yizhou Wang',
    byline: 'A Tale of Two Cities \n New York Governor Mario Cuomo on July 16, 1984',
    para1: 'A shining city is perhaps all the President sees from the portico of the White House and the veranda of his ranch, where everyone seems to be doing well. But there is another city; there is another part to the shining the city; the part where some people can not pay their mortgages, and most young people can not afford one; where students can not afford the education they need, and middle-class parents watch the dreams they hold for their children evaporate. In this part of the city there are more poor than ever, more families in trouble, more and more people who need help but can not find it. Even worse: There are elderly people who tremble in the basements of the houses there. And there are people who sleep in the city streets, in the gutter, where the glitter does not show. There are ghettos where thousands of young people, without a job or an education, give their lives away to drug dealers every day.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    video: 'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab12/images/902-1_902-2364-PD2_preview.mp4',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Inequality in New York',
            description: 'New York City covers only over 300 square miles and has over 8 million residents, making it one of the densest and busiest cities in the world; It is also one of the most unequal regions.   <br>   <br> According to the World Bank, the National Gini Index of the United States in 2010 was 0.403, while the US Census estimates the Gini Index of New York City to be 0.55 (US Census, 2010; World Bank, 2010).   <br>   <br> Many studies have shown that more affluent neighborhoods may have more accessibility to green spaces, and that such environmental improvements may result in the displacement of lower income residents (Anderson et al., 2012). However, the role of parks in these green spaces has been less studied.   <br>   <br> Currently, there is extensive debate in the field of urban planning about how urban parks affect gentrification (Weiss et al., 2011). Some research suggests that parks can increase the attractiveness of neighborhoods, contribute to rising real estate values, and lead to forced displacement of residents in poor neighborhoods, such as in the park slope area of Brooklyn where median incomes tripled over 50 years (Halasz, 2018). ',
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
            title: 'Greener, Richer?',
            image: 'images/21.png',
            description: 'Jamaica, Queens:  The average home value is $624,665.   <br>   <br>  In the Jamaican community, the lack of green infrastructure and parks can be life-threatening during the hot weather, as the streets in these areas tend to absorb heat. ',
            location: {
                center: [ -73.79934038572192,40.703726182054915,],
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
            id: 'second-chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Greener, Richer?',
            image: 'images/22.png',
            description: 'Jamaica Estates:  The average home value is $1,030,645 <br>   <br>  However, in the nearby Jamaica Estates, sidewalks are lined with grass and trees, and the community is adjacent to Cunningham Park, a large public park. At the same time, it is worth noting that the housing prices in this area are approximately double those in the Jamaica community. ',
            location: {
                center: [ -73.78433300722565, 40.718007262974616,],
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
    title: 'Green Place can Cause Housing Price Increase',
    alignment: 'center',
    hidden: false,
    description: ' </p><img src="images/gg.jpg" style="width: 95%; height: auto; display: block; margin: 20px ;" /> <br>   <br> Empirical studies have shown that the increase in green spaces such as parks, forests, and water bodies increases the value of housing (Kolbe and Wüstemann, 2014). The value of green space. This type of convenience is usually capitalized into the value of the property, and homebuyers are willing to pay a premium for more convenient transportation. The increase in housing prices brought about by green spaces may lead to forced migration of indigenous peoples (Black & Richards, 2020).',
    location: {
      center: [-73.97615, 40.71901],
      zoom: 14.84,
      pitch: 48,
      bearing: 142.44,
    },


},

{
    id: 'third-chapter',
    alignment: 'middle',
    hidden: false,
    title: 'Case Study I: High Line Park',
    image: 'images/hl1.png',
    description: 'The High Line Park in New York City is a perfect example of this phenomenon. The park is an elevated pedestrian walkway renovated from an abandoned railway in the Chelsea community on the west side of Manhattan, which was fully opened in 2012. Since then, housing prices in nearby communities have continued to rise. The significant increase in property value caused by the Line Park confirms the unfair impact of the approach of the main road. This reinforces the standardized model, in which only the wealthy can afford green space, while the poor continue to be displaced and bear the burden of environmental issues after the achievements of new green space initiatives (Black & Richards, 2020).',
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
},


        {
            id: 'third-chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Case Study I: High Line Park',
            image: 'images/hl2.png',
            description: 'The significant increase in real estate value caused by the high line confirms the impact of parks on real estate prices. The increase in value of houses within 80 meters of the park after 1000 days of establishment is much higher than those within 80-800 meters of the park. This gentrification will lead to only the wealthy being able to afford green spaces after the establishment of parks, while the poor continue to be displaced and bear the burden of environmental issues (Black&Richards, 2020).',
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
        },

        {
            id: 'fourth-chapter',
            alignment: 'middle',
            hidden: false,
            title: 'Case Study II: Bush Terminal Park in Sunset Park',
            image: 'images/ssp1.png',
            description: 'In the past two decades, Sunset Park in Brooklyn pushed for the New York City government to clean up its waterfront, resulting in new green facilities. This includes a new waterfront promenade and newly planted trees. Despite successfully preventing a toxic gas power plant in their backyard, these improvements increased housing and living costs, forcing some low-income residents to relocate. This unintentionally forced the community to choose between affordable housing and a breathable environment. Now, some members are compelled to leave.',
            location: {
                center: [-74.006, 40.7128],
                zoom: 13,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        } ,

        {
            id: 'fourth-chapter2',
            alignment: 'right',
            hidden: false,
            title: 'Case Study II: Bush Terminal Park in Sunset Park',
            image: 'images/ssp2.png',
            description: 'Sunset Park &rsquo;s story is becoming a common narrative citywide. Historically, low-income communities have had fewer opportunities for quality green spaces compared to high-income areas. To address this, NYC prioritizes increasing green space access in low-income regions, supported by scientific evidence showing the positive impact of green areas on health and well-being. However, uncontrolled efforts to enhance green spaces in low-income areas may lead to "green gentrification," a process witnessed in Sunset Park. To counter this, some communities and scholars advocate for a "just green enough" approach, though it may not be the ideal model to combat NYC &rsquo; s green gentrification.',
            location: {
                center: [-74.006, 40.7128],
                zoom: 13,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 

        
        {
            id: 'fifth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion: Strategies for a More Inclusive Park Establishment and Green Growth',
            description: 'New York planners face the crucial challenge of enhancing living standards without perpetuating social injustice through green gentrification. Proposed strategies include a two-stage approach. In Stage One, fostering community engagement is vital, with city authorities collaborating closely with locals to comprehend needs and concerns. Simultaneously, green spaces should be constructed based on traditional standards derived from community input. Moving to Stage Two, protective measures for housing must be implemented, stabilizing the affordable housing market amid green projects. Tailored policies in this phase cater to the unique needs of each community. An integrated approach emphasizes ongoing community involvement and active participation in green space development to counter gentrification, ensuring a healthy, affordable living environment for low-income residents. <br>   <br>   Reference:',
            location: {
                center: [-74.006, 40.7128],
                zoom: 13,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        } 

        
    ]
};


