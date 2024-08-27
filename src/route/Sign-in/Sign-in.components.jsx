import {signInWithGooglePopup,createUserDocumentFromAuth} from '../firebase/firebase.utils'

const Signin = ()=>{

    const logGoogleUser = async () =>{
         const {user} = await signInWithGooglePopup(); 
         createUserDocumentFromAuth(user)
    }

    return (
        <>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Connection with Google Popup</button>
        </>
    )
}

export default Signin;