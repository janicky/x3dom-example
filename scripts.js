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
})();