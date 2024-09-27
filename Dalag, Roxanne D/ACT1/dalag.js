let dogImage = document.getElementById('dogImg');
let button = document.getElementById('dogButton');
let dogSound = document.getElementById('bark');

button.addEventListener('click',randomDogImage);
function randomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data)=> {
      dogImage.innerHTML = `<img id="dogImg" src="${data.message}"/>`;
      dogSound.play();
  });
}

let catImage = document.getElementById('catImg');
let button2 = document.getElementById('catButton');
let catSound = document.getElementById('meow');

button2.addEventListener('mouseover',randomCatImage);

function randomCatImage() {   
  fetch("https://api.thecatapi.com/v1/images/search")
  .then((data) => data.json())
  .then((data)=> {
      let cat = data[0].url;
      catImage.innerHTML = `<img id="catImg" src="${cat}"/>`;     
      catSound.play();
  });
}

let quoteMessage = document.getElementById('getRandomQuote');
let button3 = document.getElementById('quoteButton');
let bookSound = document.getElementById('book');

button3.addEventListener('click',randomQuoteMessage);
function randomQuoteMessage() {
   
    fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((item)=> {
      quoteMessage.innerHTML = `<p class="text"> ${item.content} <br> <br> <br> - ${item.author} </p>`;
      bookSound.play();
    });

}

function Logout(){
  window.location.replace("../ACT2/login.html");
}