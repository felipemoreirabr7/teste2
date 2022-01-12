import "./styles.css"

import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header"
import NavBar from "../../components/nav-bar";
import api from "../../services/api"


const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data ={
        email,
        password
    }

    async function handlerLogin(e){
        e.preventDefault()
        try{
            const response = await api.post("login", data)



            const token = response.data.token
            const id = response.data.user._id

            

            localStorage.setItem("token", token)
            localStorage.setItem("id", id)

            
            history.push("/dashboard")
        }catch(error){
            alert("Deu erro")
        }
    }

    return(
        <>
        <Header />
            <div className="container-login">
                <div className="login">
                    <h4>Já é Cadastrado?</h4>
                    <input 
                    type="text" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="links">
                        <Link to="/cadastro">
                            <p>Cadastre-se /   </p>
                        </Link>
                        <Link to="esqueci-senha">
                            <p> Esqueci a Senha</p>
                        </Link>
                    </div>
                    <button onClick={handlerLogin}>Entrar</button>
                </div>
                <div className="cadastre-se">
                    <h4>Cadastre-se</h4>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirme sua Senha" />
                    <input type="text" placeholder="CPF" />
                    <input type="text" placeholder="CEP" />
                    <button>Cadastrar</button>
                </div>
            </div>
            <NavBar />
        </>
    ) 
}

export default Login;