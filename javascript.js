let inputHeight = document.querySelector("#height");
let inputWeight = document.querySelector("#weight");
let submit = document.querySelector("#submit");
let result = document.querySelector("#result");
let para = document.querySelector("#para");


// Calculate BMI
let text = ""
let bmi = function() {
   text = inputWeight.value / ((inputHeight.value * inputHeight.value) / 10000)
   let finalResult = result.innerHTML = text
   if (finalResult < 18.5) {
      para.style.color = "red"
      para.innerHTML = "You are UNDERWEIGHT &#128542;"
   }
   else if (finalResult >= 18.5 && finalResult <= 24.9){
      para.style.color = "green"
      para.innerHTML = "You are PERFECT &#128525;"
   }
   else if ( finalResult > 24.9 ){
      para.style.color = "red"
      para.innerHTML = "You are OVERWEIGHT &#128551;"
   }
}
submit.addEventListener('click', bmi)