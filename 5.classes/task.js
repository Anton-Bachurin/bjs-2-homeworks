class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
  }

  fix() {
	  this.state *= 1.5;	
  }

  set state(amount) {
    if (amount < 0) {
      this._state = 0;
    } else if (amount > 100) {
      this._state = 100;
    } else {
      this._state = amount;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
	  super(author, name, releaseDate, pagesCount);
	  this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
	  super(author, name, releaseDate, pagesCount);
	  this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
	  super(author, name, releaseDate, pagesCount);
	  this.type = "detective";
	}
}

class Library {
	constructor(name) {
	  this.name = name;
	  this.books = [];
	}

	addBook(book) {
	  if (book.state > 30) {
	    this.books.push(book);	
	  }
	}

	findBookBy(type, value) { 
	  const book = this.books.find(book => book[type] === value);

	  if (book) {
	    return book;
	  } 
	    return null;
	}

	giveBookByName(bookName) {
      const isBookHere = this.books.find(book => book.name === bookName);

      if (!isBookHere) {
      	return null;
      } else {
      	const givenBook = isBookHere.filter(elem => elem.name === bookName);
      	return givenBook;
      }    
    }  
}


