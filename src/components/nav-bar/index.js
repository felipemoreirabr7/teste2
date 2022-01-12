import "./styles.css"

import { Link } from "react-router-dom";

import { VscAccount } from "react-icons/vsc"
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai"

const NavBar = () => {
    return(
        <div className="nav-container">
            <Link to="/dashboard">
                <VscAccount />
            </Link>
            <Link to="/cart">
                <AiOutlineShoppingCart />
            </Link>
            <Link to="/" >
                <AiOutlineHome />
            </Link>

        </div>
    )
}

export default NavBar;