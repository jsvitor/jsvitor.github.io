// calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  // starting position
  var pos = 0;
  // our box element
  var box = document.getElementById('box');
  var t = setInterval(move, 1);

  function move(speed = t) {
    if (pos >= 200) {
      clearInterval(speed);
    }
    else {
      pos += 1;
      box.style.width = pos+'px'; // px = pixels
    }
  }
};
