// class-1 first-problem solved--------------------
// var momGave = 1000;
// var orangePrice = 400;
// var applePrice = 200;
// var totalCost = orangePrice + applePrice;
// var remainingMoney = momGave - totalCost;
// console.log(remainingMoney);
//-------------------------------------------------- 
//--------------------Problem-2---------------------
// var markOfMaths = 75.25;
// var markOfBiology = 65;
// var markOfChemistry = 80;
// var markOfPhysics = 35.45;
// var markOfBangla = 99.50;
// var averageMark = (markOfMaths + markOfBiology + markOfChemistry + markOfPhysics + markOfBangla)/5;
// var averageTotalMark = parseFloat(averageMark).toFixed(2);
// console.log(averageTotalMark);
//-----------------------Problem-2-solved-----------------------
//-----------------------Problem-3-start-----------------------
// var firstLine = 'I am going to be';
// var secondLine = 'an awesome web developer';
// var inOneLine = firstLine + ' ' + secondLine;
// console.log(inOneLine);
//------------------------Problem-3-solved--------------------------
//------------------------problem-4-start----------------------------
var givenNumber = 119;
var dividedNumber = 5;
var remainderNumber = 119 % 5;
console.log('output : ' , remainderNumber);
//------------------------problem-4-end------------------------------  

// -----------------------array-problem(push element in the beggining)------------------------
// var numbers = [1, 2, 3, 4, 5];
// numbers.unshift(6, 7, 8, 9);
// console.log(numbers);
// ---------------------------push apply in the array-------------------------------
// var numbers = [10, 11, 12];
// numbers.shift();
// console.log(numbers);
// -----------------find index of banana and replace banana with watermelon--------------
// var fruits = ['apple', 'banana', 'orange'];
// var bananaPosition = fruits.indexOf('orange');
// console.log(bananaPosition);
// fruits.splice(bananaPosition, 2, 'watermelon');
// console.log(fruits);
// -----------------------OR------------------------
// var fruits = ['Apple', 'Banana', 'Orange'];
// var positionBanana = fruits.indexOf('Banana');
// console.log(positionBanana);
// fruits[1] = 'Mango';
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push('watermelon');
// console.log(fruits);
// //----------------------condition-apply------------------------
// var iphonePrice = 95000;
// var myBudget = 45600;
// if(iphonePrice < myBudget)
// {
//     console.log("I will buy a iphone");

// }
// else{
//     console.log("I will not able to buy a iphone");
// }
// ------------------------condition-grade------------------------
// var num1 = 80;
// var num2 = 60;
// var num3 = 50;
// var num4 = 40;
// var num5 = 39;
// const prompt = require ("prompt-sync")({sigint : true});
// var marks = prompt('Enter your marks : ')
// if(marks >= 80 && marks <= 100)
// {
//     console.log('your grade is A ');
// }
// else if(marks >= 60 && marks <=79)
// {
// console.log('your grade is B');
// }
// else if(marks >= 50 && marks <= 59)
// {
// console.log('your grade is C');
// }
// else if(marks >= 40 && marks <= 49)
// {
// console.log('your grade is D')
// }
// else
// {
//     console.log('You are fail in exam');
// }
// ----------------------check-largest-number------------------
// var num1 = 113;
// var num2 = 79;
// var num3 = 145;
// if(num1 > num2 && num1 > num3)
// {
//     console.log('113 is the largest number');
// }
// else if(num2 > num1 && num2 > num3)
// {
// console.log('79 is the largest number');
// }
// else{
//     console.log('145 is the largest number');
// }
//---------------------------OR----------------------
// const prompt = require ("prompt-sync")({sigint : true});
// var num1 = parseFloat(prompt('Enter the first number : '));
// var num2 = parseFloat(prompt('Enter the second number : '));
// var num3 = parseFloat(prompt('Enter the third number : '));
// var largestnumber;
// if(num1 > num2 && num1 > num3)
// {
//     largestnumber = num1;
// }
// else if(num2 > num3 && num2 > num1)
// {
// largestnumber = num2;
// }
// else{
//     largestnumber = num3;
// }
// console.log('The largest number is : ' + largestnumber);
//-------------------check the largest---------------------
var prompt = require ("prompt-sync")({sigint : true});
var num1 = parseFloat(prompt('Enter the first number : '));
var num2 = parseFloat(prompt('Enter the second number : '));
var num3 = parseFloat(prompt('Enter the third number : '));
var largestnumber = Math.max(num1, num2, num3);
console.log('The largest number is : ' + largestnumber);