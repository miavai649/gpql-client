import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import viteLogo from '/vite.svg'

function App() {

  return (
    <div>
      <h1>Book List</h1>
      <BookList/>
      <AddBook/>
    </div>
  )
}

export default App
