import { Link } from 'react-router-dom'
import axios from 'axios'
import apiURL from '../api';

function BookDetailCard(props) {
    const { id, title, author, description, price, quantity, genre, imageUrl } = props.bookInfo
    
    const handleDelete = async () => {
        try {
          await axios.delete(`${apiURL}/books/${id}`)
        } catch (error) {
          console.log(error);
        }
      };

    return (
      <>
        <div className="section-name">
      <h1 className=""></h1>
    </div>
            <div className="book-details-container">
                <img src={imageUrl} />
                <div className='book-details-information'>
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Quantity in stock: {quantity}</p>
                <p>Genre: {genre}</p>
                <Link to={`/books`}>
                    <button onClick={handleDelete}>Delete</button>
                </Link>
                <Link to={`/edit-book/${id}`}>
                    <button>Edit</button>
                </Link>
                </div>
        </div>
        </>
    )
}

export default BookDetailCard
