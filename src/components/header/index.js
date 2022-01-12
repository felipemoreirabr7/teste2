import "./styles.css"

import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="header-container">
            <Link to="/">
                <h1>Nossa Loja</h1>
            </Link>
            
        </div>
    )
}

export default Header;