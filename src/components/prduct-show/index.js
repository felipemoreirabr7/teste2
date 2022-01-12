import "./styles.css"

import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductShow = ({ url, title, price, description}) => {
    return(
        <>
            <div className="container-product"> 
                <div className="section-img">
                    <img src={url} />
                </div>
                <div className="section-info">
                    <div className="title">
                        <span>{title}</span>
                    </div>
                    <div className="price">
                        <h3>R$ {price}</h3>
                        <p>em <b>12 x R$ {Math.round(price / 12)},00</b></p>
                    </div>

                    <div className="calculo-frete">
                        <b>Calcular Frete</b>
                        <input type="number" placeholder="CEP" />
                        <button><AiOutlineSearch /></button>
                    </div>

                    <div className="tamanhos-container">
                        <span>Tamanhos:</span>
                        <div className="tamanho">
                            <button>56</button>
                            <button>58</button>
                            <button>60</button>
                            <button>62</button>
                        </div>
                    </div>

                    <div className="comprar">
                        <Link to="/cart">
                            <button>+ Adicionar ao Carrinho</button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="section-description">
                <h2>Descrição</h2>
                <p>{description}</p>
            </div>
            <div className="info-product">
                <p>Marca: Pralana</p>
                <p>Modelo: 30x</p>
                <p>Cor: Café</p>
                <p>Material: lã</p>
            </div>
        </>
    )
}

export default ProductShow;