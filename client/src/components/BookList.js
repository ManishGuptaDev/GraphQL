import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selectedBook, setSelectedBook] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ id, name, genre }) => (
          <li
            key={id}
            onClick={(e) => {
              setSelectedBook(id);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedBook} />
    </div>
  );
};

export default BookList;
