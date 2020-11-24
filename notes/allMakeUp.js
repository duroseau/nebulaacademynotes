// 10.10.20 String Methods
// Due October 14, 2020 5:00 PM
// Instructions
// Create a new file in your VSCode, copy and paste the problems below and code out the solutions!

// After you're done, add, commit and push your work into GitHub and paste your GitHub link to your code!



// level 0

//     Q0: Declare a string with the value equal to your name

// let name = 'Eddy Duroseau'
// console.log(name)=>Eddy Duroseau

//     Q1: Given the string, 'WE ARE SHOUTING!' log 'we are shouting'
// let action = "WE ARE SHOUTING"
// console.log(action.toLowerCase())=> we are shouting
// level 1

//     Q2: Declare a string and log its length 
// let name = 'Eddy Duroseau'

// console.log(name.length)=> 13
//     Q3: Given the string 'Hello World!', log the 6th character.
// let greeting = 'Hello World'
// console.log(greeting[6])

// level 2

//     Q4: Given the string 'Welcome World?', replace the question mark with an exclamation
// let greeting = 'Welcome World?'
// let newGreeting = greeting.replace('?', '!');=> Welcome World!

// console.log(newGreeting)

// level 3

//     Q5: given any string, log the first and last characters
// let name = 'Manami Ueda'

// console.log(name[0])
// console.log(name[10])
// level 4

//     Q6: given the string 'welcome to my website', what is the character at the 7th index? 
// let greeting = 'welcome to my website'
// console.log(greeting.charAt(7)) => blank space


// You will need to console.log for each problem

// Create a variable and assign the string: "we are software engineers at nebula academy"
// Using the string…
let school = "we are software engineers at nebula academy"
// console.log(school(8))=> t
// Log the index of 'software'
// console.log(school.indexOf('software'))=> 7
// Log the index of 's'
    // console.log(school.indexOf('s'))=> 7
// Log the index of 'web'
// console.log(school.indexOf('w'))=>0
// console.log(school.indexOf('e'))=>1
// console.log(school.indexOf('b'))=>31
// Does the string include 'z'? (log true or false)
// console.log(school.includes('z'))=>false
// Does the string include 'engineer'? (log true or false)
// console.log(school.includes('engineer')); // true
// Split the words in the string into an array
    // console.log(school.split(' '))[ 'we', 'are', 'software', 'engineers', 'at', 'nebula', 'academy' ]
// Extract the word 'software' and log it
//  console.log(school.slice(7,15))=> software
// Extract the word 'academy' and log it
// console.log(school.slice(-7));
// console.log(school.indexOf('academy'));
// console.log(school.slice(36, 46));
// Create a variable and assign the string: "we are learning new string methods"

// Using the string…
let newSchool = "we are learning new string methods"
// Log the length of the string
// console.log(newSchool.length)=> 34
// Log the last character of the string
// console.log(newSchool.length -1)=> 33
// Log the character at index 5
// console.log(newSchool.charAt(5))=> e
// Replace all a's  with a '-'
// console.log(newSchool.replace(/a/g, '-'))=> we -re le-rning new string methods
// Uppercase everything in the string
// console.log(newSchool.toUpperCase())=> WE ARE LEARNING NEW STRING METHODS
// Lowercase everything in the string
// console.log(newSchool.toLocaleLowerCase())=> we are learning new string methods
// Create a new variable with your favorite ice cream flavor
// let desert = 'pistachio Almond'
// console.log('My favorite ice cream flavor is ' + desert)=> My favorite ice cream flavor is pistachio Almond
// Log the string, 'My favorite ice cream flavor is (your favorite ice cream flavor)'