import { gql } from "@apollo/client";

export const getBooks = gql`
  query {
    books {
      id
      name
      genre
    }
  }
`;

export const getAuthors = gql`
  query {
    authors {
      id
      name
      age
    }
  }
`;
