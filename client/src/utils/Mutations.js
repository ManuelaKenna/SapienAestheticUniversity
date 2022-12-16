import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CONTENT = gql`
  mutation addContent($content: [ID]!) {
    addContent(content: $content) {
      content {
        _id
        title
        description
        cost
        creator
        image
      }
    }
  }
`;

export const SAVE_CONTENT = gql`
  mutation saveContent($content: SavedContentInput!) {
    saveContent(content: $content) {
      username
      email
      savedContent {
        title
        description
        cost
        creator
        contentId
        image
      }
    }
  }
`;

export const REMOVE_CONTENT = gql`
  mutation removeContent($contentId: String!) {
    removeContent(contentId: $contentId) {
      username
      email
      savedContent {
        title
        description
        cost 
        creator
        contentId
        image
      }
    }
  }
`;