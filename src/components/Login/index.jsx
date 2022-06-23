import { ImageContent, LoginContainer, LoginContent } from "./styles";

export function Login() {
    return( 
        <LoginContainer>
            <LoginContent>
                <h1>Entre com seu CPF</h1>
                <div>
                <input placeholder="Nome"/>
                </div>
                <div>
                <input placeholder="CPF"/>
                </div>

                <button>Login</button>
            </LoginContent>
        </LoginContainer>


    )
}