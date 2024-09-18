import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener} from "../route/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:()=> null,

})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}


    useEffect(()=>{
        const unsubribe = onAuthStateChangedListener((user)=>{
            console.log("user dans mon userEffect :",user);
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })
        return unsubribe;
    },[])
   

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

