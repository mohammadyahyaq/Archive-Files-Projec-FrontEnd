import * as actionTypes from './type';


let initialFiles = [
    {
        id: "1",
        owner: "محمد الغافلي",
        fileName: "report 1.docx",
        filePath: "files/report 1.docx",
        lastModified: Date.now(),
        isDirectory: false
    },
    {
        id: "2",
        owner: "عبدالرحمن",
        fileName: "report 2.docx",
        filePath: "files/report 1.docx",
        lastModified: Date.now(),
        isDirectory: false
    }
]

export const fetchFiles = () => dispatch => {
    dispatch({
        type: actionTypes.FETCH_FILES,
        payload: [...initialFiles]
    });
}

export const createFolder = name => dispatch => {
    dispatch({
        type: actionTypes.FETCH_FILES,
        payload: [...initialFiles, {
            id: name,
            owner: "محمد الغافلي",
            fileName: name,
            filePath: "files/" + name,
            lastModified: Date.now(),
            isDirectory: true
        }]
    })
}

export const addDocument = file => dispatch => {
    dispatch({
        type: actionTypes.FETCH_FILES,
        payload: [...initialFiles, {
            id: file.name,
            owner: "محمد الغافلي",
            fileName: file.name,
            lastModified: Date.now(),
            isDirectory: false
        }]
    });
}

export const deleteFiles = selectedFiles => dispatch => {
    const newFiles = initialFiles.filter(dbFile => {
        return !selectedFiles.some(file => {
            return file.id === dbFile.id;
        });
    });
    dispatch({
        type: actionTypes.FETCH_FILES,
        payload: newFiles
    });
}

export const sharePublic = selectedFiles => dispatch => {
    const newFiles = initialFiles.filter(dbFile => {
        return !selectedFiles.some(file => {
            return file.id === dbFile.id;
        });
    });
    dispatch({
        type: actionTypes.FETCH_FILES,
        payload: newFiles
    });
}