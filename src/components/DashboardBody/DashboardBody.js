import { useSelector } from 'react-redux';

import './DashboardBody.css';
import ToolBar from './ToolBar';
import File from './File';
import { useEffect, useState } from 'react';
import publicFolder from './publicFolder';

function DashboardBody() {
    const userFiles = useSelector(state => state.files);
    // We need to make a hook contains a copy of the array from the reducer, this array represents the items that are shown in the secreen
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if(userFiles) {
            setFiles([publicFolder, ...userFiles]);
        }
    }, [userFiles]);

    // we need a hook contains the selected files
    const [selectedFiles, setSelectedFiles] = useState([]);

    useEffect(() => {
        console.log(selectedFiles);
    }, [selectedFiles]);

    return (
        <div id="DashboardBady">
            <ToolBar controller={setFiles} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
            {files.map(file => {
                return <File key={file.id} file={file} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
            })}
        </div>
    );
}

export default DashboardBody;