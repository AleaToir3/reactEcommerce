import { useState } from "react";
import { loginAuthUserForFirebaseWithEmailAndPassword, signInWithGooglePopup } from "../../route/firebase/firebase.utils";
import FormInput from "./form-input.component";
import Button from "../button/button.component";
import './signInForm.scss'
import { getAuth } from "firebase/auth";
 

const defaultFormFiled = {
    Email : '',
    Password : '',
}

const SignInForm = () => {
    
    const [formField,setFormFiled] = useState(defaultFormFiled);
    const {Email,Password} = formField;
    
    const handleChange = (e)=>{
        const {value,name} = e.target
        setFormFiled({...formField,[name]:value})
        
    }
    const resetFormField = ()=>{
        setFormFiled(defaultFormFiled) 
    }
    const handleSubmit = async(e)=>{
         const {Email,Password} = formField
        e.preventDefault();
        
        try {
             await loginAuthUserForFirebaseWithEmailAndPassword(Email,Password)
             resetFormField()            
        } catch (error) {       
            console.log("Sign-in Error: ",error);
        }
        
    } 
    const logGoogleUser = async () =>{
        try {
            await signInWithGooglePopup();           
        } catch (error) {
          console.log(error);    
        }
   }
   const qui = ()=>{
    console.log("coucou123",getAuth().currentUser)
    }
     return (      
         
         <div className="sign-in-container">
            <h2>Already have an account</h2>
            <span> Sign In Form with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" required onChange={handleChange} name='Email' value={Email}/>
                <FormInput label="password" required onChange={handleChange} name='Password' value={Password} type="password"/>
                <div className="container-btn">
                    <Button>Sign Up</Button>
                    <Button buttonType='google' onClick={logGoogleUser} type="button">Sign in Google</Button>
                    <Button buttonType='google' onClick={qui} type="button">qui suis je</Button>
                </div>
             </form>           
         </div>
    )
}

export default SignInForm;
