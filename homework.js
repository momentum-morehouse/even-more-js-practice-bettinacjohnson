// Problem 1
// declare a variable called fruit
// assign your variable the value 6
// // console log your variable
let fruit = 6;
console.log(fruit)

// REAL PROBLEM TWO
// // write a function called product that accepts two numbers and 
// logs the product in the console and then
// returns the answer when you multiply them both together
// call that function on the numbers 4 & 689 to test it
function product(numberOne, numberTwo) {
  let(numberOne *= numberTwo);
  return product;
}
console.log(4 * 689)

// Problem 2
// write a function called evens that takes an array of numbers, removes 
// all the numbers that are odd and returns a new array with only the even numbers
// remember that even numbers have a remainder of 0 when you divide them by 2
// call your function on this array of numbers [4, 37, 18, 29, 52, 103, 22]
function evens(arr){
  let result = arr.filter(arr => arr % 2 == 0);
  return result;
}
console.log(evens([4, 37, 18, 52, 103, 22]));

//Problem 3
// write a function called five that takes a word and prints it in the console
// five times
// call your function on the word "pineapple" to test it
for (let counter = 0; counter < 5; counter++){
  console.log("pineapple")
}

//Problem 4
// write a function called shortWords that takes an array of words and then
// returns a new array with only the words that are 3 letters long or less
// call your function on this array ["basin", "pit", "cheese", "bun", "river"]
function shortWords(words) {
  // the above creates an empty array that will be called newWords
  let newWords = [] 
  for (let word of words) {
  // creates a for loop that will check each word in the original array
    if (word.length <= 3 ) {
      // creates an if statement that checks the length of each word in the original array Words
      // then pushes the word to the newWords array that is less than or equal to 3 characters 
      newWords.push(word)
      // this will push the words that pass into a new array called newWords
    }
  }
  return newWords;
}
let arrayWords = ["basin", "pit", "cheese", "bun", "river"]
console.log(shortWords(arrayWords))
//  QUESTION OF WHERE IT EXPLICITLY STATES arrayWords AND HOW IT KNOWS WHAT TO DO