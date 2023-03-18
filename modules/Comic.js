import Book from './Book.js'

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

export default Comic;