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
                {props.showAmount && <div className="card__bullet">{props.amount}</div>}
                <div className="card__img"><img src={props.img} alt={props.title} /></div>
                <div className="card__contents">
                    <h3 className='h5 card__tittle'>{props.title}</h3>
                    <p className='card__price'>{props.price.toFixed(2)}€</p>
                    <div className="card__buttons">
                        <Button handleClick={handleGoTop} text='More info' type='secondary' isLink={true} goTo={`/product/${props.productId}`} />
                        <Button handleClick={() => props.handleAddProduct(props.productId)} text='Add cart' />
                    </div>
                    {props.showExtraButtons && <div className="card__extraButtons">
                        <Button additionalClasses='btn--full' handleClick={() => props.handleDeleteProduct(props.productId)} text='Delete product' type='secondary' />
                    </div>}
                </div>
            </article>
        </>
    );
}

export default Card