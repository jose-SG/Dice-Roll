/* Select the button for rolling dice */
var button = document.querySelector(".rollButton");

/* Roll the dice when the button gets clicked */
button.addEventListener("click", function() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomDiceImage1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomDiceImage2);

  var h1 = document.querySelectorAll("h1")[0];

  /* Change the H1 content to show the winner */
  if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 wins!";
  } else {
    h1.innerHTML = "Draw!";
  }
})
