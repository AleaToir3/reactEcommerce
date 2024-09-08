import { useContext, useState } from "react";
import { createAuthUserForFirebaseWithEmailAndPassword } from "../../route/firebase/firebase.utils";
import FormInput from "./form-input.component";
import './signUpForm.scss'
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFiled = {
    displayName : '',
    Email : '',
    Password : '',
    ConfirmPassword : '',
}

const SignUpForm = () => {
    
    const [formField,setFormFiled] = useState(defaultFormFiled);
    const {displayName,Email,Password,ConfirmPassword} = formField;
    const {setCurrentUser} = useContext(UserContext);

    
    const handleChange = (e)=>{
        const {value,name} = e.target
        setFormFiled({...formField,[name]:value})
        
    }
    const resetFormField = ()=>{
        setFormFiled(defaultFormFiled) 
    }
    const handleSubmit = async(e)=>{
        const {displayName,Email,Password} = formField
        e.preventDefault();
        if((Password != ConfirmPassword && !Email )|| !Password){
            return console.log("Password are not same or one of the fields are empty");
        }

        try {
           const user =  await createAuthUserForFirebaseWithEmailAndPassword(displayName,Email,Password)
            resetFormField()     
            setCurrentUser(user)
        } catch (error) {
            console.log("user creation error",error);
        }
    }
     return (
        <div className="sign-up-container">
            <h2>don't have an account</h2>
            <span> Sign up Form with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label="Email" required onChange={handleChange} name='Email' value={Email}/>
                <FormInput label="password" required onChange={handleChange} name='Password' value={Password} type="password"/>
                <FormInput label="Confirm Password" required onChange={handleChange} name='ConfirmPassword' value={ConfirmPassword} type="password"/>
                <Button type='submit'>Sign Up</Button>
             </form>

           
         </div>
    )
}

export default SignUpForm;
