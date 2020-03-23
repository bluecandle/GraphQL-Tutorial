import {people, getById,addPserson, deleteById} from './db'

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getById(id)
    },
    Mutation: {
        addPerson : (_, {name,age}) => addPserson(name,age),
        deleteById :(_, {id}) => deleteById(id)
    }
}

export default resolvers