import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';


(function () {
const firstBookstore = new Bookstore('Library', 'Calle 1');
const sidebar = document.getElementById('sidebar');
const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];
const mainContent = document.getElementById('main-content')

  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      ` <img class="log" src="imgs/icon.avif" alt="">
      <h1 class="title">
        ${firstBookstore.getName}
      </h1>`
    )
  }

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }

  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item">
      <a href="#" id="${index}">
      <img class="icon" src="${index === 0 || index === 1 ? './imgs/eye.png' : './imgs/more.png'}" alt="">
      ${elem}
      </a>
      </li>`
    });
    
    return menuHtml;
  }
  
  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }


  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        // e.stopPropagation(); // esto es para evitar que el evento se extienda/propague al los elementos padres
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu
  
        const { id } = event.target
  
        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }
  

  

  const showBooks = () => {
    console.log('Show Books');
    console.log(firstBookstore.getBooks)
    const books = firstBookstore.getBooks
    createContent(books , 'books')
    
  }
  
  const showComics = () => {
    console.log('Show Comics');
    console.log(firstBookstore.getComics)
    const comics = firstBookstore.getComics
  createContent(comics, 'comics')
  }


  const createContent = (data , type) => {
    mainContent.innerHTML='';
    const div = document.createElement('div')
    div.classList.add('content-wrapper')

    data.forEach( item => {

      const  {title,author,price,stock,year,cartoonist,publisher,volume} = item;
      let detail = `
      <p>title: ${title}</p>
      <p>author:${author} </p>
      <p>price: ${price}</p>
      <p>stock:${stock}</p>
      <p>year:${year} </p>
      `;

      if (type === 'comic') {
        detail+= `
        <p>year:${cartoonist} </p>
        <p>year:${publisher} </p>
        <p>year:${volume} </p>
        `
      }

      let html = `
      <div>
        <h3 class='book-title'>${title}</h3>
     <div class="book-detail">
      ${detail}
      </div>
      </div>
      `
      div.insertAdjacentHTML('beforeend',html);
    })

    mainContent.appendChild(div);
  }

  const addBooks = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
  
    const book = new Book(title, author, price, stock, year);
    firstBookstore.setBooks = book.getinfo();
  }

  const addComics= () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
    const cartoonist = prompt('cartoonist');
    const publisher = prompt('publisher');
    const volume = prompt('volume');

    const comic = new Comic(title, author, price, stock, year,cartoonist, publisher, volume);
    firstBookstore.setComics = comic.getInfo();
  }

  initialize();
})();