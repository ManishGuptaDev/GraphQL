import { useQuery } from "@apollo/client";
import { getBooksQuery } from '../queries/queries'

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ id, name, genre }) => (
          <li key={id}>
            Book Name: {name} || genre: {genre} || id: {id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
