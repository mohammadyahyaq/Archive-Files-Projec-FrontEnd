import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import * as authActions from '../../actions/authActionCreaters';
import * as validate from './validation';

function Login(props) {
    // we should initialize a hook for each input to be saved inside the post request
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Here we will set up the errors hook
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const history = useHistory(); // this hook is used to move to another route

    useEffect(() => {
        if(auth) {
            history.push('/dashboard');
        }
    }, [auth]);

    return (
        <div className='auth-panel'>
            <h1>تسجيل الدخول</h1>
            <div className="input-container" data-error={emailError ? "البريد غير مكتوب بالشكل الصحيح" : undefined}>
                <input className="auth-fields" type="email" placeholder="البريد الإلكتروني" onChange={e => {
                    if(!validate.validateEmail(e.target.value)){
                        setEmailError(true);
                    } else {
                        setEmailError(false);
                    }
                    setEmail(e.target.value);
                }} />
            </div>
            <div className="input-container" data-error={passError ? "يجب أن تحوي كلمة المرور على حرف كبير وحرف صغير ورقم، ويجب أنا لا يقل طولها عن 8 أحرف" : undefined}>
                <input className="auth-fields" type="password" placeholder="كلمة المرور" onChange={e => {
                    if(!validate.validatePassword(e.target.value)) {
                        setPassError(true);
                    } else {
                        setPassError(false)
                    }
                    setPassword(e.target.value);
                }} />
            </div>
            <button className="btn" onClick={() => {
                console.log(emailError + " " + passError);
                if(!emailError && !passError) {
                    dispatch(authActions.loginUser());
                }
            }}>تسجيل الدخول</button>
            <button className="auth-link" onClick={() => props.changeState(false)}>هل تريد تسجيل حساب جديد؟</button>
        </div>
    );
}

export default Login;