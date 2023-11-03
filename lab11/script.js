// Your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoieWl6aG91d2FuZzE5IiwiYSI6ImNsbjF3anFwcTAybm8ycW5oNmdyd3VhaWcifQ.auQlBSQ76G-1HtO6Ahd1CQ';

const map = new mapboxgl.Map({
  container: 'Yizhou', // HTML element ID where the map will be displayed
  style: 'mapbox://styles/yizhouwang19/clo314mta00ck01qs771c12dq', // Basemap style URL
  center: [-122.42285, 37.76869], // San Francisco's longitude and latitude
  zoom: 13, // Initial zoom level
  pitch:25.49,
  bearing:0.00
});
map.on('load',function(){  
  map.addSource('restaurant',{
    'type':'vector',
    'url': 'mapbox://yizhouwang19.ab0k4ny7'
  });

  map.addLayer({
    'id':'restaurant_score',
    'type':'circle',
    'source':'restaurant',
    'source-layer':'Restaurant_Scores_-_LIVES_Sta-7re177',
    'paint':{
      'circle-color': [
        'match',
        ['to-number',['get', 'inspection_score']],
        45, '#440154',
        80, '#3b528b',
        85, '#21908d',
        90, '#5dc963',
        95, '#fde725',
        'gray' // Default color for any other value not in the ranges
      ],
      'circle-opacity': 0.8,
      'circle-radius': 3
    }
    
  });
  
  console.log('My name is Yizhou');
  
  // Add the event listener for 'mouseenter'
  map.on('mouseenter', 'restaurant_score', (e) => {
    var name = e.features[0]['properties']['business_name'];
    var textField = document.getElementById('restText'); // Get the 'restText' element
    textField.innerHTML = "<h4>"+name+"</h4>"; // Set the innerHTML to the restaurant name
  });
});
// Optionally, you can add navigation controls
map.addControl(new mapboxgl.NavigationControl());