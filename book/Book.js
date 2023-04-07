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

export default Book;