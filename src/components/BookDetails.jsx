import { useQuery } from '@apollo/client'
import React from 'react'
import { getBookquery } from '../Queries/Queries'

export default function BookDetails({bookId}) {
    

    const { data, loading } = useQuery(getBookquery, {
        variables: {
            id: bookId
        }
    })

    // console.log(data)

    const displayBookDetails = () => {
        if (data) {
            return (
                <div>
                <h2>{data.book.name}</h2>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <ul className='other-books'>
                    {
                        data.book.author.books.map(book => <li key={book.id}> {book.name} </li>)
                    }
                </ul>
            </div>
           )
    } else {
            return (
                <div><h3>No book selected...</h3></div>
            )
    }
    }

    if (loading) {
        return <div className='book-details'><h3>Loading...</h3></div>
    }

  return (
    <div className='book-details'>
      {displayBookDetails()}
    </div>
  )
}
