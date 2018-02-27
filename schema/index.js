const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
  # This is a course in the system
  type Course {
    id: ID!
    title: String!
    # This is the description of the course
    description: String!
    profesor: Profesor
    rating: Float
    comment: Comment
  }

  type Profesor {
    id: ID!
    name: String!
    nationality: String!
    gender: Gender
    courses: [Course]
  }

  enum Gender {
    FEMALE
    MALE
  }

  type Comment {
    id: ID!
    name: String!
    body: String!
  }

  type Query {
    courses: [Course]
    profesors: [Profesor]
    curso(id: Int): Course
    profesor(id: Int): Profesor
  }`;

const schema = makeExecutableSchema({
  typeDefs
});

module.exports = schema;
