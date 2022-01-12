import "./styles.css"

const Products = ({ url, title, price, id}) => { 
    return(
        <>
            
            
             
            <div className="product-card">
                <a href={`http://localhost:3000/product/${id}`} >
                    <img src={url} />
                        <p>R$ {price}</p>
                        
                        <span>{title}</span>              
                        
                        
                </a>
            </div>
        
        </>
    )
}

export default Products;