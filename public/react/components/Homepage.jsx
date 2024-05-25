import { Link } from "react-router-dom";
import Logo from "../../PageImages/Logo.png"
import Background from "../../PageImages/books.jpeg"

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="logo-container">
              <img src={Logo} alt= "Logo" className= "logo" />
            </div>
            <div className="homepageImg-container">
            <img src={Background} className= "background"/>
            <div className="text-container">
                <h2>Ink & Pages</h2>
                <h1>Bookstore</h1>
                <Link to="/books">
                    <button>Check Inventory</button>
                </Link>
            </div>
            </div>

        </div>
    );
}

export default HomePage;