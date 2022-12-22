const { gql } = require(`apollo-server-express`);

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        studentcontent: [Content]
    }

    type Admin {
        _id: ID
        adminname: String
        email: String
        content: [Content]
    }    

    type Creator {
        _id: ID
        creatorname: String
        email: String
        teachercontent: [Content]
    }

    type Content {
        _id: ID
        title: String
        description: String
        cost: String
        image: String
        video: String
        # creator: [Creator]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        AllContent: [Content]
        # AllUser: User
        getUser: User
        # GetTeacherContent: Creator
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addContent(content: String!): Creator
        saveContent(_id: ID!): User
        removeContent(content: String!): User
    }
    `;

module.exports = typeDefs;