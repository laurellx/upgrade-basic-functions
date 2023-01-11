//Completa la función que tomando dos números como argumento devuelva el más alto.


function nums(numberOne, numberTwo) {

  if (numberOne > numberTwo) {
    return numberOne;
  } else {
      return numberTwo;
    }
  }
let higherNum = nums(5, 8);
console.log(higherNum);
