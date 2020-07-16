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

const moreAboutMe = [
  '<a href="#pablo" onclick="moreHandle()" class="float"><i class="fa fa-plus my-float" aria-hidden="true" fa-5x></i></a>',
  '<a href="#pablo" onclick="moreHandle()" class="float"><i class="fa fa-plus my-float" aria-hidden="true" fa-5x></i></a>',
  '<a href="#pablo" onclick="moreHandle()" class="float"><i class="fa fa-plus my-float" aria-hidden="true" fa-5x></i></a>',
]

const more = document.querySelector('#plus-list-group');

function moreHandle() {



  moreAboutMe.map(item => {
    const listItem = document.createElement('li');
    const linkElement = item;
    listItem.append(linkElement);

    more.appendChild(listItem);
  })

}
