// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(4, 4) --> 16
// const areaOrPerimeter = function(l , w) {
//     if (l === w){
//       return l * w
      
//     }else{
//       return (l + l) + (w + w)
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
function generateRange(min, max, step){
    let adding = []
  for (let i = min; i <= max; i+=step){
    adding.push(i)
    
  }
    return adding
    }


Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
function hello(name) {
//     if (name === ''||name === undefined ){
//        return 'Hello, World!'
   
//    }else  
//      name = name.toLowerCase()
//        return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1)+ '!' => got 3 right failed 1

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
// if (n%x === 0 && n%y === 0){


// return true
// }else{
//     return false
// }


You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
lut sum = 0;
for (let i = 0; i < Array.length)
if Arr(i)
sum += arr[i]> 0

return sum


FUNDAMENTALSARRAYSNUMBERS

function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
}