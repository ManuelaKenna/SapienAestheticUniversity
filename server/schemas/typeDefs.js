const { gql } = require(`apollo-server-express`);

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        content: [Content]
    }

    type Admin {
        _id: ID
        username: String
        email: String
        content: [Content]
    }    

    type Creator {
        _id: ID
        username: String
        email: String
        content: [Content]
    }

    type Content {
        _id: ID
        title: String
        description: String
        cost: Float
        creator: Creator
        image: String
        quantity: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        Content: Content
        User: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addContent(content: String!): Auth
        saveContent(content: String!): Content
        removeContent(content: String!): Auth
    }
    `;

module.exports = typeDefs;