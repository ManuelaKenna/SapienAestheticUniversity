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

// export const ADD_CONTENT = gql`
//   mutation addContent($content: [ID]!) {
//     addContent(content: $content) {
//        content {
//          _id
//         title
//          description
//          cost
//         creator
//       }
//     }
//   }
// `;


export const ADD_ORDER = gql`
  mutation addOrder($content: [ID]!) {
    addOrder(content: $content) {
      purchaseDate
      content {
        title
        description
        cost
        image
        video
        creator {
          creatorname
          email
        }
      }
    }
  }
`;

export const SAVE_CONTENT = gql`
  mutation saveContent($content: SavedContentInput!) {
    saveContent(content: $content) {
      username
      email
      savedContents {
        title
        description
        cost
        image
        video
        creator
      }
    }
  }
`;

export const REMOVE_CONTENT = gql`
   mutation removeContent($contentId: ID!) {
     removeContent(contentId: $contentId) {
        savedContent {
          contentId
          title
          description
          cost 
          creator
       }
     }
   }
`;

