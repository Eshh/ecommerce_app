import React from 'react';
import './login-page.scss';
import SignIn from '../../components/sign-in-component/sign-in-component.jsx';
import SignUp from '../../components/sign-up-component/sign-up-component';

const LoginPage = () => {
    return(
<div className = 'sign-in-sign-up'>
    <SignIn />
    <SignUp />
</div>    )
}

export default LoginPage;