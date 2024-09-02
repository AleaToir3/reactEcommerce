import { useState } from "react";
import { createAuthUserForFirebaseWithEmailAndPassword } from "../../route/firebase/firebase.utils";
import FormInput from "./form-input.component";

const defaultFormFiled = {
    displayName : '',
    Email : '',
    Password : '',
    ConfirmPassword : '',
}

const SignUpForm = () => {
    
    const [formField,setFormFiled] = useState(defaultFormFiled);
    const {displayName,Email,Password,ConfirmPassword} = formField;
    
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
        if(Password != ConfirmPassword && !Email || !Password){
            return console.log("Password are not same or one of the fields are empty");
        }

        try {
            await createAuthUserForFirebaseWithEmailAndPassword(displayName,Email,Password)
            resetFormField()            
        } catch (error) {
            console.log("user creation error",error);
        }
    }
     return (
        <div>
            <h1> Sign up Form with Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label="Email" required onChange={handleChange} name='Email' value={Email}/>
                <FormInput label="password" required onChange={handleChange} name='Password' value={Password}/>
                <FormInput label="Confirm Password" required onChange={handleChange} name='ConfirmPassword' value={ConfirmPassword}/>
                <button type="submit" >Send</button>
             </form>

           
         </div>
    )
}

export default SignUpForm;
