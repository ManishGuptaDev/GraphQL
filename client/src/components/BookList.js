import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      id
      name
      genre
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ id, name, genre }) => (
          <li>
            Book Name: {name} || genre: {genre} || id: {id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
