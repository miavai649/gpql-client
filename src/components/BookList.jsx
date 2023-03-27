import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { getBookQuery } from '../Queries/Queries';



function BookList() {
    const {loading, data, error} = useQuery(getBookQuery);
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Sorry {error.message}</div>
    }
  return (
    <div>
        <ul>
            {
                data.books.map(book => <li key={book.id}>{book.name}</li>)
            }
        </ul>
    </div>
  )
}

export default BookList