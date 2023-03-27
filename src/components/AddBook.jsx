import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../Queries/Queries";

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);
  // console.log("🚀 ~ file: AddBook.jsx:16 ~ AddBook ~ data:", data)

//   console.log(createBook);

//   if (error) {
//     console.log("🚀 ~ file: AddBook.jsx:15 ~ AddBook ~ error:", error.message);
//   }

const [name, setName] = useState('')
const [genre, setGenre] = useState('')
  const [authorId, setauthorId] = useState('')
  


  const displayAuthor = () => {
    if (loading) {
      return <option>Loading author...</option>;
    } else {
      return data.authors.map(author =>
        <option value={author.id} key={author.id}>
          {author.name}
        </option>
      );
    }
  };

  const [addBook, {data:mutatedData, error:mError }] = useMutation(addBookMutation);

  // const handleForm = (e) =>{
  //     e.preventDefault()
  //     const form = e.target;
  //     const addBook = {
  //         name: form.bookName.value,
  //         genre: form.bookGenre.value,
  //         authorId: form.author.value
  //     }
  //     // console.log("🚀 ~ file: AddBook.jsx:31 ~ handleForm ~ addBook:", addBook)
  //     //

  //     createBook(addBook)
  // };

  const handleForm = e => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{query: getBooksQuery}]
    })
    e.target.reset()
  };

  return (
    <div>
      <form onSubmit={handleForm} id="add-book">
        <div className="field">
          <label htmlFor="">Book Name:</label>
          <input onChange={(e) => setName(e.target.value)} name="bookName" type="text" />
        </div>

        <div className="field">
          <label htmlFor="">Genre:</label>
          <input name="bookGenre" type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="">Author:</label>
          <select onChange={(e) => setauthorId(e.target.value)} name="author" id="">
            <option value="">Select author</option>
            {/* {
                            !loading && data.authors.map(author =>  <option key={author.id}>{author.name}</option>)
                        } */}
            {displayAuthor()}
          </select>
        </div>

        <button id="btn">+</button>
      </form>
    </div>
  );
};

export default AddBook;
