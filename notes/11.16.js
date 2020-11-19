let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']

function remote(first){
   
    for (let i = 0; i < first.length; i++){
        let now = first[i]
        if (Array.isArray(now[i])){
            for (let j = 0; j < now.length; j++){
               let then = now[j] 
             
              then.shift(first[j])
               
               
            }
        }
    }
   
return 'Done'
}
console.log(remote(nestedArr))
// using the nested array above (nestedArr), add 's' to every word in the elements inside the array and and in the nested arrays
// function newLetter(news){
// for (let i = 0; i < news.length; i ++){
//     let drop = news[i]
//     if (Array.isArray(drop)){
//         for (let j = 0; j < drop.length; j++){

//         }
//     }
// }
// }