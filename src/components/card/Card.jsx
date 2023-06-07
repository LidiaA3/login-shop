import Button from '../button/Button';
import './Card.scss'
/**
 * 
 * @param {img | title | price} props 
 * @returns 
 */

function Card(props) {

    function handleGoTop () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <article className="card">
                <div className="card__img"><img src={props.img} alt={props.title} /></div>
                <div className="card__contents">
                    <h3 className='h5 card__tittle'>{props.title}</h3>
                    <p>{props.price}€</p>
                    <div className="card__buttons">
                        <Button hanleClick={handleGoTop} text='More info' type='secondary' isLink={true} goTo={`/product/${props.productId}`} />
                        <Button handleClick={() => props.handleAddProduct(props.productId)} text='Add cart' />
                    </div>
                </div>
            </article>
        </>
    );
}

export default Card