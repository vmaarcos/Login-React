
import imgLogin from "./assets/reactlogo.png"
import "./Styles.css"
import React, { useState } from 'react';


function App() {

  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ") 

  return (
   <div className="container">
     <div className="container-login">
     <div className="wrap-login">
      <form className="login-form">
        <span className="login-form-title">Bem vindo ! </span>
        <span className="login-form-title">
          <img src={imgLogin} alt="Marcos" />                      
        </span>

        <div className="wrap-input">
          <input 
          className={email !== "" ? 'has-val input ' : 'input' }
          type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>

          <span className="focus-input" data-placeholder="Email"></span>   
        </div>
       
        <div className="wrap-input">
          <input 
          className={password !== "" ? 'has-val input ' : 'input' }
          type="password"
           value={password}
           onChange={e => setPassword(e.target.value)}
          ></input>
          <span className="focus-input" data-placeholder="Password"></span>   
        </div>

        <div className="Container-Login-Form-Btn">
          <button className="Login-Form-Btn">Login</button>
        </div>

        <div className="Text-New-Conta" >
          <span className="txt1">Não possui conta? </span>
          <a className="txt2" href="#">Criar Uma Conta</a>
        </div>

      </form>
     </div>
   </div>
   </div>
  );
}
export default App;
