import './FilesCRUD.css';
import Popup from "../Popup/Popup";
import NewDocument from "./NewDocument";
import NewFolder from "./NewFolder";
import DeleteFile from './DeleteFile';
import SharePublic from './SharePublic';
import ShareIndividual from './ٍShareIndividual';

import * as allUsersActions from '../../actions/usersActionCreaters';
import { useDispatch } from 'react-redux';

function FilesCRUD(props) {
    const dispatch = useDispatch();
    switch (props.popupType) {
        case "newFolder":
            return <Popup controller={props.setPopupType} content={<NewFolder setPopupType={props.setPopupType} />} />;
        case "newDoc":
            return <Popup controller={props.setPopupType} content={<NewDocument setPopupType={props.setPopupType} />} />;
        case "removeFile":
            return <Popup controller={props.setPopupType} content={<DeleteFile setPopupType={props.setPopupType} selectedFiles={props.selectedFiles} setSelectedFiles={props.setSelectedFiles} />} />;
        case "download":
            return <Popup controller={props.setPopupType} content={null} />;
        case "share-public":
            return <Popup controller={props.setPopupType} content={<SharePublic setPopupType={props.setPopupType} selectedFiles={props.selectedFiles} setSelectedFiles={props.setSelectedFiles} />} />;
        case "share-individual":
            dispatch(allUsersActions.fetchAllUsers());
            return <Popup controller={props.setPopupType} content={<ShareIndividual setPopupType={props.setPopupType} selectedFiles={props.selectedFiles} setSelectedFiles={props.setSelectedFiles} />} />;
        default:
            return null;
    }
}

export default FilesCRUD;