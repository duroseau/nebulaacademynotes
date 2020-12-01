
Problem #1

Find the first non-consecutive number

https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

 

Problem #2

Can we divide it

https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
function isDivideBy(number, a, b) {
    if (number %a === 0 && number % b ===0){
      return true
    }else{
      return false
    }
    }
 

Problem #3

Short Long Short

https://www.codewars.com/kata/50654ddff44f800200000007

 

Problem #4

Check the exam

https://www.codewars.com/kata/5a3dd29055519e23ec000074

 

Problem #5

Reversed Strings

https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
    let back = ''
    for (let i = str.length-1;i >= 0;i--){
     back+= str[i]
    }
    return back
  }
 

Problem #6

Convert number to reversed array of digits

https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
    let str = String(n);
    return str.split('').map(Number).reverse()