// function numbers(num1, num2){
// if (num1 + num2 === 100){
//     return true
// }else if (num1 + num2 !== 100){
//     return false
// }
// }
// console.log(numbers(51, 50))

// const isEqualTo100 = (a,b) => a === 100 || b === 100;

// console.log(isEqualTo100(100, 0))
// console.log(isEqualTo100(99, 1))
// console.log(numbers(99, 3))

// function areYouPlayingBanjo(name) {
//     if (name.includes('R',)){
//       return name + ' plays banjo'
      
//     }else {
//       return name + ' does not play banjo'
//     }
//       return name;

// function product(n, y){
 

//   return (n + n + y + y)
// }
    


// console.log(product(6, 5))
let animals = {
  kangaroo: {
      name: 'Joey',
      age: 10
  },
  camel: {
      name: 'Cathy',
      age: 2
  },
  cow: {
      name: 'Sean',
      age: 15
  },
  turtle: {
      name: 'Victoria',
      age: 100
  }  
}
function loopAnimals (object){
  for (let key in object){
      let animal = key
      let animalName = object[key].name
      let animalAge = object[key].age
      console.log(`${animalName} the ${animal} is ${animalAge} years old.`)
      // console.log(`${object[key].name} the ${key} is ${object[key].age} years old.`)
      
  }
  return 'Done!'
}
console.log(loopAnimals(animals))

cw7
for (int i = 0; i < n; i++) 
{
  std::cin >> Numbers[i];
}

std::cout << std::endl;

for (int j = 0; j < n - 1; j++) 
{
  if (ProductOutOfTwo(Numbers[j], Numbers[j + 1]) > MaxProduct) 
  {
    MaxProduct = ProductOutOfTwo(Numbers[j], Numbers[j + 1]);
  }
}

std::cout << MaxProduct << std::endl;


function product(input){
    if (toString.call(input) !== "[object Array]")
       return false;
     
            var total   =   1;
     
          for(var i=0;i<input.length;i++){
                  if(isNaN(input[i])){
                    continue;
                  }
                   total   *=  Number(input[i]);
               }
             return total;
           }
           let answer = numbers.sort((a, b) => a - b);
           return answer[answer.length -1] - [answer.answer.length -2  const copy = []
           for (let i=0;i <array.length;i++){
             if (array[i]% i===0){
               copy.push(array[i])
             }
           }  
           return copy


           function points(games) {
            for (let i = 0; i < games.length; i++) {
              if (+games[i][0] > +games[i][2]) {
                result +=3
              } else if (+games[i][0] == +games[i][2]) {
                result += 1
              }
            }
            return result
          }
        }     
        
        function countSheeps(arrayOfSheep) {
          let count = 0;
         arrayOfSheep.forEach((sheep) => {if (sheep === true) count++;});
         return count;
       }
      // Count of positives 
      // const sequenceSum = (begin, end, step) => {
        let sum = 0;
      
        for (let i = begin; i <= end; i += step) {
          sum += i;
        }
      
        return sum;
      };

      function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
       }
    
       var countSheep = function (num){
        let str = "";
      for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
      return str;
    }   

    function rentalCarCost(d) {
      let days = 40
        if ( d >= 7 ) {
        return (days * d)-50;
      }
      else if ( d >= 3 ) {
        return (days * d)-20;
      }
      else {
        return days * d;
      }

      function check(a, x) {
        return a.includes(x)
      }

      function testEven(n) {
        if (n % 2 === 0){
            return true
            }else{
              return false
            }
    }

    var a = "123";

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.every(numbers => yourPoints > classPoints.length)
       }


       function divide(weight){
        return (weight % 2 == 0) && weight > 2;
      }

      function xor(a, b) {
        return a !== b 
      }

      function opposite(number) {
        return (-number)
      }
      class Kata {
        static getVolumeOfCuboid(length, width, height) {
          return length*width*height
        }
      }
      function makeNegative(num) {
        if (num <= 0){
          return num
        }else{
          return (-num)
        }
      }
      function removeChar(str){
        return str.slice(1,-1)
        
        };
        function century(year) {
  
          return Math.ceil(year / 100)
        }

        function parseF(s) {
          const xnum =parseFloat(s)
          if( num>=0){
            return num
          }else return null
        }

        // Print "Hello World!" to the screen
class Solution{
  static main(){
   console.log("Hello World!")
}

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

function monkeyCount(n) {
  var monkeys = [];
  for (i=1; i<=n; i++) {
    monkeys.push(i);
  };
  return monkeys;
 }

 var quote = function(fighter) {
  let boxer = fighter.toLowerCase()
  if (boxer ==='conor mcgregor'){
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
  }else{
    return "I am not impressed by your performance."
  }
};

function stringToArray(string){

	return string.split(' ')

}

function hero(bullets, dragons){
  if (bullets/2 >= dragons){
    return true
  }
    else{
      return false
    }

    function abbrevName(name){
      var nameArray = name.split(" ");
        return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

        