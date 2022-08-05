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
/* var givenNumber = 119;
var dividedNumber = 5;
var remainderNumber = 119 % 5;
console.log('output : ' , remainderNumber); */
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
// var bananaPosition = fruits.indexOf('banana');
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
// var prompt = require ("prompt-sync")({sigint : true});
// var num1 = parseFloat(prompt('Enter the first number : '));
// var num2 = parseFloat(prompt('Enter the second number : '));
// var num3 = parseFloat(prompt('Enter the third number : '));
// var largestnumber = Math.max(num1, num2, num3);
// console.log('The largest number is : ' + largestnumber);
//----------------------You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else
// var num1 = 9;
// var num2 = 8;
// var num3 = 9;
// if(num1 == num2 && num1 == num3 && num2 == num3 )
// {
// console.log('This is Equilateral triangle');
// }
// else if(num1 == num2 || num2 == num3 || num1 == num3){
// console.log('This is Isosceles');
// }
// else{
//     console.log(blank);
// }
//------------------------or-upper-solution---------------------------
// var prompt = require ("prompt-sync")({sigint : true});
// var num1 = parseInt(prompt("Enter the first number : "));
// var num2 = parseInt(prompt("Enter the second number : "));
// var num3 = parseInt(prompt("Enter the third number : "));
// if(num1 == num2 && num1 == num3 & num2 == num3)
// {
//     console.log("Equilateral Triangle");
// }
// else if(num1 == num2 || num1 == num3 || num2 == num3)
// {
// console.log("Isoscelis triangle");
// }

// else{
//     console.log("blank");
// }
//----------------------------While-Loop--------------------
//  var number = 0;
//  while(number < 5)
//  {
//     console.log('counting number');
//     console.log(number);
//     number++;
//  }
//----------------------number-counting-while loop-------------------
// var number = 0;
// while(number <= 10)
// {
//    console.log(number);
//    number++;
// }
//----------------- print even number---------------------
// var number = 0;
// while(number <= 20){
//    console.log(number);
//    number = number + 2;
// }
// ------------------------------print odd number------------------------------
// var number = 1;
// while(number <= 10)
// {
//    console.log(number);
//    number = number + 2;
// }
// -------------------------1-10-porjonto-print-------------------
/* console.log('simple for loop');
var i;
for(i=0; i<10; i++)
{
   console.log(i);
} */
//--------------array theke loop er through te element ber kora-----------------
/* var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for(var i=0; i<numbers.length; i++)
{
var number = numbers[i];
console.log(number);
} */
/* for(var i=0; i<=90; i++)
{
   console.log(i);
   if(i>10)
   break;
} */
/* var number = 10;
while(number >= 1)
{
console.log(number);
number--;
} */
/* for(var i=10; i>=1; i--)
{
console.log(i);
} */
/* var i = 0;
for (i=0; i<5; i++){};
console.log(i);
 */
// ------------------substring--------------
/* var names = 'opuis a engineer';
var result = names.substring(0, 5);
console.log(result); */
//-----------------declare function----------------
/* function myFunction()
{
   console.log('I am opu');
}
myFunction(); */
// -------------function with parameter--------------
// function myFunction(money)
// {
//    console.log('I am developer');
//    console.log(money);
// }
// let taka = 1110;
// myFunction(taka);
// ---------------------------------------function-------------------------
/* function add(num1, num2)
{
   console.log(num1, num2);
   var sum = num1 + num2;
   //console.log('The sum of two numbers : ' ,sum);
   return sum;
}
//add(13, 13);
var total = add(30, 30);
console.log('total : ',total); */
// -----------------------------------function-example-----------------------
/* function bringSingara(money)
{
   var singraPrice = 10;
   var quantity = money / singraPrice;
   return quantity;
}
var mytaka = 150;
var singaras = bringSingara(mytaka);
console.log('eating singara : ' ,singaras); */
//----------------------function-get-average---------------------
/* function getAverage(ass1, ass2, ass3)
{
   const total = ass1 + ass2 + ass3;
   const average = total / 3;
   return parseInt(average);
}
const ass1 = 60;
const ass2 = 50;
const ass3 = 60;
const myAverage = getAverage(ass1, ass2, ass3);
console.log('My average assignment number : ' , myAverage); */
//-----------------------Function-Example--------------------
/* function add(num1, num2)
{
    const result = num1 + num2;
    return result;
}
const result1 = add(12, 12);
const result2 = add(25, 25);
const finalResult = result1 + result2;
console.log('The final result is : ' , finalResult); */
//----------------------object_example--------------------
/* var shoppingCart = {
  egg: 12,
  hen: 3,
  pen: 34,
  books: 4,
  mouse: 3,
}; */
/* console.log(shoppingCart);
var countPen = shoppingCart.pen;
//console.log(countPen);
   //or
var penCount2 = shoppingCart['egg'];
//console.log(penCount2);
var properties = Object.keys(shoppingCart); 
//console.log(properties);
var propertyValues = Object.values(shoppingCart);
//console.log(propertyValues);  
var propertyName = 'books';
var propertyValues = shoppingCart[propertyName];
//console.log(propertyName, propertyValues);
console.log(shoppingCart);
shoppingCart.mouse = 39;
console.log(shoppingCart);
shoppingCart['mouse'] = 56;
console.log(shoppingCart);
shoppingCart[propertyName] = 45;
console.log(shoppingCart);
 */
//-------------------------looping in object-------------------
/* var shoppingCart = {
   egg : 4,
   pen : 6,
   book : 5,
   boyttle : 6
}
var items = Object.keys(shoppingCart);
console.log(items);
const values = Object.values(shoppingCart);
console.log(values);
for(var i=0; i<items.length; i++)
{
   var propertyName = items[i];
   var propertyValues = shoppingCart[propertyName]; */
//console.log(propertyName, propertyValues);

//-----------------------or----------------------
/* for(var propertyName in shoppingCart)
{
   var propertyValues = shoppingCart[propertyName];
   console.log(propertyName, propertyValues);
} */
//------------------------switch------------------
/* var color = "black";
switch (color) {
  case "green":
    console.log("green light");
    break;
  case "red":
    console.log("red light");
    break;
  case "white":
    console.log("white light");
    break;
  case "black":
    console.log("black light");
    break;
  default:
    console.log("sun light");
} */
//--------------------------let-const-var-------------
/* let age = 12;
age = 10;
age = 15;
age = 23;
const names = 'opu';
//name = 'rahim';
console.log(age, names);
 */
/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet); */
//------------or---------------
/* const dadaInch = 144;
const dadaFeet = dadaInch / 12;
console.log('dadar feet : ' , dadaFeet); */
//-----------------------using-function-inches-feet-------------------------
/* function inchToFeet(inch)
{
   const feet = inch / 12;
   return feet;
}
const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);
console.log('dadas feet : ' , dadaFeet);

const nanaInch = 168;
const nanaFeet = inchToFeet(nanaInch);
console.log('nanas feet : ', nanaFeet); */
//----------------check even or odd------------------
/* function isEven(number)
{
   const remainder = number % 2;
   if(remainder == 0)
   return true;
   else
   return false;
}
myNumberIsEven = isEven(29);
console.log(myNumberIsEven);
herNumberIsEven = isEven(28);
console.log(herNumberIsEven); */
//-------------------check-leap-year--------------------
function isLeapYear(year)
{
   const remainder = year % 4;
   if(remainder === 0)
   console.log('your year is leapyear', year);
   else
   console.log('your year is not a leap year', year);
}
isLeapYear(2016);