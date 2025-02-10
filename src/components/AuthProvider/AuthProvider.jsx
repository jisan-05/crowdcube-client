import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut  } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        return signInWithPopup(auth, provider)
    }
    const handleRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = () =>{
        return signOut(auth)
    }

    const authInfo = {
        handleGoogleLogin,
        handleRegister,
        handleSignIn,
        signOutUser,
        user,
        setUser
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            if (currentUser) {
              setUser(currentUser)
              
            } else {
              setUser(null)
            }
            setLoading(false)

            console.log(currentUser)
            
            return ()=> {
                unsubscribe()
            };
          })
    },[])

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
