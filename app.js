(function(module){
  var map = {};//map object

  map.init = function () {
  var gMap = new google.maps.Map(document.getElementById('#map'),{
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  return gMap
}

  module.map = map;
})(window);
