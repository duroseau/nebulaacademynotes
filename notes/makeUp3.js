// using this array:
//  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//  console.log(days.length)=> 7

// log the length of the array
// console.log(days[4])=> Thursday
// log the 4th element in the array
// console.log(days.shift())
// console.log(days)=>[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// remove the first element in the array. Log the new array and the element removed from the array
// days.unshift('Sunday')=>Sunday
// console.log(days)=>[
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
//   ]

// Add 'Sunday' at the beginning of the array and log the new array

// Remove the last element in the array. Log the new array and log the element removed
// days.pop()=> Saturday
// console.log(days)=>[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
// Add 'Saturday' to the end of the array and log the new array
// days.push('Saturday')
// console.log(days) // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// replace 'Thursday' with 'Friday Junior'
// days.splice(-3, 1, 'Friday Junior')
// console.log(days) //['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday Junior', 'Friday', 'Saturday']
// extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
// let favDay = days.slice(0,1) 
// console.log(favDay) //[ 'Sunday' ]
// console.log('My faviorte day of the week is ' + favDay) //My faviorte day of the week is Sunday
// combine these two arrays together
// console.log(phone.concat(laptop)); // [ 'iphone', 'android', 'MacBook', 'HP', 'Dell' ]
// let phone = ['iphone', 'android']

// let laptop = ['MacBook', 'HP', 'Dell']
/* -------------------------------------------------------------------------- */
// 10.24.20 Function Problems
// Due October 26, 2020 5:00 PM
// Instructions
//Problem 1


//Define a variable name and assign your name to it
// let name = 'Eddy Duroseau'
// function myName(signature){
//     return signature
// }
// console.log(myName(name))=> Eddy Duroseau

//Create a function that returns your name

//Problem 2

//Create a function that accepts 2 parameters, both of which are numbers, and returns the sum of those two numbers
// function bills(num1, num2){
//     return num1 + num2
// }
// console.log(bills(150, 200))=> 350
//Problem 3

//Create a function that returns the type of any argument that is being called in the function

// Log the type of a number
// console.log(typeof 7)=>number

// // Log the type of a string
// console.log(typeof '7')=>string

// // Log the type of NaN
// console.log(typeof 7*-00)=>NaN
//example:

//type(400) //=> 'number'

//type('hi') //=> 'string'

//Problem 4

var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// function sweet(fresh){
//     return `the darker the fruit ${fresh}`
// }
// console.log(sweet(fruits[4])) =>  the darker the fruit plum
//Using the array above, create a funciton that returns the 4th element in the array.
// function summer(snack){
//     return snack.pop()
// }
// console.log(summer(fruits)) => watermelon
//Create a function that returns only the last element in the fruits array

//Create a function that returns [peach', 'lemon', 'plum', 'grape']
// function split(arr){
//     return arr.slice(2, 6)
// }
// console.log(split(fruits)) => [ 'peach', 'lemon', 'plum', 'grape' ]
//Create a function that adds another furit to the end of the array and returns the new array

//Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'

//Problem 5

//var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']

//Using the array above, create a fucntion that returns the string, 'Hello Maurice and Chelsea!'

//Create a funciton that returns the string, 'Hi Jasmine and Daja!'

//Create a function that returns the string, 'Howdy Eddy!'

//Create a function that returns the string, 'Happy Monday, Anitria!'

//Create a function that returns the string, 'Hey Tauseef!'
/* -------------------------------------------------------------------------- */
// 10.26.20 Function Review
// Due October 28, 2020 5:00 PM
// Instructions
// Read eloquent JavaScript Chapter 3

// Problem #1
// Create a function called sumNum that takes in two parameters: num1 and num2.
// This function will return the sum of num1 and num2

// Problem #2
// Create a function called divisionRemainder that takes In two parameters: num1 and num2.
// This function will divide num1 and num2 (num1/num2). Assign the number of num1/num2 to a variable
// Calculate the remainder and assign it to a variable
// This function will return the string: "(num1) divided by (num2) is (number) with a remainder of (remainder)"

// Problem #3
// Create a function called randomNums that returns a random number from 0 to 1000

// Problem #4
// Create a function called theType that takes in one parameter called: dataType
// This function will return the type of any argument passed into this function

// Problem #5
// Create a function called isItArray that takes in one parameter called: arrayChecker
// This function returns whether the argument passed into this function is an array or not (the function should evaluate to either true or false)

// Problem #6
// Create a function called fifthIndex that takes in a string as a parameter
// This function finds the 5th index of any string passed into this function

// Problem #7
// Create a function called myInitials that takes in two parameters: firstName and lastName
// This function returns the initials of the first and last name

// Problem #8
// Create a function called upperCase that takes in a string as a parameter
// This function returns any strings passed into the function in all uppercase letters

// Problem #9
// Create a function called lastChar that takes in a string as a parameter
// This function returns the last character of any string passed into this function


// Problem #10

// Using this array: let counties = ['Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'India']

// Create a function called lastElement that takes in an array as a parameter
// Find the last element in the array and assign it to a variable
// This function returns the string: 'the last element in the array is (country)'

// Create a function called: favoriteCountry that takes in an array as a parameter
// Add your favorite country at the beginning of the array
// This function returns the string: 'My favorite country is (country)'


// This function will return the initials of the first and last names passed into the function

 /* -------------------------------------------------------------------------- */

// Problem 2

// Create a function called bool that has returns the Boolean of any argument passed into it

 

 

 

// Problem 5

// Create a function called squareRoot that takes in a number as a parameter.

// This function will return the square roof of any number that is passed in as an argument

 


 

// Problem 8

// Create a function called itConcats that takes in 2 parameter that are arrays.

// This function will combine the two arrays passed into this function and return the new combined array

 



 

// Problem 10

// Create a function called removeFirst that takes in an array as a parameter.

// This function removes the first elements from any array that is passed into this function as an argument.