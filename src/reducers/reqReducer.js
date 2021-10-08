import * as actionTypes from '../actions/type';

function reqReducer(state= null, action) {
    switch(action.type) {
        case actionTypes.FETCH_REQ:
            return action.payload || false;
        default:
            return state;
    }
}

export default reqReducer;