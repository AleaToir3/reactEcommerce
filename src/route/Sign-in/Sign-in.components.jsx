import {signInWithGooglePopup,createUserDocumentFromAuth} from '../firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/SignUpForm.component'
import { useState } from 'react'


const Signin = ()=>{
    

    const logGoogleUser = async () =>{
         const {user} = await signInWithGooglePopup(); 
         createUserDocumentFromAuth(user)
    }

    return (
        <>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Connection with Google Popup</button>
            <SignUpForm />
        </>
    )
}

export default Signin;