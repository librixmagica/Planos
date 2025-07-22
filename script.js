var moon  = document.getElementById("moon");
var earth  = document.getElementById("earth");

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', deviceOrientationHandler, false);
}

var deviceOrientationData;

function deviceOrientationHandler(e) {
  deviceOrientationData = e;  
  
  moon.style.webkitTransform = "translate("+ e.gamma/2 +"px," + e.beta/2 + "px)";
  moon.style.transform = "translate("+ e.gamma/2 +"px," + e.beta/2 + "px)";
  
  earth.style.webkitTransform = "translate("+ e.gamma/4 +"px," + e.beta/4 + "px)";
  earth.style.transform = "translate("+ e.gamma/4 +"px," + e.beta/4 + "px)";
  
  console.log(e.alpha + ' : ' + e.beta + ' : ' + e.gamma);
};