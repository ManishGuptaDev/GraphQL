import { useQuery } from "@apollo/client";
import { getAuthors } from '../queries/queries'

const AddBooks = () => {
  const { loading, error, data } = useQuery(getAuthors);

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>loading authors...</option>;
    } else {
      return data.authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ))
    }
  };

  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name:</label>
        <input type={"text"} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type={"text"} />
      </div>

      <div className="field">
        <label>Author</label>
        <select>
          <option>Select author</option>
          {
            displayAuthors()
          }
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBooks;
