const card = document.querySelector('.cardInner');

card.addEventListener('mouseenter' , function() {
    card.classList.toggle('is-flipped');
});

card.addEventListener('mouseleave' , function() {
    card.classList.toggle('is-flipped');
});

const cardOne = document.querySelector('.cardInnerOne');

cardOne.addEventListener('mouseenter' , function() {
    cardOne.classList.toggle('is-flipped');
});

cardOne.addEventListener('mouseleave' , function() {
    cardOne.classList.toggle('is-flipped');
});

const cardTwo = document.querySelector('.cardInnerTwo');

cardTwo.addEventListener('mouseenter' , function() {
    cardTwo.classList.toggle('is-flipped');
}); 

cardTwo.addEventListener('mouseleave' , function() {
    cardTwo.classList.toggle('is-flipped');
}); 

//Navigation bar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }