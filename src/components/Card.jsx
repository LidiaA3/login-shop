/**
 * 
 * @param {img | title | price} props 
 * @returns 
 */

function Card(props) {
    return (
        <>
            <article className="card">
                <div className="card__img">{props.img}</div>
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