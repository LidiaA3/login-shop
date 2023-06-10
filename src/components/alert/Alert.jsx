import './Alert.scss';

function Alert (props) {
    setTimeout(() => {
        props.close(false);
    }, 5000);

    return (
        <div className="alert__item">
            {props.text}
            <span onClick={() => props.close(false)} className="alert__closeBtn">&times;</span>
        </div>
    );
}

export default Alert