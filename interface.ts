interface Book {
  id: number;
  title: string;
  author: string;
  coAuthor?: string;
  isLoan: boolean;
  getName?: (id: number) => string;
}

const book: Book = {
  id: 1,
  title: "Book",
  author: "yair",
  isLoan: false,
};
const books: Book[] = [];

function getBook(id?: number): Book {
  return { id: 1, title: "Book", author: "yair", isLoan: false };
}

const myBook = getBook();

function createBook(book: Book): Book {
  return book;
}

const newBook = {
  id: 1,
  author: "yair",
  isLoan: false,
  title: "Yair",
  coAuthor: "master",
};

createBook(newBook);
