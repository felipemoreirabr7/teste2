import "./styles.css"


import { RiAccountCircleLine } from "react-icons/ri"
import { BiCart, BiHomeAlt } from "react-icons/bi"

import { Link } from "react-router-dom"

const SideBottom = () => {
    return(
        <div className="container-bottom">
            <div className="account icon">
                <Link to="/login">
                    <RiAccountCircleLine />
                </Link>
            </div>
            <div className="favorite icon">
                <Link to="/">
                    <BiHomeAlt />
                </Link>
            </div>
            <div className="cart icon">
                <Link to="/cart">
                    <BiCart />
                </Link>
            </div>
            
        </div>
    )
}

export default SideBottom;