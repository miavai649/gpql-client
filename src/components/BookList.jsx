import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { getBooksQuery } from '../Queries/Queries';
import BookDetails from './BookDetails';



function BookList() {
    const { loading, data, error } = useQuery(getBooksQuery);
    const [bookId, setBookId] = useState('')
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Sorry {error.message}</div>
    }

    const handleBookDetails = (id) => {
        setBookId(id)
    }
    
  return (
    <div>
        <ul id='book-list'>
            {
                data.books.map(book => <li onClick={() => handleBookDetails(book.id)} key={book.id}>{book.name}</li>)
            }
          </ul>
          <BookDetails bookId={bookId}></BookDetails>
    </div>
  )
}

export default BookList