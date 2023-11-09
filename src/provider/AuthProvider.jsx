import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.confiq";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    const singInWithGoogle = () => {
        setLoading(false);
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
             
            if(currentUser){
                const email = currentUser?.email;
            const userData = {email};
                axios.post('https://hotel-booking-server-bay.vercel.app/jwt', userData,{ withCredentials: true})
                .then()
            }
            else{
                axios.post("https://hotel-booking-server-bay.vercel.app/logout",{} ,{withCredentials: true})
                .then()
            }
        });
        return ()=>{
            return unSubscribe()
        }
    },[]);

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authValue ={user, loading, createUser, singInWithGoogle,singInUser, logOut};
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;