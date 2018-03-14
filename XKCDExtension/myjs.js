console.log("JS Injected");
var comicDiv = document.getElementById("comic");
var comicImg = comicDiv.childNodes[1];
var altValue = comicImg.title;
comicDiv.insertAdjacentHTML('beforeend', "<p id='altTextAdded'>" + altValue + "</p>");
var altTextbox = document.getElementById("altTextAdded");
console.log("done");


