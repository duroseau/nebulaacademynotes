Problem #1

Larger Product or Sum

https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02

if (array < array + n){
    return 'sum'
   if (array < array * n){
      return 'product'
    }else {
      return 'same'
    }
  }
  

Problem #2

Simple directions reversal

https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca
function solve(arr){
    return 'arr:', arr
 

Problem #3

Life Path Number

https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0

function lifePathNumber(dateOfBirth) {

  let year = DOB[0]

  let month = DOB[1]
  
  let day = DOB[2]
  
  let y = (year - 1) % 9 + 1
  
  let m = (month - 1) % 9 + 1
  
  let d = (day - 1) % 9 + 1
  
  let total = y + m + d
  
  return (total -1) % 9 + 1
Problem #4

Form the Largest

https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e

function maxNumber(n){
    return (''+n).split('').sort((a,b)=>b-a).join('')*1
   }
