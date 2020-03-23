import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;

// schema 에서 어떤 동작들이 있는지 정의한 후에 (Query, Mutation, Subscription 안에)
// 각각 동작이 실제로 어떻게 동작하는지, 로직을 써놓은 곳이다.
// query.ctrl 정도로 생각하면 되겠다.
