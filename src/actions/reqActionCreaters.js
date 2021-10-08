import * as actionTypes from './type';

export const fetchReq = () => dispatch => {
    dispatch({
        type: actionTypes.FETCH_REQ,
        payload: [
            {
                id: "1",
                senderName: "محمد الغافلي",
                fileName: "report 1.docx"
            },
            {
                id: "2",
                senderName: "محمد الغافلي",
                fileName: "report 2.docx"
            },
            {
                id: "3",
                senderName: "محمد الغافلي",
                fileName: "report 3.docx"
            }
        ]
    });
}