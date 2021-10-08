import * as actionTypes from './type';

export const fetchAllUsers = () => dispatch => {
    dispatch({
        type: actionTypes.FETCH_ALL_USERS,
        payload: [
            { id: "1", name: "إياد" },
            { id: "2",  name: "علي"},
            { id: "3", name: "عبدالله" },
            { id: "4",  name: "عبدالمحسن"},
            { id: "5", name: "عبدالرحمن" },
            { id: "6",  name: "عبداللطيف"},
            { id: "7", name: "ناصر" },
            { id: "8",  name: "منصور"},
            { id: "9", name: "خالد" },
            { id: "10", name: "تركي"}
        ]
    });
}