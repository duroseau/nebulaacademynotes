// 11/11 codewars solutions
// https://www.codewars.com/kata/515e271a311df0350d00000f
// // Complete the square sum function 
// // so that it squares each number passed 
// // into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// function squareSum(numbers){
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       total += (numbers[i] * numbers[i]);
//     }
//     return total;
//   }
 

// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// // Write a function named setAlarm which receives two parameters. 
// // The first parameter, employed, is true whenever you are employed 
// // and the second parameter, vacation is true whenever you are on vacation.

// // The function should return true if you are employed
// //  and not on vacation (because these are the circumstances
// //      under which you need to set an alarm). 
// //      It should return false otherwise. Examples:
// function setAlarm(employed, vacation){
//     if (employed  === true && vacation === false){
//       return true
//     }
//   else return false
//   }

 

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// // I'm new to coding and now I want to get the sum of two arrays...
// // actually the sum of all their elements. I'll appreciate for your help.

// // P.S. Each array includes only integer numbers. Output is a number too.
// function arrayPlusArray(arr1, arr2) {
//     let arr3 = arr1.concat(arr2)
//     console.log(arr3)
//     let total = 0
//     for (let i = 0; i <= arr3.length -1; i++){
//       total += arr3[i]
//     }
//       return total
//   }

 

// https://www.codewars.com/kata/55a70521798b14d4750000a4
// // Make a function that will return a greeting statement that uses an 
// // input; your program should return, 
// // "Hello, <name> how are you doing today?".

// // SQL: return results in a column named greeting

// // [Make sure you type the exact thing I wrote or
// //      the program may not execute properly]
// function greet(name){
//     return 'Hello, ' + name + ' how are you doing today?'
//    }

 

// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
// // We want an array, but not just any old array, an array with contents!

// // Write a function that produces an array with the numbers 0 to N-1 in it.

// // For example, the following code will result in an array containing 
// // the numbers 0 to 4:
// const arr = function(N) {
//     let arr1 = [];
//     for (let i = 0; i < N; i++) {
//       a[i] = i;
//     }
//     return arr1;
//   };

 

// https://www.codewars.com/kata/57d814e4950d8489720008db
// // You are given an array with positive numbers and a 
// // non-negative number N. You should find the N-th power
// //  of the element in the array with the index N. If N is
// //   outside of the array, then return -1. 
// //   Don't forget that the first element has the index 0.
// function index(array, n){

//     if (array, [n] !== undefined){
         
//       }else if(n >= -1){
//         return -1
//       }
        

 

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
// // Clock shows h hours, m minutes and s seconds after midnight.

// // Your task is to write a function which returns
// //  the time since midnight in milliseconds.
// function past(h, m, s){
 
 
//     let hours = h*3600000
//    let min = m*60000
//    let sec = s*1000
//  console.log(past)
//  return hours + min + sec
//  }


// //  11.09.20 More Loop Practice
// //  Due November 14, 2020 8:30 AM
// //  Instructions
// //  Read Eloquent JavaScript Chapter 5
 
  
 
//  Part 1
 
  
 
//  let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]
 
  
 
//  Problem # 1
 
//  Using the array above, create a function 
//  that loops through the array and return 
//  a new array with only the odd numbers
// function allOdds(nums){
//     let odds = []
//      for (let i = 0; i < nums.length; i++){
//     if (nums[i] %2 === 1){
//          odds.push(nums[i])
//     }
// }
// return odds
// }
//  console.log(allOdds(numArray))

  
 
//  Problem # 2
 
//  Using the array above, loop through the 
//  array and COUNT the amount of even numbers that are in the array
// function allEvens(nums){
//     let even = []
//      for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 2 === 0){
//          even.push(nums[i])
//     }
// }
// return even
// }
//  console.log(allEvens(numArray))
  
 
//  Problem # 3
 
//  Using the array above, create a function 
//  that loops through the array and adds every 
//  number that is inside the array. Return the total.
// function allNums (num){
//     let total = 0;
//     for (let i = 0; i< num.length; i++){
//             total += num[i]
//     }
//     return total
// }
// console.log(allNums(numArray)) // 215
 
//  Part 2
 
  
 
//  Problem # 4
 
//  Create a function that accepts an array and a searchValue.
//   This function will return true if the searchValue is an element 
//   in the array. Otherwise, it will return false. 
//   (do not use the built in .includes() method. 
//   This function should loop through the array!)
// let arr = ['cars', "bars", "stars", `jars`]
// let arr1 = ['1', '2', '3']
// function tOrF(arr){
//     return arr.every(lang => lang.length >= 2)
// }
// console.log(tOrF(arr)) // true
// console.log(tOrF(arr1)) // false
 
  
 
//  Examples for problem #4 what the function invocation could look like:
 
  
 
//  doesItInclude([40, 7, 8, 23, 43], 23) -> true
 
//  doesItInclude(['kale', 'spinach', 'arugula'], 'iceberg') -> false
 
  
 
//  Part 3
 
  
 
//  Problem # 5
 
//  Create a function that accepts an array.
 
//  This function will return a new array
//   with the elements in reverse order
let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]


//  function backItUp(numArray){
// return numArray.reverse()
//  }
//   console.log(numArray)
 
//  Part 4
 
  
 
//  Problem # 6
 
//  Create a function that takes in a array of numbers.
 
//  This function will return a new array 
//  with number that are NOT divisible by 3
//  function notByThree(arr) { 
//      let total = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 3 > 0){
//             total.push(arr[i])
//         }
//     }
//     return total
// }
// console.log(notByThree(numArray)) //[ 8, 50, 101, 8, 4, 2 ]
 
//  Problem # 7
 
//  Create another function that adds the numbers
//   in the array that are NOT divisible by 3 and return the total
// function byThree(tres){
//     let total = [];
//     for (let i = 0; i < tres.length; i++){
//         if (tres[i] % 3 === 0){
//             total.push(tres[i])
//         }
//     }
//         return total
//     }
   

// console.log(byThree(numArray)) [ 9, 12, 3, 0, 15, 3 ]