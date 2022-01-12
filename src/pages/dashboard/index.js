import "./styles.css"

import Header from "../../components/header"
import NavBar from "../../components/nav-bar"
import { Link } from "react-router-dom"

const Dashboard = ({ history }) => {

    function handlerLogout(){
        localStorage.clear()
        history.push("/login")
    }
 return(
     <div>
         <Header />
         <h1>Minha conta</h1>
         <button onClick={() => handlerLogout()}>Logout</button>
        <Link to="/cadastro-produtos">
            <button>Cadastar Produtos</button>
        </Link>
        <NavBar />
     </div>
     
 )
}

export default Dashboard;