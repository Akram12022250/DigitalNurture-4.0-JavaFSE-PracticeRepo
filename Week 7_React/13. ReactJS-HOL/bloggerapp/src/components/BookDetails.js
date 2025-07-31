import React from 'react';

const books = [
  { id: 1, title: 'React for Beginners', author: 'Krish', price: 500 },
  { id: 2, title: 'Advanced React', author: 'Shan', price: 800 },
  { id: 3, title: 'JS Essentials', author: 'Megha', price: 450 },
];

const BookDetails = () => {
  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} — ₹{book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
