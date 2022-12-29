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

export const getBookQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId ){
      id
      name
      genre
    }
  }
`;