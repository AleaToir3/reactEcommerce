import SignUpForm from '../../components/sign-up-form/SignUpForm.component'
import { useState } from 'react'
import SignInForm from '../../components/sign-in-form/SignInForm.component'
import './authentification.scss'



const SignInDefaultValue = {
    email : '',
    password : ''
}

const Authentification = ()=>{

const [inputSignIn,setInputSignIn] = useState(SignInDefaultValue);
const {email,password} = inputSignIn; 

    return (
        <div className='authentication-container'>

            <SignInForm />
            <SignUpForm />

        </div>
    )
}

export default Authentification;