2.14.20 CodeWars Problems 10
Due December 16, 2020 5:30 PM
Instructions
Difference in Age

https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
const differenceInAges = ages => {
    let oldest   = Math.max(...ages)
    let youngest = Math.min(...ages)
  
    return [youngest, oldest, oldest - youngest]
 



https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
    let init = name.replace( /[^A-Z]/g, '' );
    return init[0] + ('.') + init[1]
    }

 

Needle in the hay stack

https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
return 'found the needle at position ' + haystack.indexOf ('needle'

 

Count of positives sum of negatives

https://www.codewars.com/kata/576bb71bbbcf0951d5000044

let sum = 0
for (let i = 1;i <= 10;i++){
  let length = input[i]
  for (let j=input.length;j>10;j++ ){
    sum+=input[j]
  }
}
  return i, sum
 

Remove duplicate

https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
function distinct(a) {
    return a.filter((item, index) => a.indexOf(item) === index);