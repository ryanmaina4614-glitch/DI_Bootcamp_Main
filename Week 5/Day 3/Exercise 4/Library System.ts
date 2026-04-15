
// Interface: Book


interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // optional property
}


// Class: Library


class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | string {
    const book = this.books.find((b) => b.isbn === isbn);

    if (!book) {
      return "Book not found";
    }

    return book;
  }

  // Helper method for child class (since books is private)
  protected getAllBooks(): Book[] {
    return this.books;
  }
}

// Class: DigitalLibrary


class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getAllBooks().map((book) => book.title);
  }
}


// Testing the system


const myLibrary = new DigitalLibrary("www.mylibrary.com");

// Add books
myLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "12345",
  publishedYear: 2008,
  genre: "Programming",
});

myLibrary.addBook({
  title: "Atomic Habits",
  author: "James Clear",
  isbn: "67890",
  publishedYear: 2018,
});

// Get book details
console.log(myLibrary.getBookDetails("12345"));
console.log(myLibrary.getBookDetails("67890"));
console.log(myLibrary.getBookDetails("00000")); // not found case

// List all book titles
console.log(myLibrary.listBooks());

// Website (readonly property)
console.log(myLibrary.website);