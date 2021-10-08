import { useDispatch, useSelector } from 'react-redux';

import './NavBar.css';
import RequestItem from './RequestItem';

import * as authActions from '../../actions/authActionCreaters';

function NavBar() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    let requests = useSelector(state => state.requests);

    return (
        <div id="nav-container">
            <i className="bi bi-person-circle icon"></i>
            <h1>{auth.fullName}</h1>
            <button id="log-out" onClick={() => dispatch(authActions.logOut())}>تسجيل خروج</button>
            <div className="dropdown">
                <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-bell-fill icon"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {requests.map(request => {
                        return <RequestItem key={request.id} senderName={request.senderName} fileName={request.fileName} />;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavBar