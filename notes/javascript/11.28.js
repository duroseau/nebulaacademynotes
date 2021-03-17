const sumNested = arr => {
 
    const flattedAndSum = (total, curr)=>Array.isArray(curr) ? curr.reduce(flattedAndSum, total) : total + curr;
    return arr.reduce(flattedAndSum, 0);
  
  };

  const sequenceSum = (begin, end, step) => 
  
  function sequenceSum(begin, end, step) {
    let sum = 0
    for (let i = begin; i <= end; i += step) {
      sum += i
    }
    return sum
  }

   function replicate(times, number) {
    if (times<= 0) return [];
   return Array(times).fill(number)
}
function factorial (n) {
  function factorial (n) {
    if(n<0){
      return null
    if(n === 1){
      return 1
  } else {
       }     return n*factorial(n-1)
} 
console.log(n) I almost got it
}

    function reverse(n){
      if (n == n)
      return Number(String(n).split("").reverse().join("")) 
        }

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

