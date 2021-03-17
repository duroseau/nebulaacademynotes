// Calculate the remainder of 15/2, log the string: 'the remainder of 15/2 is (remainder)'


// Calculate the remainder of 30/2, log the string: 'the remainder of 30/2 is (remainder)'

 

// Write the reasonings for each solution below

 




console.log(Boolean(5 ==='5'))//false => 1 is a 'string' different Data Type
console.log(Boolean(5 !='5'))//false => it is loosely equal
console.log(Boolean(5 !=='5'))//true => it is loosely equal
console.log(Boolean(5==5&&5==6))//false => 5 and 5 are strictly equal to each other
console.log(Boolean(5==5!=5==6))//false => 5 and 5 are strictly equal to each other

console.log(Math.random(Math.ceil( 3/4)))
console.log(Math.random(1.8))
console.log(Math.random(Math.floor( 959)))

console.log(Math.floor(Math.random() * 99))
console.log(Math.random(Math.floor() * 85))
console.log(Math.ceil(Math.random() * 29))


// Log the type of a number
// console.log(typeof 7)=>number

// // Log the type of a string
// console.log(typeof '7')=>string

// // Log the type of NaN
// console.log(typeof 7*-00)=>NaN
 

//Using this array: 
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']; 

 

// Check to see if the array fruits is actually an array
// console.log(Array.isArray(fruits))=>true

// Log the 4th element in the array
// console.log(fruits[3]) =>lemon

// Log the last element in the array
// console.log(fruits[6]) => watermelon

// Log the index of 'peach'
// console.log(fruits.indexOf('peach'))=> 2

// Take out the last element of the array. Log the new array and the last element
// console.log(fruits.pop()) => watermelon

// Add 'banana' to the end of the array. Log the new array and log the element
console.log(fruits.push('banana'))=> 8
console.log(fruits)=>[
    'apple',
    'orange',
    'peach',
    'lemon',
    'plum',
    'grape',
    'watermelon',
    'banana'
  ]