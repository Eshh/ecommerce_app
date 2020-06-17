import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component.jsx'
import ButtonComponent from '../button/button.component.jsx';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email : '',
            password : ''
        })
    }

    handleChange = e => {
        const { value , name} = e.target;
        this.setState ({
            [name] : value
        })
    }
    render(){
        return(
            <div className = 'sign-in'>
                <h1>Already have an Account ?</h1>
                <span>Sign in using your email and password</span>
                <form onSubmit = {this.handleSubmit}>

                    <FormInput type = 'email' name = 'email' required
                    handleChange = {this.handleChange} label = 'Name' value = {this.state.email}/>

                    <FormInput type = 'password' name = 'password' required
                    handleChange = {this.handleChange} label = 'Password' value = {this.state.password}/>
<div className = 'buttons'>
<ButtonComponent type = 'submit'>Sign In</ButtonComponent>
                <ButtonComponent type = 'submit' onClick = {signInWithGoogle} isGoogleSignIn>Sign In with Google</ButtonComponent>
</div>
              

                </form>
            </div>
        )
    }
}

export default SignIn;