// function sum1(){
// document.getElementById("calulator").addEventListener("click",function(){
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var sum = parseInt(num1) + parseInt(num2);
//     document.getElementById("result").innerHTML = "แสดงผล : " +sum;
// });
// }
// function sum2(){
// document.getElementById("calulator1").addEventListener("click",function(){
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var sum = parseInt(num1) - parseInt(num2);
//     document.getElementById("result").innerHTML = "แสดงผล : " +sum;
// });
// }
// function sum3(){
// document.getElementById("calulator2").addEventListener("click",function(){
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var sum = parseInt(num1) * parseInt(num2);
//     document.getElementById("result").innerHTML = "แสดงผล : " +sum;
// });
// }
// function sum4(){
// document.getElementById("calulator3").addEventListener("click",function(){
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var sum = parseInt(num1) / parseInt(num2);
//     document.getElementById("result").innerHTML = "แสดงผล : " +sum;
// });
// }
// ------------------------ Onclick
function myalert(){
    alert("Hi")
}
function sum1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    alert(sum)
}
function sum2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    alert(sum)
}
function sum3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    alert(sum)
}

function sum4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    alert(sum)
}
function dmi(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var bmi = num1 / (num2 /100 * num2 /100);
    alert("DMI : " + bmi.toFixed(2))
}

const img = document.createElement("img")

img.src = "img/1.jpg"

document.getElementById("mydiv").appendChild(img);