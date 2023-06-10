import { useContext, useState } from 'react';
import './Login.scss';
import { loginShopContext } from '../../Layout';
import Button from '../../components/button/Button';
import Alert from '../../components/alert/Alert';

function Login() {

  const userIsLogin = useContext(loginShopContext).userIsLogin;
  const setUserIsLogin = useContext(loginShopContext).setUserIsLogin;

  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [showAlertUser, setShowAlertUser] = useState(false);
  const [showAlertPassword, setShowAlertPassword] = useState(false);

  function validateForm() {
    if(userInput == 'Nora Dufort' && passwordInput == 'Misifu') {
      setUserIsLogin(true);
    } else {
      if(userInput != 'Nora Dufort') {
        setShowAlertUser(true);
      }
      if(passwordInput != 'Misifu') {
        setShowAlertPassword(true);
      }
    }
  }

  if (userIsLogin) {
    return <div className='login__true'>
      <p>You are already login</p>
      <div className="login__true__buttons">
        <Button isLink={true} goTo='/' text='Start shopping' />
        <Button isLink={true} goTo='/user' text='Watch profile' type='secondary' />
      </div>
    </div>
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <p className='login__text'>Hello! Welcome to the Notch login! To access the website and be able to make purchases you will need to enter the contact details. Be careful, these are hidden! Discover the clues and start shopping.</p>

      <form action="">
        <label htmlFor="user">User:
          <input type="text" id="user" placeholder='Which is the user full name?' onChange={(e) => setUserInput(e.target.value)} />
        </label>


        <label htmlFor="password">Password:
          <input type="password" id="password" placeholder='I have a magnific cat!' onChange={(e) => setPasswordInput(e.target.value)} />
        </label>

        <input className='btn' type="sent" defaultValue='Validate' onClick={validateForm} />
      </form>

      <div className="alert">
        {showAlertUser && <Alert text="The user name doesn't match" close={setShowAlertUser} />}
        {showAlertPassword && <Alert text="The password doesn't match" close={setShowAlertPassword} />}
      </div>

      <details className="login__popup">
        <summary className='login__popup__summary'>Show more</summary>
        <p>Hi! My name is Nora Dufort. I love cats and books. I have a cat named Misifu that represents my life.</p>
      </details>

    </div>
  )
}
  
export default Login