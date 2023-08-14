'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1];
  let i = 2;
  while (num > 1) {
    if (num % i === 0) {
      factores.push(i)
      num = num / i
    }
    else {
      i++
    }
  } return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) { // j esta adelantada por uno de i.
      if (array[i] > array[j]) { //si el valor en el que esta posicionado i es mayor a j.
        let aux = array[i] //ese i  que es un valor mayor sale a una var aux.
        array[i] = array[j] //el valor de jota que es menor debe moverse a la posición de i.
        array[j] = aux //el valor mayor que fue retirado en la var aux se coloca en la posición de j.
      }
    }
  }
  return array;
  //un while con un for anidado es mas eficiente para este ejercicio.
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) { //empieza en 1 para poder comparar.
    let j = i - 1 //va a ir atrás de i.
    let x = array[i]
    while (j >= 0 && x < array[j]) { //mientras j es mayor o igual a cero pasamos a comprobar si el número que se saco ¿es menor que j?
      array[j + 1] = array[j] //si el valor de x es menor a j, en la posición siguiente a jota se pone lo que hay en jota.
      j-- // j tiene que ir para atras dos lugares porque tiene que comparar también con los de atrás por si encuentra otro número menor.
    }
    array[j + 1] = x //si un número es mayor a jota se coloca en la posición siguiente a j.
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let minimo = i; //empieza con el primer valor, mínimo sera el índice del elemento más pequeño encontrado.

    for (let j = i + 1; j < array.length; j++) { //En cada iteración de este 2do for, comparar el elemento en el índice j con el elemento en el índice minimo.
      if (array[j] < array[minimo]) {
        minimo = j //Si el elemento en el índice j es menor que el elemento en el índice mínimo, actualizar minimo con el valor de j.
      }
    }
    if (i !== minimo) { //verificar si el índice i es diferente del índice minimo. Si son diferentes, significa que hemos encontrado un elemento más pequeño y necesitamos intercambiarlo con el elemento en el índice i.
      let aux = array[i]
      array[i] = array[minimo]
      array[minimo] = aux //donde estaba el mínimo mandamos al valor que esta en auxiliar.
    }
  } return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
