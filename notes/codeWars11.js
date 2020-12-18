structions
What is between?

https://www.codewars.com/kata/55ecd718f46fba02e5000029

function between(a, b) {
  let c = []
   for (let i=a;i<=b;i++){
     c.push(i)
   
     
   }
  return c
  }
 

Tip Calculator

https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
    console.log(amount, rating)
  if (rating == 'Excellent'){
    return Math.max(amount*.20)
  }else if(rating == 'good'){
    return Math.ceil(amount*.10)
  }else if(rating == 'Great'){
    return Math.max(amount*.15)
  }else if(rating =='poor'){
    return Math.ceil(amount*.05)
  }else if(rating=='Terrible'){
    return amount*0
  }
  {
    return 'Rating not recognised'
  }
    
  }
    
 

Draw Stairs

https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
function drawStairs(n) {
    for (let i = 1; i <= n; i++) {
        let step = i;
        for(let j = 1; j <= n + step; j++) {
//             process.stdout.write(' ');
        }
        for(let j = 1; j <= step; j++) {
            process.stdout.write('I');
        }
        process.stdout.write('\n');
      step+= n  
    }
return n
}


 

Remove String Spaces

https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x){
    return x.replace(/\s/g, '')
    }
 

LeetCode Problem: