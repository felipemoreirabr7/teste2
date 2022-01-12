import "./styles.css"
// import "../../styles/global.css"
import api from "../../services/api"
import { useEffect, useState } from "react"

import Header from "../../components/header"
import Banner from "../../components/banner"
import Stores from "../../components/stores"
import Products from "../../components/products"
import Footer from "../../components/footer"
import NavBar from "../../components/nav-bar"







const Home = () => {

    const[allProducts, setAllProducts] = useState([]) 
    console.log(allProducts)

    useEffect(() => {
        async function getAllProducts() {
            try{
                const loadProducts = await api.get("show-products")
                const { data } = loadProducts
                
                setAllProducts(data)
            }catch(err){
                alert("Não foi possivel carregar produtos")
            }
        }
        getAllProducts()
    }, [])

    return(


        <>
        <Header />
        <Banner />
        
        

        
        
        <div className="title">
            <span>Mais Vendidos</span>
        </div>
        <div className="show-products">
           
           {allProducts.map(data => (
               <Products 
               key={data.id} 
               url={data.url}
               title={data.title}
               price={data.price}
               id={data.id}
               
               />
           ))}
            
            
           
        </div>

        
        <Footer />
        <NavBar />
        </>
    )
}

export default Home;