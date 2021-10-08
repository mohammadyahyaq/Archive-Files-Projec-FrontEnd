
function RequestItem(props) {
    console.log(props.fileName);
    return (
        <li>
            <a className="dropdown-item" href="#">
                <i className="bi bi-person-circle"></i>
                <div>
                    <p className="sender">{props.senderName}</p>
                    <p className="fileName">{props.fileName}</p>
                </div>
                <button type="button" class="btn btn-success">قبول</button>
                <button type="button" class="btn btn-danger">رفض</button>
            </a>
        </li>
    )
}

export default RequestItem;