import "./styles.css"

import { useState } from "react"

import Header from "../../components/header"
import api from "../../services/api"



const Cadastro = ({ history }) => {

    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    

    async function  handlerSubmit(){
        
        //console.log(url, title, price, description)
        const data = {
            url, 
            title, 
            price, 
            description
        }
            
        
        
        try{
            await api.post("/create-product", data)
            
            
            console.log(data)
            history.push("/")
        }catch(err){
            alert("Não foi possivel cadastrar produtos")
        }
    }

    return(
        <>
            <Header />
            <div className="container-create-products">
                <h2>Cadastro de Produtos</h2>
                <input 
                type="text" 
                placeholder="URL imagem anuncio"
                value={url}
                onChange={e => setUrl(e.target.value)}
                />

                <input 
                type="text" 
                placeholder="Titulo do anuncio"
                value={title}
                onChange={e => setTitle(e.target.value)} 
                />

                <input 
                type="number" 
                placeholder="Preço"
                value={price}
                onChange={e => setPrice(e.target.value)}
                />

                <textarea  cols="30" rows="10" 
                placeholder="Descrição do anuncio..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                ></textarea>
               
                <button onClick={() => handlerSubmit()}>Cadastrar</button>
                
                
                
            </div>
        </>
    )
}

export default Cadastro;