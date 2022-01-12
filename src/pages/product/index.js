import "./styles.css"



import Header from "../../components/header"

import ProductList from "../../components/product-list"
import Footer from "../../components/footer"
import api from "../../services/api"

import ProductShow from "../../components/prduct-show"
import NavBar from "../../components/nav-bar"

import { useEffect, useState } from "react"

import { useParams } from "react-router"

const Product = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        async function getProduct() {
            try{
                const loadProduct = await api.get(`show-one/${id}`)
                const { data } = loadProduct
                
                setProduct(data)
            }catch(err){
                alert("Não foi possivel carregar produtos")
            }
        }
        getProduct()
    }, [])

    console.log(product)
    return(
        <>
        <Header />
        
        {product.map(data => (
               <ProductShow
               key={data.id} 
               url={data.url}
               title={data.title}
               price={data.price}
               description={data.description} 
               id={data.id}
               
               />
           ))}


        

        <div className="list-products">
            <ProductList />
            
        </div>
        <Footer />
        <NavBar />
        </>
    )
}

export default Product;