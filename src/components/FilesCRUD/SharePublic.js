import { useDispatch } from 'react-redux';
import * as fileActions from '../../actions/filesActionCreators';

function SharePublic(props) {
    const dispatch = useDispatch();
    
    return (
        <div id="share-public">
            <h1>هل أنت متأكد نقل هذه الملفات إلى المجلد العام؟</h1>
            <div>
                <button type="button" class="btn btn-primary" onClick={() => {
                    dispatch(fileActions.sharePublic(props.selectedFiles));
                    props.setSelectedFiles([]); //reset the selected files list
                    props.setPopupType('');
                }}>نعم</button>
                <button type="button" class="btn btn-primary" onClick={() => props.setPopupType('')}>لا</button>
            </div>
        </div>
    );
}

export default SharePublic;