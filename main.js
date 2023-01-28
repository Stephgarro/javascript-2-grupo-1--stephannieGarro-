//1. Escriba una function que escriba un número a la inversa
/*let  numero = 53872;

function numero_inverso(numero) {
  let invertir = numero.toString().split("").reverse().join("");
  return Number(invertir);
}

console.log(numero_inverso(numero))*/


//2. Escriba una function que acepte un string como parámetro y 
//convierta cada primer letra de cada palabra en mayúscula

let cadena = 'hi teacher i hope you can understand me'

function palabra_mayuscula(cadena) {
  
  let texto = cadena.split(' ')

  return texto.map(t => t[0].toUpperCase() + t.slice(1)).join(' ');
 
}

console.log(palabra_mayuscula(cadena))