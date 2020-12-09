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

 

Switch it up

https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

 

A Wolf in Sheep's Clothing

https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
queue = queue.reverse();
if (queue[0] === 'wolf') return "Pls go away and stop eating my sheep";
for (let i = 0; i < queue.length; i++){
  if (queue[i] === 'wolf') {
    return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
  }
}
}