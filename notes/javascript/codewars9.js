12.07.20 CodeWars Problems 9
Due tomorrow at 11:59 PM
Instructions
Quarter of the year

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
  let quarter = month/3;
  return Math.ceil(quarter);
}
 

Multiplication Table

https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
if(n >0) {
  return [n]
 

Enough Space

https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
    if(on+wait <= cap){
      return 0
  }
     return wait + on - cap
  }
  

 

Reversed Sequence

https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = n => {
  let blank = []
  for (let i=n;i>0;i--){
    blank.push(i)
  }
  return blank
};
 

Switch it up

https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

 

A Wolf in Sheep's Clothing

https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
block = block.reverse();
if (block[0] === 'wolf') return "Pls go away and stop eating my sheep";
for (let i = 0; i < block.length; i++){
  if (block[i] === 'wolf') {
    return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
  }
}
// Sum of a sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a
const sequenceSum = (begin, end, step) => {
  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};
// Sum of a nested list
// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018
const sumNested = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + sumNested(currentValue);
    }, 0);
  } else {
    return arr;
  }
};
    
 }
  return total
};
function countSheeps(arrayOfSheep) {
  let count = 0;
 arrayOfSheep.forEach((sheep) => {if (sheep === true) count++;});
 return count;
}
return arrayOfSheep.filter(Boolean).length;
// Count of positives 
// const sequenceSum = (begin, end, step) => {
let sum = 0;

for (let i = begin; i <= end; i += step) {
  sum += i;
}

return sum;
};