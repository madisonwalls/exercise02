console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var apple = document.querySelector('.Fruit--apple');
var orange = document.querySelector('.Fruit--orange');
var banana = document.querySelector('.Fruit--banana');
var iceCream = document.querySelector('.Dessert--icecream');
var cake = document.querySelector('.Dessert--cake');
var pie = document.querySelector('.Dessert--pie');

var dessert = document.querySelector(".Holder--dessert");
var fruit = document.querySelector(".Holder--fruit");
var final = document.querySelector(".Holder--result");




apple.addEventListener('click', function() {
  currentFruit = "apple";
  setFruit ();
  getResult ();

});

 orange.addEventListener('click', function(){
   currentFruit = "orange";
   setFruit ();
   getResult ();

});

banana.addEventListener('click', function(){
  currentFruit = "banana";
  setFruit ();
  getResult ();
});




iceCream.addEventListener('click', function () {
  currentDessert = "icecream";
  setDessert ();
  getResult ();


});

cake.addEventListener('click', function () {

  currentDessert = "cake";
  setDessert ();
  getResult ();

});

 pie.addEventListener('click', function () {

   currentDessert = "pie";
   setDessert ();
   getResult ();
});


function setFruit () {

fruit.innerHTML = '<img src=' + images.fruits[currentFruit] + '>';
console.log(currentFruit);
};

function setDessert () {

dessert.innerHTML = '<img src=' + images.desserts[currentDessert] + '>';

};

function getResult () {

  if (currentFruit == null || currentDessert == null) {
    final.innerHTML = '<p>Please select another ingredient.</p>';
  }else{
    final.innerHTML = '<img src=' + images.mixes[currentFruit][currentDessert] + '>';
    console.log(currentFruit);
};

};
