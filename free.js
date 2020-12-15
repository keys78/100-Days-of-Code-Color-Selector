const colors = ["green", "red", "rgba(133,122,200)" ,"#f15025"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");
const head = document.getElementById("masumo");


button.addEventListener("click", function () {
  
  //get a random number btw 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
  button.style.backgroundColor = colors[randomNumber];
  head.style.color = colors[randomNumber];
}); 

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}