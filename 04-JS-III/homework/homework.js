// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  narray = [];
  for (let i = 0; i < array.length; i++) {
    narray[i] = array[i] + 1;
  }
  return narray
}





function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];

  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0;
  for (let i = 0; i < resultadosTest.length; i++) {

    promedio = promedio + resultadosTest[i];
  }
  promedio = promedio / resultadosTest.length;
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //tambien se puede usar la siguiente funcion:
  return Math.max.apply(null, numeros)
  /*let numeroMayor=0;
  for(let i = 0; i < numeros.length;i++){
    if (numeroMayor<numeros[i]){
      numeroMayor = numeros[i];
    }  
    
  }
  return numeroMayor;*/
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let total = 1;
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length > 0) {

    for (var i = 0; i < arguments.length; i++) {
      total = total * arguments[i];
    }

    return total
  }
}



function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador += 1;
    }
  }
  if (contador > 0) {
    return contador;
  } else {
    return "el arreglo no contiene valores mayores a 18"
  }
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana'
  }
  return 'Es dia Laboral'
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var N = n.toString();
  if (Array.from(N[0]) == 9) {
    return true;

  }
  else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let inicio = arreglo[0];
  for (let i = 0; i < arreglo.length; i++) {
    if (inicio !== arreglo[i]) {
      console.log(arreglo[i])
      return false;
    }
  }
  return true;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let array2 = [ 'Marzo', 'Noviembre','Enero'];
  let array3 = [];
  for (let z = 0; z < array2.length; z++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == array2[z]) {
        array3.push(array2[z]);
      }
    }
  }
  if (array3.length < array2.length) {
    return 'No se encontraron los meses pedidos';
  }
  else if (array3.length == array2.length) {
    return array3;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let array2 = [];
  
  for(let i = 0; i<array.length;i++){
    if(array[i]>100 && array[i]<201 ){
      array2.push(array[i])
    }
    
  }
  return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
    let memoria = [];
  let suma = numero;

  for (let i = 0; i < 10; i++) {
    suma += 2;
    if (suma == 10) {
      break;
    } else {
      memoria.push(suma);
    }
    if (suma == i) {
      return 'Se interrumpió la ejecución';
    }
  }
  return memoria;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let memoria = [];
  let suma = numero;

  for (let i = 0; i < 10; i++) {
    if (i === 5){
      continue}
    
    else{
      suma += 2;
      memoria.push(suma);
    }
    
  }
  return memoria;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
