
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

// 6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles".



//creation of bookstore class

class Bookstore{
  #name;
  #lastname;
  #id;
  #age;
  #adress;
  #books;
  #comics;

  constructor(name , lastname, id, age, adress) {
    this.#name = name;
    this.#lastname = lastname;
    this.#id = id;
    this.#age = age;
    this.#adress = adress;
    this.#books = [];
    this.#comics = [];
  }
  get getName(){
    return this.#name;
  }
  get getBooks(){
    return this.#books;
  }

  get getComics(){
    return this.#comics;
  }

  set setBooks(book){
    this.#books.push(book)
  }

  set setComics(comic){
    this.#comics.push(comic)
  }

}

//creation of book class 

class Book {
  #title;
  #author;
  #price;
  #stock;
  #year;

  constructor(title, author, price, stock, year){
    this.#title = title;
    this.#author = author;
    this.#price = price ;
    this.#stock= stock;
    this.#year = year;
  }

   getinfo(){
    if (!this.#stock) {
      this.#stock= 'No copies available'
    }
    return {
      title: this.#title,
      author: this.#author,
      price: this.#price,
      stock: this.#stock,
      year: this.#year
    }
  }

  set setStock(stock){
    this.#stock.push(stock)
  }

  set setYear(year){
    this.#year.push(year)
  }
}

// creation of comics class

class Comic extends Book {
  #cartoonist;
  #publisher;
  #volume;

  constructor(title, author, price, stock, year,cartoonist, publisher, volume){
    super(title, author, price, stock, year)
    this.#cartoonist = cartoonist;
    this.#publisher = publisher;
    this.#volume = volume;
  }

  getInfo(){
    const information = super.getinfo()

    return{
      ...information,
    cartoonist: this.#cartoonist,
    publisher: this.#publisher,
    volume: this.#volume

    }
  }
}

// how to create the bookstore
const firstBookstore = new Bookstore ('Coffe and tea','street 5th','')
//console.log(firstBookstore)

// how to create the bookk info

 const book2 = new Book ('Money tree','Robert benz',7200,8,2020)
 const book3 = new Book ('powerfull woman','Crhisty james',1200,2,2022)
 const book4 = new Book ('Happy mind','Kyan mollet',6500,5,2002)
 const book5 = new Book ('Mind and body','Marrie colnes',7500,3,1992)
//console.log(book1.getinfo())        // how to see the book info
//console.log(book2.getinfo())   
//console.log(book3.getinfo())   
//console.log(book4.getinfo())   
//console.log(book5.getinfo())   


 //how to create the comic info 
 
 const Comic2 = new Comic ('Spider-Man','Steve nexim ',2800,4,2011,'mark bond','Jeroge gonder','03')
 const Comic3 = new Comic ('Astérix el Galo','thomas harper ',1800,5,2013,'michaell thomas','James barth','005')
 const Comic4 = new Comic (' Micky Maus','Ryan madrick ',7400,3,2015,'Jou miller','Meredith bam','02')
 const Comic5 = new Comic ('Peanuts','josphet mont ',8200,2,2018,'Shuan woodz','Sophie brown','07')
 //console.log(Comic1.getInfo())       // how to see the comic info
 //console.log(Comic2.getInfo())
 //console.log(Comic3.getInfo())
 //console.log(Comic4.getInfo())
 //console.log(Comic5.getInfo())


 //how to introduce the info to the bookstore 

 firstBookstore.setBooks= book2.getinfo();
 firstBookstore.setBooks= book3.getinfo();
 firstBookstore.setBooks= book4.getinfo();
 firstBookstore.setBooks= book5.getinfo();

 
 firstBookstore.setComics= Comic2.getInfo();
 firstBookstore.setComics= Comic3.getInfo();
 firstBookstore.setComics= Comic4.getInfo();
 firstBookstore.setComics= Comic5.getInfo();

 //how to see the bookstore information 
 //console.log(firstBookstore.getBooks)
//console.log(firstBookstore.getComics)

//how to create html archive since javascript lenguaje 
const secondBookstore = new Bookstore ('Coffe and read','street 5th','')


const addBook = () => {
  const book1 = new Book ('Love lenguajes','Marry mont',5200,5,2010)
  firstBookstore.setBooks= book1.getinfo();
}


