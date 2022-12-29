import { useQuery, gql } from '@apollo/client';

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
        <li>Book Name</li>
      </ul>
    </div>
  )
}

export default BookList;
