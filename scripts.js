(function() {
  var building = document.getElementsByClassName("building");
  var buildings = document.getElementById("buildings");
  var j = 0;
  for (var i = 0; i < 25; i++) {
    var newNode = building[0].cloneNode(true);
    var x = -55 + (i % 5) * 25;
    if (i % 5 == 0) {
      j++;
    }
    var y = -70 + j * 25;
    newNode.firstElementChild.setAttribute('translation', x + " 2.5 " + y);
    buildings.appendChild(newNode);
  }

  buildings.removeChild(building[0]);

  var pointLight = document.getElementById("pointLight");
  var pl = 0, r = 90;

  setInterval(function() {
    pl += 0.05;
    var circleX = -10 + Math.cos(pl)*r;
    var circleY = -10 + Math.sin(pl)*r;
    pointLight.setAttribute("location", circleX + " 15 " + circleY);
    if (pl > 360) {
      pl = 0;
    }
  }, 50);

  var pointLightButton = document.getElementById("pointLightButton");
  pointLightButton.addEventListener("click", togglePointLight);
  var directionalLightButton = document.getElementById("directionalLightButton");
  directionalLightButton.addEventListener("click", toggleDirectionalLight);
  var spotLight1Button = document.getElementById("spotLight1Button");
  spotLight1Button.addEventListener("click", toggleSpotLight1);
  var spotLight2Button = document.getElementById("spotLight2Button");
  spotLight2Button.addEventListener("click", toggleSpotLight2);

  function togglePointLight(e) {
    e.srcElement.classList.toggle("disabled");
    var enabled = pointLight.getAttribute("on");
    pointLight.setAttribute("on", (enabled === "true" ? "false" : "true"));
  }

  function toggleDirectionalLight(e) {
    var directionalLight = document.getElementById("directionalLight");
    e.srcElement.classList.toggle("disabled");
    var enabled = directionalLight.getAttribute("on");
    directionalLight.setAttribute("on", (enabled === "true" ? "false" : "true"));
  }

  function toggleSpotLight1(e) {
    var spotLight = document.getElementById("spotLight1");
    e.srcElement.classList.toggle("disabled");
    var enabled = spotLight.getAttribute("on");
    spotLight.setAttribute("on", (enabled === "true" ? "false" : "true"));
  }

  function toggleSpotLight2(e) {
    var spotLight = document.getElementById("spotLight2");
    e.srcElement.classList.toggle("disabled");
    var enabled = spotLight.getAttribute("on");
    spotLight.setAttribute("on", (enabled === "true" ? "false" : "true"));
  }
})();