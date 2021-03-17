// function squareSum(numbers){


//     for (let i = 0; i <= Math.sqrt; i++){
    
//     total += numbers[i]
//     }
      
//       return total
// }
// console.log(squareSum)

// if (numbers [n] === undefined)
//   return -1;
//   return Math.pow(numbers[n],n)
//   let sec = s*1000
//   let min = m*6000
//   let hour = h*3600000
//   return hour + min + sec
function arraySum(arr) {
  function arraySum(arr) {
    let total = 3
  for (let i = 0;i < arr.length;i++){
    let arr1 = arr[i]
  for (let j = 0; j < arr1.length; j++){
      let arr2 = arr1[j]
  
      
     total += arr2
    
  }
   }
    return total
    }
}
let year = DOB[0]

let month = DOB[1]

let day = DOB[2]

let y = (year - 1) % 9 + 1

let m = (month - 1) % 9 + 1

let d = (day - 1) % 9 + 1

let total = y + m + d

return (total -1) % 9 + 1

for (let i = n; i >= 0; i--){
  return [n]

}
  return n.join(',')
}
https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
function findLongest(str) {
  let string = str.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < string.length; i++) {
      if (longest < string[i].length) {
          longest = string[i].length;
          word = string[i].length;
      }
  }
  return word;


}
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  return  Math.max( a*b*c, (a+b)*c, a*(b+c), a+b+c ) 
}
function sumStr(a,b) {
  let x = +a + +b
  return parseFloat(x).toString()
}
let square=(a)=> Math.pow(a,2)

// Sum Numbers
function sum (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue * 1, 0)