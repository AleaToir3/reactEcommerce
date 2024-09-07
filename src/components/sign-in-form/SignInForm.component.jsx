import { useContext, useState } from "react";
import { createUserDocumentFromAuth, loginAuthUserForFirebaseWithEmailAndPassword, signInWithGooglePopup } from "../../route/firebase/firebase.utils";
import FormInput from "./form-input.component";
import Button from "../button/button.component";
import './signInForm.scss'
import { UserContext } from "../../contexts/user.context";


const defaultFormFiled = {
    Email : '',
    Password : '',
}

const SignInForm = () => {
    
    const [formField,setFormFiled] = useState(defaultFormFiled);
    const {Email,Password} = formField;
    const {setCurrentUser} = useContext(UserContext);
    
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
            const {user} = await loginAuthUserForFirebaseWithEmailAndPassword(Email,Password)
            resetFormField()            
            setCurrentUser(user);
        } catch (error) {       
            console.log("Sign-in Error: ",error);
        }
        
    } 
    const logGoogleUser = async () =>{
        try {
            const {user} = await signInWithGooglePopup(); 
            createUserDocumentFromAuth(user)            
        } catch (error) {
          console.log(error);    
        }
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
                </div>
             </form>           
         </div>
    )
}

export default SignInForm;
