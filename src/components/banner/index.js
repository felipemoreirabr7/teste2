import "./styles.css"

import img_banner from "../../assets/banner.PNG"

const Banner = () => {
    return(
        <div className="banner">
            <img src={img_banner} alt="" />
        </div>
    )
}

export default Banner;