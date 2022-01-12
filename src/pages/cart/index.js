import "./styles.css"

import Header from "../../components/header";
import NavBar from "../../components/nav-bar";
import ProductCart from "../../components/product-cart";

const Cart = () => {
    return (
        <>
            <Header />

            <div className="container-products">
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </div>
            <div className="div-button">
                <button>Finalizar Pedido</button>
            </div>
            <NavBar />
        </>
    )
}

export default Cart;