import * as actionTypes from '../actions/type';

function usersReducer(state = null, action) {
    switch(action.type) {
        case actionTypes.FETCH_ALL_USERS:
            return action.payload || false;
        default:
            return state;
    }
}

export default usersReducer;