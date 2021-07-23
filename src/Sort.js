const tri = (numbers) => {
  numberCounter = countNumber(numbers)
  // D'abord on compte combien de fois un nombre apparait pour avoir la fréquence
  // [{4: 2}, {5: 1}, {8: 3}]

  let sortedNumberCounter = sortNumberCounter(numberCounter)
  // On tri les nombres par fréquence
  // [{8: 3}, {4: 2}, {5: 1}]

  let new_numbers = buildNewFrequencySortedArray(sortedNumberCounter)
  // puis on construit un nouveau tableau trié
  // [8, 8, 8, 4, 4, 5]

  return new_numbers
}

const countNumber = (numbers) => {
  // => numbers == [4]
  let resultat = []

  let listNumber = new Set(numbers)
  // =>Set [4]

  listNumber.forEach(function (number){
    // Une fois, avec number == 4

    let nbNumber = numbers.filter((e) => { return e == number }).length
    // nbNumber == 1

    // {maVariable: maValeur}
    // pas d'utilisation du contenu de maVariable qui est considéré comme le nom de la clef
    // let countedNumber = {number: nbNumber} => ne fonctionne pas !
    let countedNumber = {}
    countedNumber[number] = nbNumber
    // => {4: 1}

    resultat.push(countedNumber)
  })
  
  return resultat
}

const sortNumberCounter = (numberCounter) => {
  return numberCounter.sort(function(a, b) {
    // a == {8: 3}
    // Object.values(a) => [3]
    // Object.keys(a) => [8]
    // 
    let aValue = Object.values(a)[0]
    let bValue = Object.values(b)[0]
    return bValue - aValue
  })
}

const buildNewFrequencySortedArray = (sortedNumberCounter) => {
  let resultat = []
  sortedNumberCounter.forEach(function (x){
    // x == {8: 3}
    let frequency = Object.values(x)[0]
    // 3
    let number = parseInt(Object.keys(x)[0])
    // 8

    for (let i = 0; i < frequency; i++) {
      resultat.push(number)
    }
  })
  return resultat
}