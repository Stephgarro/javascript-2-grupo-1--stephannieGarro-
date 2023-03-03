// Mini proyecto: Libreria
// Crear un programa que simule una librería. Debe tener las siguientes características:
// 1. Debe tener una clase Libreria que tenga las siguientes propiedades:
//      1.1 Nombre
//      1.2. Dirección
//      1.3. Libros // lista de libros
//      1.4. Comics // lista de comics
//      1.5. Debe contar un método que permita agregar libros y comics a la librería.

// 2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades: título, autor, precio, cantidad y año.

// 3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades extras: dibujante, editorial, volumen.

// 4. ** Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden modificar la cantidad de libros disponibles, o el año, de igual forma deben ser propiedades privadas
// // ** tener en cuenta que para poder acceder y modificar las propiedades privadas debe usar getters y setters

// 5. Debe haber un método que permita obtener la información completa de un libro o comic, este debe llamarse "getInfo".

//6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles".

// first part
class Libreria {
  constructor(nombre, direccion, libros, comics) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = libros || [];
    this.comics = comics || [];

  }
  agregarlibro(libro) {
    this.libros.push(libro)
  }
  agregarcomic(comic) {
    this.comics.push(comic)
  }
}

const primerlibreria = new Libreria("La Clásica", " 50m al sur del liceo Murillo Alvarado", ['La huerfana', 'ojos de amor', 'padre rico padre pobre','lluvia'], ['Avengers','one piece','Batman','superman'])
//console.log(primerlibreria)

const segundalibreria = new Libreria("Libros y cafe", " 50m al norte  del la escuela lucia  Alvarado", ['Por amor al dinero', 'llovia', ' Enamorados','Viernes 13 '], ['Avengers','Batman','superman'])
//console.log(segundalibreria)

const tercerlibreria = new Libreria("Libreria girasol ", " 500m al oeste del la clnica rodrigues hernandez", ['Arte del dinero', 'corazon fragil ', ' Enamorados','Dinero y poder'], ['Avengers','one piece','superman'])
//console.log(tercerlibreria)

//second part 

class libro {
  #cantidad
  #anio
  constructor(titulo, autor, precio, cantidad, anio) {
    this.titulo = titulo
    this.autor = autor
    this.precio = precio
    this.cantidad = cantidad
    this.anio = anio
  }
  get cantidad() {
    return this.#cantidad
  }
  set cantidad(cantidad) {
    this.#cantidad = cantidad
  }

  get anio() {
    return this.#anio
  }
  set anio(anio) {
    this.#anio = anio
  }


  getinfo() {
    let info = `el titulo del libro es ${this.titulo}`
    if (this.#cantidad <= 0) {
      info = "no hay ejemplares"
    }
    return info
  }
} 

const primerlibro = new libro("Padre rico padre pobre", "steph", 8500, 5, 1995)

//console.log(primerlibro.getinfo())

const segundolibro = new libro ('Por amor al dinero','Lilian bonilla',12800,7,2005)

//console.log(segundolibro)

const tercerlibro = new libro ('Mente millonaria','Albert pom',15300,4,2000)
//console.log(tercerlibro)

const cuartolibro = new libro ('Dinero y poder', 'Amy julians',22800,0,2012)
//console.log(cuartolibro.getinfo())


//thirtd part 
class comic extends libro {
  constructor(título, autor, precio, cantidad, anio, dibujante, editorial, volumen) {
    super(título, autor, precio, cantidad, anio)
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;

  }
  getinfo() {
    let info = `el titulo del comic es ${this.titulo}`
    if (this.cantidad <= 0) {
      info = "no hay ejemplares"
    }
    return info
  }

}

const primermcomic = new comic("Avengers", "Timoti ryan", 7850, 0, 1987, "caroline brown", "Exidizone", 8)
 //console.log(primermcomic.getinfo())

 const segundocomic = new comic ("One piece", "Arnold baez", 10200, 5, 1989, "celine brenden", "Exidizone", 4)
 //console.log(segundocomic.getinfo())

 const tercercomic = new comic ("Batman", "Jane winx", 10200, 10, 1900, "celine brenden", "Gustavo gili", 2)
 //console.log(tercercomic.getinfo())

 const cuartocomic = new comic ("super man ", "mathew ronne", 12200, 6, 1995, "carl jhonson", "Lumen", 5)
 //console.log(cuartocomic)


primerlibro.anio = 69
//console.log(`El anio ahora es ${primerlibro.anio}`)

primerlibro.cantidad = 999
//console.log(`La cantidad ahora es  ${primerlibro.cantidad}`)

segundolibro.cantidad = 7
//console.log(`La cantidad ahora es  ${segundolibro.cantidad}`)

tercercomic.anio = 2020
//console.log(`El anio ahora es ${tercercomic.anio}`)

cuartocomic.cantidad = 12
//console.log(`La cantidad ahora es  ${cuartocomic.cantidad}`)


