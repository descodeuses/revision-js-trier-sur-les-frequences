
const tri = (numbers) => {
  if (numbers.length == 1) {
    return numbers
  }

  numberCounter = countNumber(numbers)
  // numbers.sort
  // {
  //  1 : 1 fois 
  //  2 : 4 fois 
  //  5 : 7 fois
  //}
  return numbers
}

const countNumber = (numbers) => {
  resultat = {}
  
  numbers.forEach(function (number) {
    
    if (resultat[number] >= 0){
      resultat[number] += 1
    } else {
      resultat[number] = 1
    }

  })
  
  return resultat
}