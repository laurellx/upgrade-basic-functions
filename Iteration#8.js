// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(array) {
  const newArray = [];

  for (let words of array) {
    if (newArray[words]) {
      newArray[words]++;
    } else {
      newArray[words] = 1;
    }
  }
  return newArray;
}
console.log(repeatCounter(counterWords));
