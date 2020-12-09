
// Problem #1

// Find the first non-consecutive number

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// function firstNonConsecutive (arr) {

//   for (let i = 0; i <arr.length-1;i++){
//     if (arr[i + 1] - arr[i] !== 1) {
//       return arr[i + 1];
//     }
   
//   }
//    return null;
    
//     }
      
                   
    

 

// Problem #2

// Can we divide it

// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
// function isDivideBy(number, a, b) {
//     if (number %a === 0 && number % b ===0){
//       return true
//     }else{
//       return false
//     }
//     }
 

// Problem #3

// Short Long Short

// https://www.codewars.com/kata/50654ddff44f800200000007
// function solution(a, b){
//   if(a.length<b.length){
//     return a+b+a
//   }else{
//     return b+a+b
//   }
//  }
 

// Problem #4

// Check the exam

// https://www.codewars.com/kata/5a3dd29055519e23ec000074
// function checkExam(array1, array2) {
//   for (let i = 0;i< array1.length;i++){
//     for (let k = 0;k < array2.length;i++){
//       if(i < k){
//         return 4
//       }else{
//         return -1
//       }
//     }
//   }
//  I gave up on this one took too long

// Problem #5

// Reversed Strings

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// function solution(str){
//     let back = ''
//     for (let i = str.length-1;i >= 0;i--){
//      back+= str[i]
//     }
//     return back
//   }
 

// Problem #6

// Convert number to reversed array of digits

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// function digitize(n) {
//     let str = String(n);
//     return str.split('').map(Number).reverse()