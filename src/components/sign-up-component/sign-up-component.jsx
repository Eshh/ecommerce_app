import React from 'react';
import  FormInput  from '../form-input/form-input.component.jsx';
import  ButtonComponent  from '../button/button.component.jsx';
import { auth , createUserProfileDocument } from '../../firebase/firebase.utils.js';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async  event => {
        event.preventDefault();
        const {displayName , email , password , confirmPassword} = this.state;
        if( password != confirmPassword){
            alert('Passwords dont match')
            return;
        }
        try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password)
               await createUserProfileDocument(user, {displayName})
               this.setState = {
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            }
        }
        catch (error){
            console.error(error)
        }

    }

    handleChange = event => {
        const {name , value} = event.target;
        this.setState({[name] : value})
    }
    render(){
        const {displayName , email , password , confirmPassword} = this.state;
        return(
            <div className = 'sign-up'>
                <h2 className = 'title'>Don't have an account ?</h2>
                <span>Sign up using your mail</span>
                <form className ='sign-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput type = 'text'
                    name = 'displayName'
                    value = {displayName}
                    onChange= {this.handleChange}
                    label = 'Display Name'
                    required>
                                            </FormInput>

                         <FormInput type = 'email'
                    name = 'email'
                    value = {email}
                    onChange= {this.handleChange}
                    label = 'Email'
                    required>
                        
                    </FormInput>
                    <FormInput type = 'password'
                    name = 'password'
                    value = {password}
                    onChange= {this.handleChange}
                    label = 'Password'
                    required>
                        
                    </FormInput>
                    <FormInput type = 'passwprd'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    onChange= {this.handleChange}
                    label = 'Confirm Password'
                    required>
                        
                    </FormInput>
                    <ButtonComponent type = 'submit' >Sign Up</ButtonComponent>
                   



                </form>
            </div>
        )
    }
}

export default SignUp;