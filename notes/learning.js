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
           return answer[answer.length -1] - [answer.answer.length -2