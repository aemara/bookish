import BookCard from './cards/BookCard';
import { Link } from 'react-router-dom';
const BookGrid = ({ books } :any) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {books.map((book : any) => (
        <Link to={`/books/${book.id}`}>
          <BookCard key={book.id} book={book} />
        </Link>
      ))}
    </div>
  );
}

export default BookGrid;