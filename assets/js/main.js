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
