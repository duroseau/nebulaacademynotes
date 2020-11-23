
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
//             console.log((`"${name} is 22 years old"`)"Tim is 22 years old"
//         }
//     }
//     console.log(timsAge(studentObject1))
    //  Using the first studentObject1 above, create a function that console.log(s the string, 'Tim is 22 years old'
    
    //  Problem #2
    // function checkId(Over21){
    //       for (let key in Over21){
    //           let check = key
    //           let idd = object[key].name
    //           let checked = object[key].age
    //           if (object[key].age < 21){
    //        return 'welcome, ' + idd
    //         }else
    //         return 'try again in a couple years'
    //       }
    //     }
          
    //     console.log(studentObject1,studentObject2)=> problem with this one

    //  Create a fucntion that takes in the two objects above, check to see if the person is above the age of 21 or not.
    
    //  if they are 21+, console.log( the string, 'welcome, (name)!'
    
    //  if not, console.log( the string, 'try again in a couple years'
    
    //  Problem #3
    
    //  create a function that console.log(s the keys in an array
    // function titles (arr1){
    //     for (let key in arr1){
    //         let bigTitles = key
    //         console.log(bigTitles)
    //     }
    //     console.log( 'squeeze'
    // }
    // console.log(titles(studentObject1))
    //  create a funciton that console.log( the values in an array
    // function redBull (wings){
    //     for (let key in wings){
          
    //         console.log( Object.values(studentObject1)
    //     }
    // }
    // console.log(redBull(studentObject1))=>[ 'Tim', 1, 22 ]
    //  Problem #4
    
    //  Create a function that deletes the 'id' key key pairs
   
        
    //         delete studentObject1.id
        
    
    // console.log(studentObject1)=>{ name: 'Tim', age: 22 }
    //  Problem #5
    
    //  create a function that takes in the student objects above and their birthdates (come up with their birthdates) as parameters.
    // function adds (day){
    //     for (let key in day){
    //         let bornDate = key
    //         console.log( studentObject1['DOB'] = '11/09/1998' 
    //         console.log( studentObject2['DOB'] = '09/11/2001'
    //     }
    // }
    // console.log(adds(studentObject1,studentObject2))