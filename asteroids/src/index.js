const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    let canvas_element = document.getElementById("game-canvas");
    let ctx = canvas_element.getContext("2d");
    window.ctx = ctx;
  });
