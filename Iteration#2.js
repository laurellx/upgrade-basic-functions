// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let longestWord = "";

  for (let i = 0; i < param.length; i++) {
    const avenger = param[i];

    if (avenger.length > longestWord.length) {
      longestWord = avenger;
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));
