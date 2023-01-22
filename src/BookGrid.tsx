import BookCard from './cards/BookCard';

const BookGrid = ({ books } :any) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {books.map((book : any) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;