import "./styles.css"

import Header from "../../components/header"
import { useState } from "react"
import api from "../../services/api"


const Cadastro = ({ history }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [cep, setCep] = useState("")

    async function handlerSubmit(){
        

        const data = {
            name,
            email,
            password,
            cnpj,
            cep
        }
            
        
        try{
            await api.post("/register", data)

            history.push("/login")
            //console.log(data)

        }catch(err){
            alert("Não foi possivel cadastrar nova loja")
        }

    }
    return(
        <>
            <Header />
            <div className="container">
                <p>Cadastre-se</p>
                <input type="text" 
                placeholder="Nome Da Loja"
                onChange={e => setName(e.target.value)}
                />
                <input 
                type="email" 
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Senha" 
                onChange={e => setPassword(e.target.value)}
                />
                
                <input 
                type="number" 
                placeholder="CNPJ"
                onChange={e => setCnpj(e.target.value)}
                />
                <input 
                type="number" 
                placeholder="CEP"
                onChenge={e => setCep(e.target.value)}
                />
                
                
                <button onClick={() => handlerSubmit()}>Cadastrar</button>
            </div>
        </>
    )
}

export default Cadastro;