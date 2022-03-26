
var randomNumber=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomNumber+".png";

var randomimagesource="images/"+randomdiceimage;

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdimagesource2="images/dice"+randomNumber2+".png";


document.querySelectorAll("img")[1].setAttribute("src",randomdimagesource2);