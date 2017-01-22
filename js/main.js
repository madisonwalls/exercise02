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

apple.addEventListener('click', function fruitImage () {
  console.log('Apple clicked.');
  document.getElementById("fruit").innerHTML = '<img src=' + images.fruits.apple + '>';
  // update image in fruit holder
});

orange.addEventListener('click', function fruitImage (){
  console.log('Orange Clicked.');
  document.getElementById("fruit").innerHTML = '<img src=' + images.fruits.orange + '>';
});

banana.addEventListener('click', function fruitImage (){
  console.log('Banana Clicked.');
  document.getElementById("fruit").innerHTML = '<img src=' + images.fruits.banana + '>';
});

var iceCream = document.querySelector('.Dessert--icecream');
var cake = document.querySelector('.Dessert--cake');
var pie = document.querySelector('.Dessert--pie');

iceCream.addEventListener('click', function dessertImage () {
  console.log('Ice Cream clicked.');
  document.getElementById("dessert").innerHTML = '<img src=' + images.desserts.icecream + '>';
  // update image in fruit holder
});

cake.addEventListener('click', function dessertImage () {
  console.log('Cake clicked.');
  document.getElementById("dessert").innerHTML = '<img src=' + images.desserts.cake + '>';
  // update image in fruit holder
});

 pie.addEventListener('click', function dessertImage () {
  console.log('Pie clicked.');
  document.getElementById("dessert").innerHTML = '<img src=' + images.desserts.pie + '>';
  // update image in fruit holder
});
