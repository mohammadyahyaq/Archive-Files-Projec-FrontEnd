import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as filesActions from '../../actions/filesActionCreators';

function NewDocument(props) {
    const dispatch = useDispatch();
    // we need to know the current files for the user to validate that there is no file has the same name of the uploaded file
    const userFiles = useSelector(state => state.files);
    const [file, setFile] = useState(null);
    const [fileError, setFileError] = useState(false);
    return (
        <div className="new-document">
            <div className="input-container" data-error={fileError ? "يوجد ملف بهذا الاسم" : undefined}>
                <input type="file" className="form-control" onChange={e => {
                    if (userFiles.some(file => file.fileName === e.target.files[0].name)) {
                        setFileError(true);
                    } else {
                        setFileError(false);
                        setFile(e.target.files[0]);
                    }
                }} />
            </div>
            <button className="btn btn-primary" onClick={() => {
                if(!fileError && file !== null) {
                    dispatch(filesActions.addDocument(file));
                    props.setPopupType('');
                }
            }}>رفع</button>
        </div>
    );
}

export default NewDocument;