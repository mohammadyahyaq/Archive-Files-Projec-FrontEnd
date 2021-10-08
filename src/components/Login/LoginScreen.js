import './LoginScreen.css';

import { useState } from 'react';
import Login from './Login.js';
import SignUp from './SignUp.js';

/**
 * This component is used to let the user login or sign up in the system
 */
function LoginScreen() {
    // This hook will specify if we will show the sign in, or the sign up
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="login-container">
            {isLogin ? <Login changeState={setIsLogin} /> : <SignUp changeState={setIsLogin} />}
        </div>
    )
}

export default LoginScreen;