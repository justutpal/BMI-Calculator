let height = document.querySelector("#height.value");
let weight = document.querySelector("#weight.value");
let submit = document.querySelector("#submit");
let result = document.querySelector("#result");
let form = document.querySelectorAll("form input")
console.log(form.value)
console.log(weight)

// Calculate BMI

let BMI = function(height, weight) {
    weight / ((height * height) / 10000)
}