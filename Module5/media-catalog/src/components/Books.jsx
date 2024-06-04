import React, { useState, useEffect } from "react";
import AddBookForm from "./AddBookForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Book from "./Book";


export default function Books() {

    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false)
    
    const [author, setAuthors] = useState([])

    const [books, setBooks] = useState([{
        name:"",
        releaseYear:0,
        img:"",
        rating:0,
        authorId:"",
        completed:false,

    }])

    function getBooks() {
        axios.get("/api/books")
            .then(res => setBooks(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addBooks(newBook) {
        axios.post(`/api/books`, newBook)
            .then(res => {
                setBooks(prevBooks => [...prevBooks, res.data])
            })
            .catch(err => console.log(err))
            console.log(newBook)
    }


    function deleteBook(bookId){
        axios.delete(`/api/books/${bookId}`)
            .then(res => {
                setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId))
            })
            .catch(err => console.log(err))
    }

    function editBook(updates, bookId){
        axios.put(`/api/books/${bookId}`, updates)
        // console.log works. changing to make state update
        .then(res => {
            setBooks(prevBooks => prevBooks.map(book => book._id !== bookId ? book : res.data))
        })
        .catch(err => console.log(err))
    }

    function getAuthors() {
        axios.get("/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleFilterTwo(e) {
        if(e.target.value === "reset"){
            getBooks()
        } else {
        axios.get(`/api/books/search/authorId?authorId=${e.target.value}`)
            .then(res => setBooks(res.data))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getBooks(),
        getAuthors()
    },[])



    return(

        <div className="game--container">
          { !toggle ? 
          <>
            <button onClick={() => setToggle(prevToggle => !prevToggle)}>Add New Book</button>
          </>
          :
          <>
            <AddBookForm 
            submit = {addBooks}
            btnText = "Add Book"/>
          </>


          }
 

        <select onChange={handleFilterTwo} className='filter--form'>
            <option value="reset">Sort by Author</option>
            {author.map(auth => 
                <option
                    value={auth._id}
    
                >
                    {auth.name}
                </option>
               ) }
            

        </select>

        {books.map(book => 
                <Book 
                    {...book}
                    key={book.name}

                    // passing down functions as a prop
                    deleteBook = {deleteBook}
                    editBook = {editBook}
                />)}
        </div>
    )
}