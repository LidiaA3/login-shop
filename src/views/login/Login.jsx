import { useContext, useState } from 'react';
import './Login.scss';
import { productContext } from '../../Layout';

function Login() {

  const setUserIsLogin = useContext(productContext).setUserIsLogin;

  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function validateForm() {
    console.log(userInput);
    console.log(passwordInput);
    if(userInput == 'Nora Dufort' && passwordInput == 'misifu') {
      setUserIsLogin(true);
    }
  }

    return (
      <div className="login">
        <h1>Login</h1>

        <p className='login__text'>Hello! Welcome to the Notch login! To access the website and be able to make purchases you will need to enter the contact details. Be careful, these are hidden! Discover the clues and start shopping.</p>

        <form action="">
          <label htmlFor="user">User:
            <input type="text" id="user" placeholder='Which is my full name?' onChange={(e) => setUserInput(e.target.value)} />
          </label>

          <label htmlFor="password">Password:
            <input type="password" id="password" placeholder='I have a magnific cat!' onChange={(e) => setPasswordInput(e.target.value)} />
          </label>

          <input className='btn' type="sent" defaultValue='Validate' onClick={validateForm} />
        </form>

        <details className="login__popup">
          <summary className='login__popup__summary'>Show more</summary>
          <p>Hi! My name is Nora Dufort. I love cats and books. I have a cat named Misifu that represents my life.</p>
        </details>

      </div>
    )
  }
  
  export default Login