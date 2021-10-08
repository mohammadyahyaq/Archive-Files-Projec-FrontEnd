import * as actionTypes from "../actions/type";

function filesReducer(state= null, action) {
    console.log(action);
    switch(action.type) {
        case actionTypes.FETCH_FILES:
            return action.payload || false;
        default:
            return state;
    }
}

export default filesReducer;