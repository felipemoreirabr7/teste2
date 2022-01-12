import "./styles.css"

import Header from "../../components/header"

const Esqueci = () => {
    return(
        <>
        <Header />
        <div className="container">
            
                <p>Email para Redefinição de Senha</p>
                <input type="email" placeholder="Email Cadastrado" />
                <button>Redefinir</button>
            
            
        </div>
        </>
    )
}

export default Esqueci;