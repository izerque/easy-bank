let humB =document.querySelector('#humButton');
let activeN= document.getElementsByClassName('nav_list_container')[0];
console.log('>>>', humB)
console.log('>>>>>',activeN)
humB.addEventListener( 'click', function(event){
    console.log('>>>> ive heard')
  activeN.classList.toggle('active')
  activeN.classList.toggle('nav_list_container')
  console.log('>>>>>',activeN)
});
