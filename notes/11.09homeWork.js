// Problem # 1

// Using the array above, create a function that loops through the array and return a new array with only the odd numbers
let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]
// function allOddNumbers(num){
    
//     for (let i = 0; i <= num.length -1; i++){
     
//         if (num [i] % 2===1){
//     console.log(num [i])
            
//         }
//     }

//     }
        
//         console.log(allOddNumbers(numArray))=> 9 3 101 15 3

/* -------------------------------------------------------------------------- */
// Problem # 2

// Using the array above, loop through the array and COUNT the amount of even numbers that are in the array

// function allEvenNumbers(num){
//     for (let i = 1; i <= num.length -1; i++){

//         if (num [i] % 2===0){
// console.log(num [i])
//         }
    
//     }

// }
// console.log(allEvenNumbers(numArray))=> 12 0 8 50 8 4 2

/* -------------------------------------------------------------------------- */
// Using the array above, create a function that loops through the array 
// and adds every number that is inside the array. Return the total.

// function theSum(add){
    
//     for (let i = 0; i < add.length; i++){
//         total = 0;
//         for (let i = 0; i < add.length; i++){
//             total += add[i]
//         }
//         return total 
//     }

//     }
//     console.log(theSum(numArray)) => 215

/* -------------------------------------------------------------------------- */

// Problem # 4

// Create a function that accepts an array and a searchValue. This function will return true if the searchValue is an element in the array.
//  Otherwise, it will return false. (do not use the built in 
//     .includes() method. This function should loop through the array!)

// function search(num){
//    for (let i = 0; i <= num; i++){
//         console.log(num)
//         if (Array.isArray(num[i])){

//  console.log(num[i])
// }

// console.log(search(numArray))
       
    
    
/* -------------------------------------------------------------------------- */
// Problem # 5

// Create a function that accepts an array.

// This function will return a new array with the elements in reverse order

// function sdrawKcab(backwards){
//     for (let i = 0; i <= backwards.length -1; i++){
// console.log(backwards [i])
//     }

//     for (let i = backwards.length-1; i >= -1; i--){
//         console.log(backwards [i])
//     }

// }

// console.log(sdrawKcab(numArray))=> done this one had to be a nested loop
/* -------------------------------------------------------------------------- */
// Problem # 6

// Create a function that takes in a array of numbers.

// This function will return a new array with number that are NOT divisible by 3
// let numbers = [0, 5, 33, 99, 11]
// function lessThree (num){
//         let total = 0
//         for (let i = 0; i < num.length; i++){
//             if (num[i] % 3 === 0){
//                 continue
//             }
//             total += num[i]
//         }
//         return total 
//     }
//     console.log(lessThree(numbers)) =>//16//
    
//
/* -------------------------------------------------------------------------- */

// Problem # 7

// Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total/
