
let studentObject1 = {

    name: 'Tim',
    
    id: 1,
    
    age: 22
    
    }
    
    let studentObject2 = {
    
    name: 'Lisa',
    
    id: 2,
    
    age: 19
    
    }


    // problem #1
//  function timsAge (object){
//         for (let key in object){
//            let name = object.name
//             return(`"${name} is 22 years old"`)"Tim is 22 years old"
//         }
//     }
//     returntimsAge(studentObject1))
    //  Using the first studentObject1 above, create a function that returns the string, 'Tim is 22 years old'
    
    //  Problem #2
    function checkId(Over21){
          for (let key in Over21){
              let name = key
              let idd = Over21[key]
              let checked = Over21.age
              if (checked >= 21){
           return `welcome,  ${idd}`
            }else
            return'try again in a couple years'
          }
        }
          
       console.log(studentObject1)

    //  Create a fucntion that takes in the two objects above, check to see if the person is above the age of 21 or not.
    
    //  if they are 21+, return the string, 'welcome, (name)!'
    
    //  if not, return the string, 'try again in a couple years'
    
    //  Problem #3
    
    //  create a function that returns the keys in an array
    // function titles (arr1){
    //     for (let key in arr1){
    //         let bigTitles = key
    //         returnbigTitles)
    //     }
    //     return'squeeze')
    // }
    // returntitles(studentObject1))
    //  create a funciton that return the values in an array
    // function redBull (wings){
    //     for (let key in wings){
          
    //         return Object.values(studentObject1))
    //     }
    // }
    // returnredBull(studentObject1))
    //  Problem #4
    
    //  Create a function that deletes the 'id' key key pairs
   
        
    //         delete studentObject1.id
        
    
    // returnstudentObject1)=>{ name: 'Tim', age: 22 }
    //  Problem #5
    
    //  create a function that takes in the student objects above and their birthdates (come up with their birthdates) as parameters.
    // function adds (day){
    //     for (let key in day){
    //         let bornDate = key
    //         return studentObject1['DOB'] = '11/09/1998' 
    //         return studentObject2['DOB'] = '09/11/2001'
    //     }
    // }
    // returnadds(studentObject1,studentObject2))