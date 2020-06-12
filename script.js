
var color = "black"
const gridContainer = document.getElementById("grid-container");
const colorPallette = document.getElementById("paintBox");
const cc = document.getElementById("cc")

gridContainer.addEventListener("click", function(event) {
  event.target.style.backgroundColor = color;
});


for(var x = 0; x <= 509;x++){
var box = document.createElement("div");
box.className = "grid-item"
gridContainer.appendChild(box)}


colorPallette.addEventListener("click", function(event) {
  color = event.target.innerText.toString();
  console.log(event.target.innerText.toString())
  cc.innerText = "Current color = " + color
});

