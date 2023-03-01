//1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación.
//Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.
//2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición, departamento, ingreso.
//Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado,
//3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir un parámetro llamado lenguajes (tiene que ser un array de objetos): debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100).
//Agregar un método se llame lenguajeDominado y que imprima el lenguaje que domina el desarrollador:
//el lenguaje que domina depende del valor que tenga en la propiedad conocimiento, de manera que se imprimar le lenguaje con mayor valor numérico
//Para el punto 3: Agregar un método que se llame agregarLenguaje para agregar un nuevo lenguaje al array de lenguajes.

class Persona {
  constructor(nombre, apellido, id, edad, ubicacion ){
    this.nombre= nombre;
    this.apellido= apellido;
    this.id = id ;
    this.edad = edad;
    this.ubicacion = ubicacion;
  }

 saludar(){
  console.log(`Hello my name is ${this.nombre} ${this.apellido}`)
 }


}

const carlos = new Persona ('carlos', 'Mora', '1997-10-22', 45, 'san jose' )
//console.log(carlos.saludar())

const mario= new Persona ('mario', 'ramirez')
//console.log(mario.saludar())

class Empleado extends Persona  {
 constructor(nombre,apellido,id,edad,ubicacion,sueldo,pocision,departamento,ingreso){
  super(nombre,apellido,id,edad,ubicacion)
  this.sueldo= sueldo;
  this.pocision= pocision;
  this.departamento=departamento;
  this.ingreso= ingreso;
 }

 get getimprimirSueldo(){
  return `El sueldo anual de ${this.nombre} ${this.apellido} es de  ${this.sueldo} `
 }
}
const roberto = new Empleado ('Roberto','Rojas','002','27', 'santa ana','$25000','Manager','Ti','enero')
//console.log(roberto.getimprimirSueldo);



class Desarrollador extends Empleado (){
  constructor(nombre,apellido,id,edad,ubicacion,sueldo,posicion,departamento,ingreso,lenguajes){
    super(nombre,apellido,id,edad,ubicacion,sueldo,posicion,departamento,ingreso,lenguajes),
    this.lenguajes=lenguajes;
    const lenguajeob= {nombreLenguaje, nivel}
  }
  
  lenguajeDominado(){
    if (this.lenguajes.lenguajes <= 60 , 'basico') {
      
    }else if (this.lenguajes.lenguajes >= 70, 'intermedio') {
      
    } else ('avanzado')
  }


}

const desarrollador1 = new Desarrollador ('minor','vargas'['javascript', 65])
console.log(desarrollador1.lenguajeDominado())