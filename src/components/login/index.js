import "./styles.css"

import { VscAccount } from "react-icons/vsc"

const LoginComponent = () =>{
    return(
        <div className="login">
            <div className="account-login">
                <VscAccount />
            </div>
            <div className="email input-login">
                <input type="email" placeholder="Email" />
            </div>
            <div className="senha input-login">
                <input type="password" placeholder="Senha" />
            </div>
            <div className="esqueceu-senha">
                <span>Esqueceu a Senha?</span>
            </div>
            <div className="button-login">
            
                <button>Entrar</button>
            </div>
            
            
        </div>
    )
}

export default LoginComponent;