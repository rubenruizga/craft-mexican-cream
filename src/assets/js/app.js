import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
window.onload = function initMap() {
  var location = {lat: 28.6748368, lng: -106.0822063};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
