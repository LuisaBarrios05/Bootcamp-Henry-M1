'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array//caso base

  let primerPivote = Math.floor(Math.random() * array.length)
  let pivote = array[primerPivote]
  let menores = []
  let mayores = []

  for(let i = 0; i < array.length; i++){
    if( i !== primerPivote){
      if( array[i] < pivote){
      menores.push(array[i])
    }
    else{
      mayores.push(array[i])
    }
    } 
  }
  let menoresOrdenados = quickSort(menores);
  let mayoresOrdenados = quickSort(mayores);
  array = menoresOrdenados.concat([pivote]).concat(mayoresOrdenados)
  return array;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array//caso corte de recursión
  
  const mitad = Math.floor(array.length / 2)
  let left = array.slice(0, mitad)//el array izq va de 0 hasta la mitad.
  let right = array.slice(mitad)//el array va desde la mitad y cómo no indica hasta donde, va hasta el final.

  array = []//uso el mismo espacio en memoria, el mismo arrat que tenia a los elementos inicialmente pero ahora vacío.

  left = mergeSort(left)//empieza la recursión del array izq.
  right = mergeSort(right)

  while (left.length && right.length) {//¿hay valores en el lado izquierdo? ¿hay valores en el lado derecho?
    if (left[0] < right[0]) {//si el valor izquierdo es menor al derecho
      array.push(left.shift())//lo saco y lo pusheo
    }
    else array.push(right.shift())//si el valor izquierdo es mayor al izquierdo pushea el valor derecho al array 
  }

  array = array.concat(left, right)//concatena los dos array

  return array;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
