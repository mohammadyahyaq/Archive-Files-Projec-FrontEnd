import './Dashboard.css';
import DashboardBody from '../DashboardBody/DashboardBody';
import NavBar from '../NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import * as filesActions from '../../actions/filesActionCreators';
import * as reqActions from '../../actions/reqActionCreaters';

function Dashboard() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const history = useHistory();

    if (!auth) {
        history.push('/');
        return null;
    }

    dispatch(filesActions.fetchFiles());
    dispatch(reqActions.fetchReq());
    return (
        <div id="dasboard">
            <NavBar />
            <DashboardBody />
        </div>
    );

}

export default Dashboard;