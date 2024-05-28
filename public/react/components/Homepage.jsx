import { Link } from "react-router-dom";
import HomepageLogo from "../../PageImages/HomepageLogo.jpeg"

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-elements-container">
              <img src={HomepageLogo} alt= "Logo"/>
            <div className="button-container">
                <Link to="/books">
                    <button>Check Inventory</button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default HomePage;