import './Popup.css';

function Popup(props) {
    return (
        <div className="overlay">
            <div className="popup-container">
                <button onClick={() => {
                    props.controller(false);
                }} className="close-button">&times;</button>
                {props.content}
            </div>
        </div>
    );
}

export default Popup;