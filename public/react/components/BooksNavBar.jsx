import { Link } from "react-router-dom";
import Logo from "../../PageImages/Logo.png"

function BooksNavBar({ searchQuery, handleSearchChange }) {
    return (
        <>
            <div className="nav-bar">
                <div className="nav-left">
                    <img src={Logo} alt= "Logo" className= "logo" id="navBar-logo" />
                </div>

                <div className="nav-main">
                <Link to="/" id="nav-a">Home Page</Link>
                <Link to="/new-book" id="nav-a">Add Item</Link>
                </div>

                <div className="nav-right">
                <input
                 type="text"
                 value={searchQuery}
                 onChange={handleSearchChange}
                 placeholder="Search"
                 />
                </div>
            </div>
        </>
    )
}

export default BooksNavBar