import { useState } from "react";
import { useSelector } from "react-redux";
import FilesCRUD from "../FilesCRUD/FilesCRUD";
import DropDown from "./DropDown";
import publicFolder from "./publicFolder";
import SortBy from "./SortBy";

function ToolBar(props) {
    // we first make a copy of the original array from the auth reducer
    const userFiles = useSelector(state => state.files);

    // we need to intriduce a hook that decide to show a popup or not
    const [popupType, setPopupType] = useState("");

    const [showDropDown, setShowDropDown] = useState(false);

    return [
        <div id="tool-bar">
            <p>الملفات</p>
            <input type="text" placeholder="ما اسم الملف الذي تريد؟" onChange={(e) => {
                let newFiles = [publicFolder, ...userFiles];
                newFiles = newFiles.filter(file => {
                    return file.fileName.toLowerCase().includes(e.target.value.toLowerCase());
                });
                props.controller(newFiles);
            }} />
            <SortBy controller={props.controller} setSelectedFiles={props.setSelectedFiles} />
            <div className="files-proc">
                <button onClick={() => setPopupType("newFolder")} title="مجلد جديد"><i className="bi bi-folder-plus hover-btn"></i></button>
                <button onClick={() => setPopupType("newDoc")} title="ملف جديد"><i className="bi bi-file-earmark-plus hover-btn"></i></button>
                <button className={props.selectedFiles.length > 0 ? undefined : "requires-selection"} onClick={() => {
                    if (props.selectedFiles.length > 0) {
                        setPopupType("removeFile");
                    }
                }} title="حذف"><i className={`bi bi-trash  ${props.selectedFiles.length > 0 ? "hover-btn" : null}`}></i></button>
                <button className={props.selectedFiles.length > 0 ? undefined : "requires-selection"} onClick={() => {
                    if (props.selectedFiles.length > 0) {
                        setPopupType("download");
                    }
                }} title="تحميل"><i className={`bi bi-cloud-arrow-down ${props.selectedFiles.length > 0 ? "hover-btn" : null}`}></i></button>
                <button className={props.selectedFiles.length > 0 ? undefined : "requires-selection"} id="share-button" title="مشاركة">
                    <i className={`bi bi-share ${props.selectedFiles.length > 0 ? "hover-btn" : null}`}></i>
                    {props.selectedFiles.length > 0 ? <DropDown setPopupType={setPopupType} selectedFiles={props.selectedFiles} /> : null}
                </button>
            </div>
        </div>,
        <FilesCRUD selectedFiles={props.selectedFiles} setSelectedFiles={props.setSelectedFiles} popupType={popupType} setPopupType={setPopupType} />
    ];
}

export default ToolBar;