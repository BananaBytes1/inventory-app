import axios from 'axios'
import { useState, useEffect } from 'react'
import apiURL from '../api'
import { Link } from 'react-router-dom'
import BookDetailsNavBar from "./BookDetailsNavBar"

function CreateBookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('') 
    const [quantity, setQuantity] = useState('') 
    const [imageUrl, setImageUrl] = useState('')

    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault() //stop the page from auto refreshing
        const requestBody = {
            title,
            author,
            price,
            description,
            genre,
            quantity,
            imageUrl
        }
        //check to see if there are any empty fields
        const isEmptyCheck = Object.values(requestBody).some((property) => (property === ''))
        setSubmitted(true)
        try {
           //check to make sure no field is empty
           if(!isEmptyCheck) {
            await axios.post(`${apiURL}/books/`, requestBody)
            setMessage("Book has been added successfully")
           } else {
            setMessage("Error in creating book, Try again!")
           }
        } catch (error) {
            setMessage("Error in creating book, Try again!")
            console.error(error)
        }
    }

    return(
        <>
            <BookDetailsNavBar />
            <div className="section-name">
      <h1></h1>
    </div>
            <div className='add-book-container'>
                <img src={imageUrl} />
                <div className='add-book-information'>
                <h1>Add Book</h1>    
            <h3>{(submitted) ? message : ""}</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(event) =>{
                            setTitle(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Author:
                    <input
                        type="text"
                        value={author}
                        onChange={(event) =>{
                            setAuthor(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(event) =>{
                            setDescription(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(event) =>{
                            setPrice(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Genre:
                    <input
                        type="text"
                        value={genre}
                        onChange={(event) =>{
                            setGenre(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(event) =>{
                            setQuantity(event.target.value)
                        }}
                    />
                </label>
                <label>
                    ImageURL:
                    <input
                        type="url"
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                        required
                    />
                </label>
                
                <button type="submit">Add</button>
                <Link to='/books'><button>Cancel</button></Link>
                    
                
                
                </form>
                </div>
                </div>
        </>
    )
}

export default CreateBookForm
