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
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                    <button>Comprar</button>
                </div>
            </article>
        </>
    );
}

export default Card