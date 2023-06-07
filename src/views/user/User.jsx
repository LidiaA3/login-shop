import { useContext } from 'react';
import './User.scss';
import { loginShopContext } from '../../Layout';
import Button from '../../components/button/Button';

function User() {

  const userIsLogin = useContext(loginShopContext).userIsLogin;

  if (!userIsLogin) {
    return <div className='user__false'>
      <p className='h3'>Mmm you are not log in</p>
      <Button additionalClasses='user__false__actions' isLink={true} goTo='/login' text='Log in' />
    </div>
  }

    return (
      <div className="user">
        <div className="user__img">
          <img src="/userimg.webp" alt="Imagen de usuario" />
        </div>
        <div className="user__contents">
          <h2 className='h1 color-blue'>Nora Dufort</h2>
          <p>I love cats and books. I have a cat named Misifu that represents my life.</p>
          <p>I love shopping and go out with my friends.</p>
          <div className="user__actions">
            <Button isLink={true} goTo='/' text='Go shopping' />
          </div>
        </div>
      </div>
    )
  }
  
  export default User