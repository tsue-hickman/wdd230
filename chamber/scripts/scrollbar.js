// JavaScript to calculate and set the width of the content based on its children
window.onload = function() {
    var container = document.getElementById("scrollContainer");
    var content = document.getElementById("scrollContent");
    content.style.width = content.scrollWidth + "px";
  };
  
  