// Ejercicios de práctica
// 1. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es par o

function esNumeroPar(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve("El número es par");
    } else {
      reject("El número es impar");
    }
  });
}

esNumeroPar(4)
  .then(resultado => console.log(resultado)) // El número es par.
  .catch(error => console.error(error));

// 2. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es primo o no.

function esNumeroPrimo(numero) {
  return new Promise((resolve, reject) => {
    if (numero < 2) {
      reject("El número debe ser mayor o igual a 2");
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          reject("El número no es primo");
        }
      }
      resolve("El número es primo");
    }
  });
}

esNumeroPrimo(13)
  .then(resultado => console.log(resultado)) // El número es primo.
  .catch(error => console.error(error));