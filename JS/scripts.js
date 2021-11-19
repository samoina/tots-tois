// function initMap() {
//     var location = {lat: -1.287750, lng:36.785130}; /*For latitude & longitude use latlong.net */
//      var map = new google.maps.Map(document.getElementById ("map"),{
//      zoom:4,
//      center: location
//  });

//  var marker = new google.maps.Marker ({
//      position: location,
//      map: map
//  });
//  }

function myMap() {
            var mapProp = {
                center: new google.maps.LatLng(-1.287750, 36.785130),
                zoom: 5,
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        };