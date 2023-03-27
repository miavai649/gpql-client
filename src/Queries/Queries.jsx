import { gql } from "@apollo/client";

const getAuthorQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const getBookQuery = gql`
    {
        books{
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation AddBook ($name: String!, $genre: String!, $authorId: Id!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`

export {getAuthorQuery, getBookQuery, addBookMutation};