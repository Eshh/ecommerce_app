import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component.jsx'
import ButtonComponent from '../button/button.component.jsx';
import { auth } from '../../firebase/firebase.utils.js';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email ,password} = this.state;
        try{
           await auth.signInWithEmailAndPassword(email , password);
            this.setState({
                email : '',
                password : ''
            })
            } catch(error){
                console.error(error)
            }

        
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
                    handleChange = {this.handleChange} label = 'Email' value = {this.state.email}/>

                    <FormInput type = 'password' name = 'password' required
                    handleChange = {this.handleChange} label = 'Password' value = {this.state.password}/>
<div className = 'buttons'>
<ButtonComponent type = 'button' onClick = {this.handleSubmit}>Sign In</ButtonComponent>
                <ButtonComponent type = 'button' onClick = {signInWithGoogle} isGoogleSignIn>Sign In with Google</ButtonComponent>
</div>
              

                </form>
            </div>
        )
    }
}

export default SignIn;