import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  query {
    books {
      id
      name
      genre
    }
  }
`;

export const getAuthorsQuery = gql`
  query {
    authors {
      id
      name
      age
    }
  }
`;

export const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", autherId: "" ){
      id
      name
      genre
    }
  }
`;