const addComic = () => {
  const Comic1 = new Comic ('One piece','jane mollet ',5200,5,2010,'marie mont','Jd brown','001')
  firstBookstore.setComics = Comic1.getInfo();
}

const products = () => {
  console.log('Books')
  console.log(firstBookstore.getBooks)

  console.log('comics')
  console.log(firstBookstore.getComics)
}

// Utilizando los archivos adjuntos debe: 
// Crear una función que se encargué de crear un menu, iterando sobre la lista menu (línea 125)
// Debe generarse un element html tipo ul, y dentro de ese ul un li para cada elemento lista; **Puede ver el ejemplo de lo que debe crear en el html 
// Dicho menu debe insertarse dentro del sidebar del html
const sidebar = document.getElementById('sidebar');

const BookstoreName = () => {
  sidebar.insertAdjacentHTML(
    "afterbegin",
    `<h1 class='title'>${firstBookstore.getName}</h1>
`
  )
}

BookstoreName();


const mainContent = document.getElementById('menu');

const menu = ['Add book', 'Add Comic', 'Show Books', 'Show Comics',];


const BookstoreNav = () => {
  mainContent.insertAdjacentHTML(
    'afterbegin',
    ` <li onclick="addBook()" class="item"><a href="#">${menu[0]}
    </li> 
     <li onclick="addComic()"  class="item"><a href="">${menu[1]}
     </li>
     <li  onclick="products()" class="item"><a href="">${menu[2]}
    </li>
     <li onclick="products()" class="item"><a href="">${menu[3]}
    </li>
    `
  )
}

BookstoreNav();





const Icons = () => {
  mainContent.insertAdjacentHTML(
    'afterbegin',
    `<img class="icon-more icon-more-one" src="imgs/more.png" alt="icon about more">
    <img class="icon-more icon-more-two " src="imgs/more.png" alt="icon about more">
    <img class="icon-more icon-eye" src="imgs/eye.png" alt="icon about eye">
    <img class="icon-more icon-eye-one" src="imgs/eye.png" alt="icon about eye">

    `
  )
}

Icons();




const addBooks = () => {
const book = new book(prompt('Book name'), prompt('Book autthor'),prompt('Book price'),prompt('Book stock'),prompt('Book year') )
firstBookstore.setBooks = book.getinfo();
alert('Enter your book')
}


const addcomics = () => {
  const comic = new comic(prompt('Comic name'), prompt('Comic autthor'),prompt('Comic price'),prompt('Comic stock'),prompt('Comic year'),prompt('Comic cartoonist'),prompt('Comic publisher'),prompt('Comic  volume') )
  firstBookstore.setComics = comic.getInfo();
  alert('Enter your comic')
  }
  


// i tyr to do 3 different ways but i can`t 
//doesn`t work, but can you ckeck it
// const mainContent = document.getElementById('sidebar');
// const bookstoreList = () => {
//   mainContent.classList.add('mainContent');
  
//   mainContent.innerHTML = `
//     <ul>
//       <li><a href="#">Addbok</a></li>
//       <li><a href="#">Enlace 2</a></li>
//       <li><a href="#">Enlace 3</a></li>
//     </ul>
//   `;
  
//   document.body.appendChild(mainContent);
// }

// bookstoreList()


//doesn`t work , but can you check it 
// const mainContent = document.createElement('div');
// mainContent.classList.add('mainContent');

// mainContent.innerHTML = `
//   <ul>
//     <li><a href="#">Enlace 1</a></li>
//     <li><a href="#">Enlace 2</a></li>
//     <li><a href="#">Enlace 3</a></li>
//   </ul>
// `;

// document.body.appendChild(mainContent);


//doesn`t work , but can you check it 
// const sidebar = document.getElementById('sidebar');

// const sidebarContent = () => {
//   sidebar.insertAdjacentHTML(
//     'beforebegin',
//     `
//     <ul>
//       <li><a href="#">addBook</a></li>
//       <li><a href="#">addComic</a></li>
//       <li><a href="#">Show more</a></li>
//     </ul>
//   `
//   )
// }
// sidebar.innerHTML = sidebarContent;




