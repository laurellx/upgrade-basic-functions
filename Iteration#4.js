// Calcular un promedio es una tarea extremadamente común.
// Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sumNumbers = 0;

  for (let step in param) {
    sumNumbers += param[step];
  }
  console.log(sumNumbers / param.length);
}
average(numbers);
