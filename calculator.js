// let string =""; // he 1 black string input feild karta ghetli aapn
// let input =document.getElementById("input");
// for(var i=0;i<=9;i++){
// document.getElementById(i).addEventListener("click",function(e){
// console.log(i);
// })
// }
let input = document.querySelector("#input");
let btn0 = document.querySelector("#block0").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn1 = document.querySelector("#block1").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn2 = document.querySelector("#block2").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn3 = document.querySelector("#block3").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn4 = document.querySelector("#block4").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn5 = document.querySelector("#block5").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn6 = document.querySelector("#block6").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn7 = document.querySelector("#block7").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn8 = document.querySelector("#block8").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let btn9 = document.querySelector("#block9").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})


let plus = document.querySelector("#plus").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let minus = document.getElementById("minus").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let multiply = document.querySelector("#multiply").addEventListener("click", function (e) {
   // console.log(e.target.value);
    input.value = input.value + e.target.value;
})
let divide = document.querySelector("#divide").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})

let dot = document.querySelector("#dot").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = input.value + e.target.value;
})

let clear = document.querySelector("#clr").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = "";
})

let ans = document.querySelector("#ans").addEventListener("click", function (e) {
    console.log(e.target.value);
    input.value = eval(input.value);
})
