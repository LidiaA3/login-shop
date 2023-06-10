import { Link, useLocation } from 'react-router-dom';
import './Topbar.scss';
import Button from '../button/Button';
import { useContext } from 'react';
import { loginShopContext } from '../../Layout';
import Icon from '../icon/Icon';

function Topbar(props) {

    const setUserIsLogin = useContext(loginShopContext).setUserIsLogin;
    const location = useLocation().pathname;

    function handleGoTop () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='topbar'>
            <div className="topbar__logo">
                <Link onClick={handleGoTop} to='/'><img src="/logo.svg" alt="Logo Notch online shop" /></Link>
            </div>
            <div className="topbar__items">
                <div className="topbar__cart">
                    <Link onClick={handleGoTop} to='/cart'><Icon icon='cart' /></Link>
                    {props.userLogin && <p className='topbar__cart__number'>{props.numberAtCart}</p>}
                </div>

                {props.userLogin ? <Button type='ternary' text='Log out' handleClick={() => setUserIsLogin(false)} /> : (location === '/login' ? '' : <Link onClick={handleGoTop} to='/login'>Log in</Link> )}
                
                {props.userLogin ? <div className="topbar__user">
                    <p>Hi Nora</p>
                    <Link onClick={handleGoTop} to='/user'><img src="/userimg.webp" alt="Imagen de usuario" /></Link>
                </div> : ''}

            </div>
        </div>
    );
}

export default Topbar