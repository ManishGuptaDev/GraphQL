import React, { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from '../queries/queries'

const AddBooks = () => {

  const { loading, error, data } = useQuery(getAuthorsQuery);
   // Pass mutation to useMutation
  const [mutateFunction, { mutateData, mutateLoading, mutateError }] = useMutation(addBookMutation);

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>loading authors...</option>;
    } else {
      return data.authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ))
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, genre, authorId)
    mutateFunction();
  }

  return (
    <form id="add-book" onSubmit={onSubmit}>
      <div className="field">
        <label>Book Name:</label>
        <input type={"text"} value={name}  onChange={e => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type={"text"} value={genre}  onChange={e => setGenre(e.target.value)}  />
      </div>

      <div className="field">
        <label>Author</label>
        <select onChange={e => setAuthorId(e.target.value)}>
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
