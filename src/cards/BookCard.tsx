import React from 'react';

const BookCard = ({ book } : any) => {
  return (
      <div className="bg-white rounded overflow-hidden shadow-lg">
          <img src={book.cover} className="w-full" alt={book.name} />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.title}</div>
              <p className="text-gray-700 text-base">
                  Written by {book.author}
              </p>
          </div>
          <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  ${book.price}
              </span>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to Cart
              </button>
          </div>
      </div>
  );
};

export default BookCard;