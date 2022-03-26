
var randomNumber=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomNumber+".png";

var randomimagesource="images/"+randomdiceimage;

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdimagesource2="images/dice"+randomNumber2+".png";


document.querySelectorAll("img")[1].setAttribute("src",randomdimagesource2);

if (randomNumber>randomNumber2){
    document.querySelectorAll("h1").innerHTML="Player 1 wins!";

}
else if (randomNumber2>randomNumber){
    document.querySelectorAll("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelectorAll("h1").innerHTML="it's a draw";
}