import * as actionsType from './type';

export const fetchUser = () => dispatch => {
    dispatch({
        type: actionsType.FETCH_USER,
        payload: {
            id: "1",
            fullName: "محمد الغافلي",
            email: "test@test.com"
        }
    });
}

export const loginUser = (email, password) => dispatch => {
    dispatch({
        type: actionsType.FETCH_USER,
        payload: {
            id: "1",
            fullName: "محمد الغافلي",
            email: "test@test.com"
        }
    });
}

export const signUp = (name, email, password) => dispatch => {
    dispatch({
        type: actionsType.FETCH_USER,
        payload: {
            id: "1",
            fullName: "محمد الغافلي",
            email: "test@test.com"
        }
    });
}

export const logOut = () => dispatch => {
    dispatch({
        type: actionsType.FETCH_USER,
        payload: false
    });
}