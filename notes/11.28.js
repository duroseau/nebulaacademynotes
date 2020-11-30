const sumNested = arr => {
 
    const flattedAndSum = (total, curr)=>Array.isArray(curr) ? curr.reduce(flattedAndSum, total) : total + curr;
    return arr.reduce(flattedAndSum, 0);
  
  };

  const sequenceSum = (begin, end, step) => 
  
   begin > end ? 0 : begin + sequenceSum(begin + step, end, step)

   function replicate(times, number) {
    if (times<= 0) return [];
   return Array(times).fill(number)
}
function factorial (n) {
    return n>1?n*factorial(n-1):n<0?null:1; 

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
