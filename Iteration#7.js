/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array -
comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función:*/

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

let nameInArray = "Peter";


// function finderName(array, nameToFind) {
//   let exists = false;
//   let position;

//   for (let i = 0; i < array.length; i++) {
//     const nameInArray = array[i];

//     if (nameInArray === nameToFind) {
//       return [true, i];
//     }
//   } return [exists, position];
// }

// let result = finderName(nameFinder, nameInArray);
// console.log(`The result is ${result[0]} ${result[1]}`);


// -------- SAME BUT EXTENDED --------


// function finderName(array, nameToFind) {
//   let exists = false;
//   let position; 

//   for (let index = 0; index < array.length; index++) {
//     const nameInArray = array[index];

//     if (nameInArray === nameToFind) {
//       exists = true;
//       position = index;
//     }
//   } return { exists, position };
// }

// let result = finderName(nameFinder, nameInArray);
// console.log(`Name in the array is ${result.exists} and the position is ${result.position}`);


// -------- WHILE --------


function finderNameWhile(array, elementToCheck) {
  let exists = false;
  let position;

  let index = 0;
  while (exists == false && index < array.length) {
    const elementInArray = array[index];

    if (elementInArray === elementToCheck) {
      exists = true;
      position = index;
    }
    index++;
  }
  return [exists, position];
}

let result = finderNameWhile(nameFinder, nameInArray);
console.log(`Name in the array is ${result[0]} and its position is ${result[1]} `);
