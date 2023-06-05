import './Topbar.scss';

function Topbar(props) {
    return (
        <div className='topbar'>
            <div className="topbar__logo">
                <img src="/logo.svg" alt="Logo Notch online shop" />
            </div>
            <div className="topbar__items">
                Carrito

                {console.log(props)}
                
                {props.userLogin && <div className="topbar__user">
                    <p>Hi Nora</p>
                    <img src="/userimg.webp" alt="Imagen de usuario" />
                </div>}
            </div>
        </div>
    );
}

export default Topbar