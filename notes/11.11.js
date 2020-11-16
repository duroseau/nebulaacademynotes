// let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]

// function loopForNested (array) {
//     for (let i = 0; i < array.length; i++){
//         let numElement = array[i]
//         if (Array.isArray(numElement)){
//             for (let j = 0; j < numElement[j]; j++){
//                 let elementInNested = numElement[j]
//                 console.log(elementInNested)
//             }
//         }
//     }
//     return 'is it working!?'
// }

// console.log(loopForNested(nestedArray))
// 2
// 3
// 4
// 8
// 9
// 10
// 13
// is it working!?



// let graph = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// function loopGraph (array){
//     for (let i = 0; i < array.length; i++){
//         let row = array[i]
//         for (let j = 0; j < row.length; j++){
//             let column = row[j]
//             console.log(column)
//         }
//     }
// }
// console.log(loopGraph(graph))
// // 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// using the nestedArray above, log every number in the array and the nested array  

// let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]

// function moreWork(bread){

//     for (let i = 0; i < bread.length; i++){
        
//     let cake = bread[i]
//         if (Array.isArray(cake)){
//     for (let j = 0; j < cake[j]; j++){
//         let pie = cake[j]
//         console.log(pie)
//     }
// }
//     } 
//     return 'done'
//     }  
  
// console.log(moreWork(nestedArray))//=> 2 3 4 8 9 10 13 done

function index(array, n){
    if (array, [n] === undefined){
        return -1;
    }
      
      
      return Math.pow(array[n],n)
    }
    console.log(index(array, n))