// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
// Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let sumElements = 0;

  for (let step in param) {
    if (typeof param[step] === "number") {
      sumElements += param[step];
    } else if (typeof param[step] === "string") {
      sumElements += param[step].length;
    }
  }
  console.log(sumElements);
}
averageWord(mixedElements);
