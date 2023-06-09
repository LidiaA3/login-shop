import { Link } from 'react-router-dom';
import './Button.scss'

function Button(props) {
    return (
        <>
        {
            props.isLink ? 
                <Link onClick={props.handleClick} to={props.goTo} className={`btn linkAsBtn ${props.additionalClasses} ${props.type ? `btn--${props.type}` : ''}`}>{props.text}</Link>
            :
                <button onClick={props.handleClick} className={`btn ${props.additionalClasses} ${props.type ? `btn--${props.type}` : ''}`}>{props.text}</button>

        }
        </>
    );
}

export default Button