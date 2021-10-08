import { useState } from "react";
import Popup from '../Popup/Popup';
import FileInfo from "./FileInfo";

function File(props) {
    // I will use hooks to change the color of the container when selected
    const [selected, setSelected] = useState(props.selectedFiles.some(file => file.id === props.file.id));

    const [infoPopup, setInfoPopup] = useState(false);

    const lastModified = props.file.lastModified ? new Date(props.file.lastModified) : null;

    const fileInfo = <FileInfo
        fileOwner={props.file.owner}
        fileName={props.file.fileName}
        isDirectory={props.file.isDirectory}
        lastModified={props.file.lastModified ? <p>{lastModified.getDate() + '/' + (lastModified.getMonth() + 1) + '/' + lastModified.getFullYear()}</p> : null}
    />

    return (
        <div className={`file-container ${selected ? "selected" : ""}`}>
            <input
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={e => {
                    if (e.target.checked) {
                        props.setSelectedFiles(prevState => [...prevState, props.file]);
                    } else {
                        props.setSelectedFiles(prevState => prevState.filter(file => file.id !== props.file.id)); // remove the file if it was selected
                    }
                }}
                checked={props.selectedFiles.some(file => file.id === props.file.id)}
                onClick={() => {
                    // we should basically toggle the element in the selectedFiles array
                    props.setSelectedFiles(prevState => {
                        if(prevState.some(file => file.id === props.file.id)) {
                            setSelected(false);
                            return prevState.filter(file => file.id !== props.file.id);
                        } else {
                            setSelected(true);
                            return [...prevState, props.file];
                        }
                    });
                }}
            />
            {props.file.isDirectory ? <i className="bi bi-folder-fill file-icon"></i> : <i className="bi bi-file-text-fill file-icon"></i>}
            <p className="file-name">{props.file.fileName}</p>
            {props.file.lastModified ? <p className="modified-date">{lastModified.getDate() + '/' + (lastModified.getMonth() + 1) + '/' + lastModified.getFullYear()}</p> : null}
            {props.file.isPublic ? <i className="fas fa-globe-africa info-icon public-icon"></i> : <button className="info-btn" onClick={() => {
                setInfoPopup(true);
            }}><i class="bi bi-info-circle info-icon"></i></button>}
            {infoPopup ? <Popup controller={setInfoPopup} content={fileInfo} /> : null}
        </div>
    );
}

export default File;