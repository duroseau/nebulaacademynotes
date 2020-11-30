Problem #1

Maximum product

// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// function adjacentElementsProduct(array) {
//     let largestNumber = []
//         for(let i = 0;i < array.length -1;i++){
//             let currentProduct = array[i]*array[i+1]       
//           largestNumber.push(currentProduct)
//         }
//       return Math.max(...largestNumber)
//   }          

// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

function maxGap (numbers){
    let res=[];
     let arr=numbers.sort((a,b)=>b-a).map((v,i,arr)=>{
     res.push(arr[i+1]-arr[i])
     })
      return Math.abs((res.filter(v=>!isNaN(v)).sort((a,b)=>a-b))[0])
   }
 

// Problem #3

// Nth smallest element

// https://www.codewars.com/kata/5a512f6a80eba857280000fc
function nthSmallest(arr, pos){
    let answer = arr.sort((a, b) => a - b);
     
       return answer[pos -1]
   
   
     }
    
    
      
 

// Problem #4

// repeatStr

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
  
    return s.repeat(n, s)
  }

// Problem #5

// fakeBin

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
function fakeBin(x){
let newStr = "";
for(let i = 0; i<str.length;i++){
  if(Number(str[i])>=5){
    newStr += "1"
  }
  else{
    newStr += "0";
  }
}
return newStr;