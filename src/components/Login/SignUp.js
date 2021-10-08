import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import * as authActions from '../../actions/authActionCreaters';
import * as validate from './validation';

function SignUp(props) {
    // initailize a hook for each input field
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    // Here we will set up the errors hook
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [confPassError, setConfPassError] = useState(false);

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth); // this will be updated automatically when the dispatch function called
    const history = useHistory();

    useEffect(() => {
        if(auth) {
            history.push('/dashboard');
        }
    }, [auth]);

    return (
        <div className="auth-panel">
            <h1>حساب جديد</h1>
            <div className="input-container" data-error={nameError ? "الاسم يجب إن يكون باللغة العربية" : undefined}>
                <input className="auth-fields" type="input" placeholder="الاسم الثنائي" onChange={e => {
                    if(!validate.validateName(e.target.value)) {
                        setNameError(true);
                    } else {
                        setNameError(false);
                    }
                    setName(e.target.value);
                }} />
            </div>
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
            <div className="input-container" data-error={confPassError ? "لا تطابق كلمة المرور السابقة" : undefined}>
                <input className="auth-fields" type="password" placeholder="تأكيد كلمة المرور" onChange={e => {
                    if(password !== e.target.value) {
                        setConfPassError(true);
                    } else {
                        setConfPassError(false);
                    }
                    setConfPassword(e.target.value);
                }} />
            </div>
            <button className="btn" onClick={() => {
                if(!nameError && !emailError && !passError && !confPassError) {
                    dispatch(authActions.signUp(name, email, password));
                }
            }}>تسجيل</button>
            <button className="auth-link" onClick={() => props.changeState(true)}>هل تريد الرجوع إلى قائمة تسجيل الدخول؟</button>
        </div>
    );
}

export default SignUp;