import { Link, useLocation } from 'react-router-dom';
import './Topbar.scss';
import Button from '../button/Button';
import { useContext } from 'react';
import { loginShopContext } from '../../Layout';

function Topbar(props) {

    const setUserIsLogin = useContext(loginShopContext).setUserIsLogin;
    const location = useLocation().pathname;

    return (
        <div className='topbar'>
            <div className="topbar__logo">
                <img src="/logo.svg" alt="Logo Notch online shop" />
            </div>
            <div className="topbar__items">
                Carrito

                {props.userLogin ? <Button type='ternary' text='Log out' handleClick={() => setUserIsLogin(false)} /> : (location === '/login' ? '' : <Link to='/login'>Log in</Link> )}

                {console.log(location)}
                
                {props.userLogin ? <div className="topbar__user">
                    <p>Hi Nora</p>
                    <Link to='/user'><img src="/userimg.webp" alt="Imagen de usuario" /></Link>
                </div> : ''}

            </div>
        </div>
    );
}

export default Topbar