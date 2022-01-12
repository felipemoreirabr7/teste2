import { BrowserRouter as Router, Route, Redirect, BrowserRouter} from "react-router-dom";
import { useState } from "react";

import "./styles/global.css"

import Home from "./pages/home"
import Login from "./pages/login"
import Cart from "./pages/cart"
import Esqueci from "./pages/esqueci-senha"
import Cadastro from "./pages/cadastro"
import Product from "./pages/product"
import CadastroProducts from "./pages/cadastro-produtos"
import Dashboard from "./pages/dashboard";


const Routes = () => {

    const[userId, setUseriD] = useState(localStorage.getItem('token'))
    return (
        <>
        
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/esqueci-senha" component={Esqueci} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/product/:id" component={Product} />

            <Route path="/cadastro-produtos">
                {userId ? <CadastroProducts /> : <Redirect to="/login"/>}            
            </Route>
            {/* <Route path="/cadastro-produtos" component={CadastroProducts} /> */}

            <Route path="/dashboard">
                {userId ? <Dashboard /> : <Redirect to="/login"/>} 
            </Route>

        </Router>
       
        </>
    )
}

export default Routes;
