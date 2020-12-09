// Multiple of index

// https://www.codewars.com/kata/5a34b80155519e1a00000009
return answer[answer.length -1] - [answer.answer.length -2  const copy = []
for (let i=0;i <array.length;i++){
  if (array[i]% i===0){
    copy.push(array[i])
  }
}  
return copy

// Convert number to reversed array of digits

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Sum Mixed Array

// https://www.codewars.com/kata/57eaeb9578748ff92a000009
function sumMix(x){
  return sum = x.reduce((a,b) => a + parseFloat(b),0)
}

// Sum of differences in array

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
function sumOfDifferences(arr) {
    return (arr[1]- arr[0]) + (arr[2]-arr[1])

// take the derivative

// https://www.codewars.com/kata/5963c18ecb97be020b0000a2

function derive(coefficient,exponent) {
    let expo = exponent-1
    return `${coefficient*exponent}x^${expo}`
  }
// Total amount of points

// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
    let result = 0;
    for (let i = 0; i < games.length; i++) {
      if (+games[i][0] > +games[i][2]) {
        result +=3
      } else if (+games[i][0] == +games[i][2]) {
        result += 1
      }
    }
    return result
  }

My work