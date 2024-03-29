/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

var nums = [];
var numsString= "";
var userTries = [];

//string and array with 5 random numbers
while (nums.length < 5) {
    var num = getRandomNumber(1, 100);
    if (!nums.includes(num)) {
        numsString += num + " ";
        nums.push(num);
    }
}
alert("I numeri da memorizzare sono:\n" + numsString);

//timer
var timeLeft = 30;
var timerHTML = document.getElementById('timer');
var timer = setInterval(function() {
    if (timeLeft == -1) {
        clearTimeout(timer);
    } else {
        timerHTML.innerHTML = timeLeft;
        timeLeft--;
        console.log(timeLeft);
    }
}, 1000);

//timeouts 30s, then ask user for 5 nums input and compares them with random generated number array
setTimeout(function () {
    var userTries = fillArray(5);
    var guessed = checkDuplicates(nums, userTries);    
    alert("Hai indovinato " + guessed.length + " numeri:\nNumeri indovinati: " + guessed);
}, 30000);

//------ FUNCTIONS ------//
//gets random int with min and max included
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//returns array filled with user number prompts, number of prompts in argument
function fillArray(items) {
    var array = [];
    while (array.length < items) {        
        var num = parseInt(prompt("Inserisci un numero da 1 a 100"));    
        if (!isNaN(num) && num >= 1 && num <= 100 && !array.includes(num)) {
            array.push(num);
        }
    }
    return array;
}

//given 2 arrays returns array with elements in common
function checkDuplicates(firstArray, secondArray) {
    var common = [];
    for (var i = 0; i < secondArray.length; i++){
        var num = secondArray[i];
        if (firstArray.includes(num)) {
            common.push(num);
        }
    }
    return common;
}
//------ /FUNCTIONS ------//