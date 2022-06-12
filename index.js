var randomNumber1 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImage= "dice" + randomNumber1 + ".png";

var randomImageSource = "Files/images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "Files/images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

 setTimeout(function(){

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "🚩Playr 1 wins"
}

else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Playr 2 wins🚩"
}

else {
	document.querySelector("h1").innerHTML = "Draw!"
}


}, 300)


