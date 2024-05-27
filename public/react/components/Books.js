import React, { useState, useEffect } from "react";
import apiURL from "../api";
import axios from "axios";
import BookCard from "./BookCards";
import { Link } from "react-router-dom"
import BooksNavBar from "./BooksNavBar";

// GET all books
function Books() {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      try {
        const result = await axios.get(`${apiURL}/books`)
        const books = result.data
        setBooks(books)
        setFilteredBooks (result.data)
      } catch (error) {
        console.error("Could not get books:", error);
      }
    }
    getBooks()
  }, [])

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterBooks(event.target.value);
  };

    // Function to filter books based on search query
    const filterBooks = (query) => {
      if (!query) {
        setFilteredBooks(books);
      } else {
        const filtered = books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBooks(filtered);
      }
    };
  
  return (
    <>
      <BooksNavBar 
       searchQuery={searchQuery}
       handleSearchChange={handleSearchChange}
       />
    <div className="books-heading">
      <h1 className="">Books</h1>
      <Link to="/new-book">
          <button id="addBookBtn">Add a Book</button>
      </Link>
    </div>
      <div className="books-container">
        {filteredBooks.map((book, idx) => {
          return <BookCard key={idx} bookInfo={book} />
        })}
      </div>
    </>
  )
} 

export default Books