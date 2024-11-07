import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/Firebase.confi";
import { GoogleAuthProvider } from "firebase/auth";

   export const  authProvider= createContext(null);


   const AuthContext = ({children }) => {
   
    const GoogleProvider = new GoogleAuthProvider();

    const [user,SetUser] = useState('');
    // const [loader,setLoader] = useState(false);

    // google Register
    const googleSingUP = () =>{
      
        return signInWithPopup(auth, GoogleProvider)
    }

    const authInfo = {
        user,
   
        googleSingUP,

    }

    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;