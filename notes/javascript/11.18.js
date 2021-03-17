
// Problem #6
// Find the difference in age 
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

// Problem #7
// Row Weights
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
function rowWeights(array){
    let newArray = []
    let team1 = 0
    let team2 = 0
    for (let i = 0; i < array.length; i++){
      if (i % 2 === 0){
        team1 += array[i]
     }   
        if (i % 2 === 1){
          team2 += array[i]
       } 
      }
        newArray.push(team1,team2) 
    
    return newArray

// Problem #8
// Maximum product
// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// Problem #9
// Maximum gap
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

// Problem #10
// Nth smallest element
// https://www.codewars.com/kata/5a512f6a80eba857280000fc