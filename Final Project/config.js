var config = {
    style:  'mapbox://styles/yizhouwang19/clph2yrnk008s01p81gqo3it0',
    accessToken: 'pk.eyJ1IjoieWl6aG91d2FuZzE5IiwiYSI6ImNsbjF3anFwcTAybm8ycW5oNmdyd3VhaWcifQ.auQlBSQ76G-1HtO6Ahd1CQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: ' How does Construction of Parks Contribute to the Green Gentrification of New York City?',
    subtitle: 'CRP5850 Mapping and Countermapping -\n Yizhou Wang',
    byline: 'A Tale of Two Cities \n New York Governor Mario Cuomo on July 16, 1984',
    para1: '"A shining city is perhaps all the President sees from the portico of the White House and the veranda of his ranch, where everyone seems to be doing well. But there is another city; there is another part to the shining the city; the part where some people can not pay their mortgages, and most young people can not afford one; where students can not afford the education they need, and middle-class parents watch the dreams they hold for their children evaporate. In this part of the city there are more poor than ever, more families in trouble, more and more people who need help but can not find it. Even worse: There are elderly people who tremble in the basements of the houses there. And there are people who sleep in the city streets, in the gutter, where the glitter does not show. There are ghettos where thousands of young people, without a job or an education, give their lives away to drug dealers every day (Duffy & Leeman,2005)." ',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    video: 'D:/WYZ/Documents/GitHub/countermapping-webmaps/lab12/images/902-1_902-2364-PD2_preview.mp4',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Inequality in New York',
            description: 'New York City covers only over 300 square miles and has over 8 million residents, making it one of the densest and busiest cities in the world; It is also one of the most unequal regions (Black & Ricard, 2020).   <br>   <br> According to the World Bank, the National Gini Index of the United States in 2010 was 0.403, while the US Census estimates the Gini Index of New York City to be 0.55 (US Census, 2020; World Bank, 2010).   <br>   <br> Many studies have shown that more affluent neighborhoods may have more accessibility to green spaces, and that such environmental improvements may result in the displacement of lower income residents (Anderson et al., 2012). However, the role of parks in these green spaces has been less studied.   <br>   <br> Currently, there is extensive debate in the field of urban planning about how urban parks affect gentrification (Weiss et al., 2011). Some research suggests that parks can increase the attractiveness of neighborhoods, contribute to rising real estate values, and lead to forced displacement of residents in poor neighborhoods, such as in the park slope area of Brooklyn where median incomes tripled over 50 years (Halasz, 2018). ',
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
                 layer: 'environmental-justice-area-ce-3h3z3b',
                  opacity: 0,
                 },
                 {
                    layer: '80mbuffer-cm3rrw',
                     opacity: 0,
                    },
                    {
                        layer: '800mbufferclip-774xl2',
                         opacity: 0,
                        },
                        {
                            layer: 'highline-bel7fl',
                             opacity: 0,
                            },
                 {
                    layer: 'brooklynprice-0qj9g6',
                    opacity: 0,
                }
                 
            ],
            onChapterExit: [
                {
                     layer: 'environmental-justice-area-ce-3h3z3b',
                     opacity: 1,
                },
                   
            ],

        },

        {
            id: 'first-chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Does the allocation of the parks links to the green justice?',
            image:'images/31.png',
            description: 'According to Mayor &apos; s office of Climate & Environmental Justice (2023), New York City &apos; environmental justice law defines “Environmental Justice Areas” (Shown as Yellow) as low-income or minority communities located in the City of New York, based on US Census data. Many Environmental Justice area is facing the lack of access of new green areas. For example, the coastal area is gentrifying as climate resilience projects are expensive and may be lack of access to the low-income communities or a minority communities (Gould & Lewis, 2018). Now, New York City is taking measures to promote the lives in the Environmental Justice areas. Therefore, the inequity created by the environmental changes, including park establishment, is essential to study.',
            location: {
                center: [-74.02082, 40.67661],
                zoom: 11.5,
                pitch: 50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Greener, Richer?',
            image: 'images/21.png',
            description: 'Jamaica, Queens:  The average home value is $624,665.   <br>   <br>  In the Jamaican community, the lack of green infrastructure and parks can be life-threatening during the hot weather, as the streets in these areas tend to absorb heat (Barnard et al., 2022). ',
            location: {
                center: [ -73.790045038572310,40.705726182054915],
                zoom: 15,
                pitch: 30,
                bearing: 0,
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
            onChapterEnter: [{
                layer: 'environmental-justice-area-ce-3h3z3b',
                 opacity: 0,
                }],
            onChapterExit: []
        },

        {
            id: 'second-chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Greener, Richer?',
            image: 'images/22.png',
            description: 'Jamaica Estates:  The average home value is $1,030,645 <br>   <br>  However, in the nearby Jamaica Estates, sidewalks are lined with grass and trees, and the community is adjacent to Cunningham Park, a large public park. At the same time, it is worth noting that the housing prices in this area are approximately double those in the Jamaica community (Barnard et al., 2022). ',
            location: {
                center: [ -73.78433300722565, 40.725007262974616,],
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


      {
    id: 'interlude',
    title: 'Green Place can Cause Housing Price Increase',
    alignment: 'center',
    hidden: false,
    description: ' </p><img src="images/gg.jpg" style="width: 95%; height: auto; display: block; margin: 20px ;" /> <br>   <br> Empirical studies have shown that the increase in green spaces such as parks, forests, and water bodies increases the value of housing (Kolbe and Wüstemann, 2014). The value of green space. This type of convenience is usually capitalized into the value of the property, and homebuyers are willing to pay a premium for more convenient transportation. The increase in housing prices brought about by green spaces may lead to forced migration of indigenous peoples (Black & Richards, 2020; Sirois, 2018).',
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
    description: 'The High Line Park in New York City is a perfect example of this phenomenon. The park is an elevated pedestrian walkway renovated from an abandoned railway in the Chelsea community on the west side of Manhattan, which was fully opened in 2012. Since then, housing prices in nearby communities have continued to rise. The significant increase in property value caused by the Line Park confirms the unfair impact of the approach of the main road. This reinforces the standardized model, in which only the wealthy can afford green space, while the poor continue to be displaced and bear the burden of environmental issues after the achievements of new green space initiatives (Black & Richards, 2020; Sirois, 2018).',
    location: {
      center: [ -74.00789772295822, 40.74868335083749],
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
    id: 'third-chapter3',
    alignment: 'left',
    hidden: false,
    title: 'Case Study I: The History of the High Line Park',
    image: 'images/41.png',
    description: 'The High Line, a former freight track with a troubled past, faced demolition before being transferred into a park.  Originally, it was an unsafe street-level tracks for the New York Central Railroad in the mid-1800s. The West Side Improvement project in 1924 aimed to eliminate street-level crossings, resulting in the creation of the elevated rail line known as the High Line. It was mainly used to transported goods and passed through buildings.    Train usage declined in the 1960s-1980s, leading to section demolitions. Calls for complete demolition followed, but in 1983, efforts to repurpose the structure began. However, in 1990s, despite being considered an eyesore, a hidden garden of wild plants thrived. Friends of the High Line, founded in 1999 by Joshua David and Robert Hammond, advocated for its preservation. This non-profit maintains and operates the High Line, turning it from an abandoned railway into a globally admired park inspiring the adaptive reuse of urban spaces (High Line, 2023).',
    location: {
      center: [-74.00923584430823, 40.745804736880755],
      zoom: 15,
      pitch: 56,
      bearing: 30,
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
            description: 'The significant increase in real estate value caused by the high line confirms the impact of parks on real estate prices. The increase in value of houses within 80 meters of the park after 1000 days of establishment is much higher than those within 80-800 meters of the park. This gentrification will lead to only the wealthy being able to afford green spaces after the establishment of parks, while the poor continue to be displaced and bear the burden of environmental issues (Black & Richards, 2020).',
            location: {
              center: [-74.00423584430823, 40.749804736880755],
              zoom: 17,
              pitch: 56,
              bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: 'park-bqz8ql',
                  opacity: 0,
                 },
                ],
            onChapterExit: []
        },

        {
            id: 'third-chapter4',
            alignment: 'right',
            hidden: false,
            title: 'Case Study I: High Line Park',
            image: 'images/71.png',
            description: 'The increase in value of houses within 80 meters (the red buffer) of the park after 1000 days of establishment is much higher than those within 80-800 meters (blue) of the park. The significant increase in real estate value caused by the high line confirms the impact of parks on real estate prices. The housing transaction data also proved that the housing near the High Line is experiencing a more rapid price growth (Black & Richards, 2020)',
            location: {
              center: [-74.00323584430823, 40.745804736880755],
              zoom: 14.5,
              pitch: 0,
              bearing: 20,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    
                        layer: '80mbuffer-cm3rrw',
                         opacity: 0.4,
                        },
                        {
                            layer: '800mbufferclip-774xl2',
                             opacity: 0.4,
                            },
                            {
                                layer: 'highline-bel7fl',
                                 opacity: 0.4,
                                },
                     {
                        layer: 'brooklynprice-0qj9g6',
                        opacity: 0.73,
                     },

                {
                    layer: 'park-bqz8ql',
                     opacity: 0.7,
                    },],
            onChapterExit: []
        },

        {
            id: 'fourth-chapter3',
            alignment: 'left',
            hidden: false,
            title: 'Case Study II:Gentrification in the Waterfront of Brooklyn',
            description: ' From 2012 to now, there are various waterfront parks established in Brooklyn. For example, the Brooklyn Bridge Park Piers in Dumbo and Red Hook, Gowanus Canal Sponge Park in Gowanus, and Bush Terminal Park in Sunset Park.  The choropleth map depicting housing price changes reveals a distinct trend. Shades of red on the map indicate a more pronounced increase in housing costs. We can see that these waterfront communities with new waterfront green ways and parks from 2012 to 2017 mentioned are expriencing higher housing price change. </p><img src="images/9.png" style="width: 50%; height: auto; display: block; margin: 20px ;" /> ',
            location: {
                center: [ -74.02015596386975,40.65356564960238],
                zoom: 11.5,
                pitch: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            
        }, 

        

        {
            id: 'fourth-chapter',
            alignment: 'middle',
            hidden: false,
            title: 'Case Study II: Bush Terminal Park in Sunset Park',
            image: 'images/ssp1.png',
            description: 'In the past two decades, Sunset Park in Brooklyn pushed for the New York City government to clean up its waterfront, resulting in new green facilities. This includes a new park - the Bush Terminal Park, a waterfront promenade and newly planted trees. Despite successfully preventing a toxic gas power plant in their backyard, these improvements increased housing and living costs, forcing some low-income residents to relocate. This unintentionally forced the community to choose between affordable housing and a breathable environment. Now, some members are compelled to leave (Handy, 2020).',
            location: {
                center: [-74.006, 40.7128],
                zoom: 14,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [ {
                layer: 'brooklynprice-0qj9g6',
                opacity: 0,
            
        }],
            onChapterExit: []
        } ,

        {
            id: 'fourth-chapter2',
            alignment: 'right',
            hidden: false,
            title: 'Case Study II: Bush Terminal Park in Sunset Park',
            image: 'images/ssp2.png',
            description: 'Sunset Park &rsquo;s story is becoming a common narrative citywide. Historically, low-income communities have had fewer opportunities for quality green spaces compared to high-income areas. To address this, NYC prioritizes increasing green space access in low-income regions, supported by scientific evidence showing the positive impact of green areas on health and well-being. However, uncontrolled efforts to enhance green spaces in low-income areas may lead to "green gentrification," a process witnessed in Sunset Park. To counter this, some communities and scholars advocate for a "just green enough" approach, though it may not be the ideal model to combat NYC &rsquo; s green gentrification (Handy, 2020).',
            location: {
                center: [ -74.02015596386975,40.65356564960238],
                zoom: 15,
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
            id: 'fourth-chapter4',
            alignment: 'middle',
            hidden: false,
            title: 'Case Study III: Gowanus Canal Sponge Park of Gowanus',
            image: 'images/61.png',
            description: 'The Gowanus Canal was once surrounded by light industries and low to medium income residents, resulting in severe pollution of the canal, factories dumped toxic waste, polluted runoff, and raw sewage directly into the water However, as the waterfront landscape has been improved by the park, the area has transformed into "Brooklyn Venice". However, this has led to an increase in housing prices in the region, and well-educated middle-class communities have begun to replace the previous working class Latin American communities (Gould&Lewis, 2018).',
            location: {
                center: [ -73.99158195821101, 40.67611236908911],
                zoom: 15,
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
            id: 'fourth-chapter5',
            alignment: 'left',
            hidden: false,
            title: 'Case Study III: Gowanus Canal Sponge Park of Gowanus',
            image: 'images/51.png',
            description: 'The housing price of Gowanus is going up much faster than the borough avearge after the park is established. Poor and people of color residents typically reside near industrial waterfront areas, which are considered environmentally harmful and have low real estate value. As these industrial waterfront areas are transformed into waterfront landscapes and pocket parks, the real estate value increases, leading to an increase in housing costs. Residents who cannot keep up with the rising cost of living are forced to leave their communities  (Gould & Lewis, 2018).',
            location: {
                center: [-73.98965349377936,40.676964665118604],
                zoom: 17,
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
            id: 'fifth-chapter3',
            alignment: 'center',
            hidden: false,
            title: 'Challenge Faced and Opportunities for Improvement',
            description: 'Getting most updated park data <br>   <br> Coding and formatting <br>   <br> Link the social-economic status to actual park construction without other influences is hard <br>   <br> Creating a more through housing price comparison of the whole New York with and without new park construction <br>   <br> More case studies in different kinds of communities in Manhattan and Bronx <br>   <br>  Improvement for mobile site ',
            location: {
                center: [-74.01015596386975,40.65356564960238],
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
            description: 'New York planners face the crucial challenge of enhancing living standards without perpetuating social injustice through green gentrification. Proposed strategies include a two-stage approach. In Stage One, fostering community engagement is vital, with city authorities collaborating closely with locals to comprehend needs and concerns. Simultaneously, green spaces should be constructed based on traditional standards derived from community input. Moving to Stage Two, protective measures for housing must be implemented, stabilizing the affordable housing market amid green projects. Tailored policies in this phase cater to the unique needs of each community. An integrated approach emphasizes ongoing community involvement and active participation in green space development to counter gentrification, ensuring a healthy, affordable living environment for low-income residents (Sirois, 2018). <br>   <br>   Reference:  <br>   <br> Anderson, N. S., Busà, A., Brown, E., Candipan, J., Conn, P., Cordeau, R., ... & Treskon, M. (2012). The world in Brooklyn: Gentrification, immigration, and ethnic politics in a global city. Lexington Books. <br>   <br> Barnard, A., Kilgannon, C., Hughes, J., & Goldberg, E. (2022, May 28). Heat Waves in the Context of Climate Change and Inequality. The New York Times. https://www.nytimes.com/2022/05/28/nyregion/heat-waves-climate-change-inequality.html<br>   <br>Black, K. J., & Richards, M. (2020). Eco-gentrification and who benefits from urban green amenities: NYC’s high line. Landscape and urban planning, 204, 103900.<br>   <br>  Duffy, Bernard K.; Leeman, Richard W. (2005). American Voices: An Encyclopedia of Contemporary Orators. Greenwood Publishing Group. ISBN 9780313327902.<br>   <br>  High Line. (2023). History. https://www.thehighline.org/history/<br>   <br>  Gould, K. A., & Lewis, T. L. (2018). From green gentrification to resilience gentrification: An example from Brooklyn.<br>   <br>  Halasz, J. R. (2018). The super-gentrification of park slope, Brooklyn. Urban Geography, 39(9), 1366-1390.<br>   <br>  Handy, B. (2020). Why the “Just Green Enough” Approach is not an Effective Model for Combating Green Gentrification. Journal of Critical Environmental Justice. https://www.jcred.org/shortreads/green-gentrification-in-new-york-city<br>   <br> ',
            location: {
                center: [-74.01015596386975,40.65356564960238],
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
            id: 'fifth-chapter2',
            alignment: 'center',
            hidden: false,
            description: ' Kolbe, J., & Wüstemann, H. (2014). Estimating the value of urban green space: a hedonic pricing analysis of the housing market in Cologne, Germany (No. 2015-002). SFB 649 Discussion Paper. <br>   <br>Sirois, A. (2018, March 6). What Eco-Gentrification is and How We Can Avoid Pushing Out the Poor. The Link. https://thelinknewspaper.ca/article/what-eco-gentrification-is-and-how-we-can-avoid-pushing-out-the-poor<br>   <br> The Mayor &rsquo; s Office of Climate & Environmental Justice (2023). Environmental Justice. Climate NYC. https://climate.cityofnewyork.us/topic/environmental-justice/<br>   <br>  US Census. Estimated percentage change in the median gross rent between the periods of 2009-2013 and 2014-2018. PolicyMap. https://kenyon-policymapcom.libproxy.kenyon.edu/maps?i=9948781&nb=8&cb=22651&btd=15& period=2014-2018&cx=-74.00221997590624&cy=40.752040160016264& cz=14. (8 June 2020).<br>   <br>  Weiss, C. C., Purciel, M., Bader, M., Quinn, J. W., Lovasi, G., Neckerman, K. M., & Rundle, A. G. (2011). Reconsidering access: park facilities and neighborhood disamenities in New York City. Journal of urban health, 88, 297-310.<br>   <br>  World Bank. GINI Index (World Bank estimate) – United States. (2010). https://data. worldbank.org/indicator/SI.POV.GINI?locations=US Accessed 4 June 2020.',
            location: {
                center: [-74.01015596386975,40.65356564960238],
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


