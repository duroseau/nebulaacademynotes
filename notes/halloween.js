// // let ten = 10
// // console.log(ten * ten)
// // let eddysdebt = 150
// // eddysdebt = eddysdebt -42
// // console.log(eddysdebt)
// let name = 'eddy'
// const  greeting  = 'hello '
// // console.log(greeting  +  name)
// // console.log(Math.max(6, 9, 15));
// // console.log(Math.min(8, 6) + 300)
// // let theNumber =Number(36)
// // if (!Number.isNaN(theNumber)){
// //     console.log('36 is the square root of' +  theNumber * theNumber);
// // }
// // console.log("Hey,Why didn't you give me a number")
// // let num = 80
// // if (num < 10) {
// //     console.log('small');
// //  } else if (num < 100){
// //      console.log('medium');
// //  } else {
// //      console.log('large')
// //  }
// //  console.log

// // let number = 0;
// // while (number <= 12){
// //     console.log(number);
// //     number = number + 2;
// // }
// // console.log
// // const square = function(x) {
// //     return x * x;
// // }
// console.log(square(12));
// const makeNoise = function() {
//     console.log("pling");

// };
// makeNoise();

//  const power = function(base, exponent) {
//     let result = 1;

// for (let count = 0; count < exponent; count++) {
//     result *= base;

//  }
    

// // return result;
// //  }

// // console.log(power(2, 10));
// let x = 10;
// // if (true) {
// //     let y = 20;
// //     var z = 30;
// //     console.log(x + y + z);
// // }
// // console.log (x + z)
// Given a 2D array of size nXm:

// Create two functions to perform basic direction transformations on the array.

// First Function:
// Create function rotate(arr,dir) that get the array (arr) and a direction (dir=90||-90||180) and returns the array after it has been rotated accordingly.
// For instance:

// Given:

// var arr1= [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// Using rotate(arr1,90) will the array rotated clockwise:


// rotate(arr1,90) = [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3],
// ]
// Using rotate(arr1,-90) will return the array rotated counter-clockwise:


// rotate(arr1,-90)= [
//   [3,6,9],
//   [2,5,8],
//   [1,4,7],
// ]
// Using rotate(arr1,180) will return the array rotated twice (180 degrees):


// rotate(arr1,180)= [
//   [9,8,7],
//   [6,5,4],
//   [3,2,1],
// ]
// Second Function:
// Create function flip(arr,axis) that get the array (arr) and a direction ("v" for vertical, "h" for horizontal) and returns the array after it has been flipped along the spcified axis.
// For instance:

// Given:

// var arr1= [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// Using flip(arr1,"v") will flip the array on a vertical axis and will output:

// flip(arr1,'v') = [
//   [7,8,9],
//   [4,5,6],
//   [1,2,3]
// ]
// Using flip(arr1,"h") will flip the array on a horizontal axis and will output:

// flip(arr1,'h')= [
//   [3,2,1],
//   [6,5,4],
//   [9,8,7]
// ]

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(4, 4) --> 16


function numberz(num1)
function rowWeights(arr) {
    result = [0, 0];
    arr.forEach( (value, index) => result[index%2] += value );
    return result;
  };
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
