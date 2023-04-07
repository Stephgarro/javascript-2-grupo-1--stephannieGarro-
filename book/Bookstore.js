//creation of bookstore class

class Bookstore {
  #bookstoreName;
  #address;
  #books;
  #comics;
  constructor(bookstoreName, address) {
    this.#bookstoreName = bookstoreName;
    this.#address = address;
    this.#books = [];
    this.#comics = [];
  }


  // getters
  get getBooks() {
    return this.#books;
  }

  get getComics() {
    return this.#comics;
  }

  get getName() {
    return this.#bookstoreName
  }

  // setters
  set setBookstoreName(name) {
    this.#bookstoreName = name;
  }

  set setAddress(address) {
    this.#address = address;
  }

  set setBooks(book) {
    this.#books.push(book);
  }

  set setComics(comic) {
    this.#comics.push(comic);
  }
}

export default Bookstore;










// class Bookstore{
//   #name;
//   #lastname;
//   #id;
//   #age;
//   #adress;
//   #books;
//   #comics;

//   constructor(name , lastname, id, age, adress) {
//     this.#name = name;
//     this.#lastname = lastname;
//     this.#id = id;
//     this.#age = age;
//     this.#adress = adress;
//     this.#books = [];
//     this.#comics = [];
//   }
//   get getName(){
//     return this.#name;
//   }
//   get getBooks(){
//     return this.#books;
//   }

//   get getComics(){
//     return this.#comics;
//   }

//   set setBooks(book){
//     this.#books.push(book)
//   }

//   set setComics(comic){
//     this.#comics.push(comic)
//   }

// }

// export default Bookstore;