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
/* function isLeapYear(year)
{
   const remainder = year % 4;
   if(remainder === 0)
   return true;
   else
   return false;
}
const myLeapYear = isLeapYear(2016);
console.log('My year : ', myLeapYear); */
//-------------------parallel position of indrx and element an array-------------------
/* function getSumOfAnAray(numbers)
{
for(let i=0; i<numbers.length; i++)
{
const index = i;
const element = numbers[index];
console.log(index , element);
}
}
const myNumbers = [12, 13, 14, 15, 16, 17, 18];
getSumOfAnAray(myNumbers);

output:
1 13
2 14
3 15
4 16
5 17
6 18 */
//-----------------sum of array--------------------
/* function getSumOfAnAray(numbers)
{
let sum = 0;
for(let i=0; i<numbers.length; i++)
{
const index = i;
const element = numbers[index];
sum = sum + element;
console.log(index , element, sum);
}
return sum;
}
function getOddNumbersOfAnArray(numbers) {
   const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if(element % 2 === 1)
    {
      console.log(index, element);
      oddNumbers.push(element);
    }
    
  }
return oddNumbers;
}
const myNumbers = [12, 13, 15, 16, 17, 18, 20, 23, 25, 68, 89];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnAray(oddNumbers);
console.log('odd number sum : ', oddNumberSum); */
//const myNumbers = [12, 13, 14, 15, 16, 17, 18];
//getSumOfAnAray(myNumbers);

//------------------sum of number----------------
/* function addNumbers(numbers)
{
   let sum = 0;
   for(let i=1; i<=numbers; i++)
   {
   sum = sum + i;
   console.log(i,sum);
   }
   return sum;
}
addNumbers(7);
 */
/* function factorial(number)
{
   let result = 1;
for(let i = number; i >= 1; i--){
   result = result * i; 
   console.log(i);
}
return result;
}

let number = 7
let fact = factorial(number);
console.log('the factorial is : ' , fact); */
//---------------------------convert celscious to fahrenheit--------------
/* let prompt = require ("prompt-sync")({sigint : true});
let cels = prompt('Enter a celscious value : ');
let fahrenheit = (cels * 1.8) + 32;
console.log(`${cels} degree celscious is equal to ${fahrenheit}  degree fahrenheit`);
 */
//-----------------------convert fahrenheit to celscious---------------------
/* let prompt = require ("prompt-sync")({sigint : true});
let fahren = prompt('Enter a fahrenheit value : ');
let celscious = parseInt((fahren - 32) * (5/9));
console.log(`${fahren} degree fahrenheit is equal to ${celscious} degree celscious`); */
//----------------using Function convert fahrenheit to celscious-----------------------
/* function convertFahrenheitToCelscious(temperature){
   let celsious = (temperature - 32) * (5/9);
   return parseInt(celsious);
}
let fahrenTemp = 92;
let convertCelsTemp = convertFahrenheitToCelscious(fahrenTemp);
console.log(`${fahrenTemp} degree fahrenheit is equal to ${convertCelsTemp} degree celsious`); */
//-------------------simple-interest-------------------
/* let p, n, r, si;
p=15;
n = 12;
t = 12;
r = 12;
si = (p * t * r)/100;
console.log("Simple interest is : " + si); */
//-----------------compund-interest--------------------
/* let p = 100000, r = 5, t = 2;
let A = p * (Math.pow(( 1 + r / 100),t));
let CI = A-p;
console.log('compund interest is : ', CI); */
//---------------------compund interest----------------
/* let p = 50000, r = 10, t = 2;
A = p * (Math.pow ((1 + r/100), t))
let ci = A - p;
console.log('Complex interest is : ',ci.toFixed(2)); */
//-------------practice-complex-problem---------------------
/* let p = 70000, r = 4, t = 5;
let A = p * (Math.pow((1+r/100), t));
let ci = A - p;
console.log('complex interest is : ', ci.toFixed(2)); */
//----------------if-else-string-uppercse-lower case-------------------
/* let userName = 'zayedOpu';
let userInput = 'zayedopu';
console.log(userName.toLowerCase());
if(userName.toUpperCase() == userInput.toUpperCase())
{
   console.log('valid user');
}
else{
   console.log('invalid user');
} */
/* let lyrics = 'ami tomer moner vitor ekbar gure ashte chai';
let searchString = 'MONER';
let doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist); */
//----------------string-indexof---------------
/* let lyrics = 'Ami Tomer Moner Vitor Ekbar';
let lyricsIndex = lyrics.toLowerCase().indexOf('moner');
console.log(lyricsIndex); */
//-----------------------------if-else-----------
/* let lyrics = 'Hello, I am here';
let lyricsIndex = 'Hello';
if(lyrics.indexOf(lyricsIndex) !== -1)
{
console.log('INSIDE HERE');
}
else{
   console.log('its not here');
}
console.log(lyrics.startsWith('Hello')); */
/* let fileName = 'data.pdf';
let picName = 'image.png';
console.log(fileName.endsWith('pdfd')); */
//------------split-------------
/* let lyrics = 'prithibir joto sukh. joto balobasha . sobei j timai debo .';
//let lyricsSplit = lyrics.split(' ');
let sentences = lyrics.split('.');
let sliceLyrics = lyrics.slice(0, 11);
let checkSubString = lyrics.substring();
//console.log(sliceLyrics);
console.log(checkSubString);
let lyricse = 
[
   'prithibir joto sukh',
   'joto balobasha',
   'sobei j timai debo'
];
let newLyrics = lyricse.join('.'); */
//-------------math.pow--------------
/* let value = Math.pow(3, 3);
console.log(value); */
//-------------if-else(math.abs)---------------
/* let num1 = 25;
let num2 = 45;
let gap = Math.abs(num1 - num2);
if(gap < 5)
{
   console.log("You Guys Can Be Friend");
}
else{
   console.log("You guys stay apart");
} */
//-----------------math.round---------
/* let num = 2.5678;
let roundedNumber = Math.round(num);
console.log(roundedNumber);
 */
