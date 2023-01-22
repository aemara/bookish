import { useState } from "react";

const BookDetails = ({ book }: any) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex">
      <img src={book.cover} alt={book.title} className="w-1/4" />
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-medium">{book.title}</h2>
        <p className="text-sm font-medium">By {book.author}</p>
        <p className="text-sm">Published: {book.publishDate}</p>
        <div className="my-4 flex">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e: any) => setQuantity(e.target.value)}
            className="border p-2 mr-2 w-1/12"
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-500 transition text-white p-2 mr-2"
          >
            Add to Cart
          </button>
          <button
            className="bg-indigo-600 hover:bg-indigo-500 transition text-white p-2"
          >
            Add to Wish List
          </button>
        </div>
        <div>
          <h3 className="text-lg font-medium">Description:</h3>
          <p>{book.description}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">About the Author:</h3>
          <p>{book.aboutAuthor}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
