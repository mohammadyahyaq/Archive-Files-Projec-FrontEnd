import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as filesActions from '../../actions/filesActionCreators';

function validateFolderName(name) {
    const re = /^[^\s^\x00-\x1f\\?*:"";<>|\/.][^\x00-\x1f\\?*:"";<>|\/]*[^\s^\x00-\x1f\\?*:"";<>|\/.]+$/;
    return re.test(name);
}

function NewFolder(props) {
    const dispatch = useDispatch();
    const [folderName, setFolderName] = useState('');
    const [isWrongName, setIsWrongName] = useState(false);
    return (
        <div className="new-folder">
            <h1>إنشاء مجلد جديد</h1>
            <div className="input-container" data-error={isWrongName ? "الاسم غير صالح" : undefined}>
                <input type="email" placeholder="اسم المجلد" onChange={e => {
                    setIsWrongName(!validateFolderName(e.target.value));
                    setFolderName(e.target.value);
                }} />
            </div>
            <button className="btn btn-primary" onClick={() => {
                if(!isWrongName && folderName !== '') {
                    dispatch(filesActions.createFolder(folderName));
                    props.setPopupType('');
                }
            }}>إنشاء</button>
        </div>
    );
}

export default NewFolder;