//-------------MATH.ceil-----------
/* let number = 0.0000002;
let ceilNumber = Math.ceil(number);
console.log(ceilNumber); */
//--------------Math.ceil--------------
/* let number = 0.956;
let flooorNumber = Math.floor(number);
console.log(flooorNumber);
 */
//---------------math.random------------------------
//console.log(Math.random());
//------------------Math.random()-1 to 100 value give-----------
/* for (let i = 0; i < 20; i++) {
  let value = Math.round(Math.random() * 6);
  console.log(value);
} */
//--------------------------swap.js------------------------------
/* let num1 = 10;
let num2 = 12;
console.log(num1, num2); */
/* let temp = num1;
num1 = num2;
num2 = temp; */
//console.log(num1 , num2);
//----------------Destructuring-swap-------------
/* [num1 , num2] = [num2 , num1];
console.log(num1 , num2); */
//-------------------------marks-compare---------------------------
/* let jim = 45;
let Dela = 34;
let Chinku = 78;
if(jim > Dela && jim > Chinku)
console.log('Jim will get the cake');
else if(Dela > jim && Dela > Chinku)
{
console.log('Dela will get the cake');
}
else{
   console.log('Chinku will get the cake');
} */
//----------------max-in-Array(largest number)-------------
/* function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if(element > largest)
    largest = element;
  }
  return largest;
}
const heights = [167, 190, 120, 165, 137, 200];
let tallest = maxInArray(heights);
console.log(tallest); */
//---------------reverse-string------------
  function reverseText(text)
{
  /*  for(let i=0; i <text.length; i++)
   {
      const element = text[i];
      console.log(element);
   } */
   let reversed = '';
   for(let i = text.length -1; i >= 0; i--)
   {
      const element = text[i];
      reversed = reversed + element;
      //console.log(element, reversed);
   }
   return reversed;
}
const textString = 'i am a bad boy';
const reversed = reverseText(textString);
//console.log(reversed); 

//-----------------reverse-word--------------
/* function reverseWord(word)
{
   const words = word.split(' ');
   //console.log(words);
   let result = [];
   for(let i = words.length-1; i >= 0; i--)
   {
      const element = words[i];
      result.push(element);
   }
   console.log(result);
   const reversed = result.join(' ');
    return reversed;
}
const wordString = 'i am a good boy';
const reversedWord = reverseWord(wordString);
console.log(reverseWord); */
//-------------------series-------------
/* const fibo = [0, 1];
for(let i=2; i<=15; i++)
{
   fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */
//--------array check korar jonno (Array.isArray) use korbo----------
let number = [1, 2, 3, 4];
//console.log(Array.isArray(number));
//------------kono jinish arrayte ase kina check--------------
let numbers = [1, 2, 3, 4];
//console.log(numbers.includes(5));
//-----------use concat-------------
let NUMBER =[1, 2, 3, 4];
let anoNumber = [12, 13,14,3,5,6];
let newNumber = anoNumber.concat(NUMBER);
console.log(newNumber);