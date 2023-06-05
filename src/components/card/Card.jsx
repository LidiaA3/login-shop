import Button from '../button/Button';
import './Card.scss'
/**
 * 
 * @param {img | title | price} props 
 * @returns 
 */

function Card(props) {
    return (
        <>
            <article className="card">
                <div className="card__img"><img src={props.img} alt={props.title} /></div>
                <div className="card__contents">
                    <h3 className='h5 card__tittle'>{props.title}</h3>
                    <p>{props.price}€</p>
                    <div className="card__buttons">
                        <Button onClick={() => window.scrollTo({top: 0})} text='More info' type='secondary' isLink={true} goTo={`/product/${props.productId}`} />
                        <Button text='Add cart' />
                    </div>
                </div>
            </article>
        </>
    );
}

export default Card