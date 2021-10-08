import { combineReducers } from "redux";
import authReducer from "./authReducer";
import filesReducer from "./filesReducer";
import reqReducer from "./reqReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    auth: authReducer,
    files: filesReducer,
    requests: reqReducer,
    allUsers: usersReducer
});

export default reducers;