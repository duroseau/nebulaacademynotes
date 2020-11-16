// let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]

 

// For each problem, use the nested array above and….

 

// Problem #1

 


// Create a function that logs every number inside the array as well as the numbers that are inside the nested arrays.

// Return the string, 'Done!' at the end


// let array = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]

// function time(money){


// for (let i = 0; i < array.length; i++){
//      let  dough = array[i];
//    if (Array.isArray(dough)){
   
//     for (let j = 0; j < dough[j]; j++){
//         let pie = dough[j]
// console.log(dough)
//     }
//     }
// }
// return "Done"
//  }
//  console.log(time(array))=> 4,5,7,8,9,14,15,18 Done


// Problem #2

// Create a function that adds only the ODD numbers inside the NESTED arrays.

// Return the total
let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
function yellow(purple){
    let total = 0;
    for (let i = 0; i < purple.length; i++){
        let prince = purple[i].length
        for (let j = 0; j < prince; j++){
            let raspberryBeret = prince[j]
            console.log(raspberryBeret)
            if (raspberryBeret % 2===1){
                total += raspberryBeret[i][j]
                raspberryBeret++
             
                 
            }
           
            
        }
    }
   
}
       
   

  console.log(yellow(nested))
// Problem #3

// Create a function that logs only the EVEN numbers in the array and in the nested arrays.

// After logging every even number, return, 'Done!'

 

// Part 2

 

let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']
// let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]
 

// For each problem, use the nested array above and….
// console.log(nestedArr.join(','))
// function loopForNested (arr1) {
    
//     for (let i = 0; i < arr1.length; i++){
//         let platform = arr1[i]
//         if (Array.isArray(platform)){
//             for (let j = 0; j < platform[j]; j++){
//                 let dataBase = platform[j]
//                 console.log(dataBase)
//             }
//         }
//     }
//     return 'done!'
// }

// console.log(loopForNested(nestedArr))=> full,stack,node,react,,redux,html,css,sql done


 

   


// Create a function that logs every word in the array and the nested arrays.

// Return 'Done!' at the end

 

// Problem #5

 

// Create a function that adds that word 'nested' to the end of every nested array.

// // Return the new array
// nestedArr.push(['nested'])
// function nested(atEnd){
 
//     for (let i = 0; i < atEnd.length; i++){
//         let back = atEnd[i]
//         if (Array.isArray(back)){   
//             for (let j = 0; j < back[j]; j++){
//                 let allTheWay = back[j]               
//                 console.log(allTheWay[j])
//                 return allTheWay[j]
//             }
           

//         }
//     }
   
//  }
//  console.log(nestedArr)=> nested



// Problem #6

//  function withAnA(firstLetter){
     
//  }

// Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays.

// Return 'Done!' at the end
// nestedArr.includes(/'a'/)
// function hasAnA(firstLetter){
// for (let i = 0; i < firstLetter.length; i++){
//     let alpha = firstLetter[i]
//     for (let j = 0; j < alpha[j]; j++){
//         let letter = alpha[j]
//         console.log(alpha)
//         }
//     }
// }

// console.log(hasAnA(nestedArr))
 

// Problem #7

 

// Create a function that logs every word that has a length of 4 in the array and in the nested arrays.

// Return 'Done!' at the end

