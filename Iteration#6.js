// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

// function removeDuplicates(array) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     let exists = false;
//     for (let x = 0; x < newArray.length; x++) {
//       const duplicated = newArray[x];

//       if (duplicated == element) {
//         exists = true;
//       }
//     }
//     if (exists == false) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(removeDuplicates(duplicates));

// -------- SPLICE --------

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     for (let x = i + 1; x < array.length; ) {
//       const duplicated = array[x];
//       if (element === duplicated) {
//         array.splice(x, 1);
//       } else {
//         x++;
//       }
//     }
//   }

//   return array;
// }
// console.log(removeDuplicates(duplicates));

// -------- COUNTER --------

function removeDuplicates(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    let count = 0;
    for (let x = 0; x < newArray.length; ) {
      const duplicated = newArray[x];

      if (duplicated == element) {
        count++;
        break;
      } else {
        x++;
      }
    }
    if (count == 0) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(removeDuplicates(duplicates));
