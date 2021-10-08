import { useDispatch } from "react-redux";
import * as fileActions from '../../actions/filesActionCreators';

function DeleteFile(props) {
    const dispatch = useDispatch();
    return (
        <div id="delete-container">
            <h1>هل أنت متأكد من حذف الملفات المحددة؟</h1>
            <div>
                <button type="button" class="btn btn-primary" onClick={() => {
                    dispatch(fileActions.deleteFiles(props.selectedFiles));
                    props.setSelectedFiles([]); //reset the selected files list
                    props.setPopupType('')
                }}>نعم</button>
                <button type="button" class="btn btn-primary" onClick={() => props.setPopupType('')}>لا</button>
            </div>
        </div>
    );
}

export default DeleteFile;