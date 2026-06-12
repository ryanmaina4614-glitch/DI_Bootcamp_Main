import { useState } from "react";

// =========================
// Book Type Definition
// =========================

type Book = {
  id: number;
  title: string;
  author: string;
};

// =========================
// Generic List Component
// =========================

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// =========================
// Main Book Application
// =========================

function App() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
    },
  ]);

  const addBook = (): void => {
    const newBook: Book = {
      id: Date.now(),
      title: `New Book ${books.length + 1}`,
      author: `Author ${books.length + 1}`,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book List Application</h1>

      <button onClick={addBook}>Add New Book</button>

      <h2>Available Books</h2>

      <List
        items={books}
        renderItem={(book) => (
          <div>
            <strong>{book.title}</strong>
            <p>Author: {book.author}</p>
          </div>
        )}
      />
    </div>
  );
}

export default App;