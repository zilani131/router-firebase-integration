import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider();
const useFirebase = () => {

    // we get the user from fire base in 
    // object so the initial value is empty object.
    const [user,setUser]=useState({});
    const signInWithGoogle=()=>{
      signInWithPopup(auth,googleProvider)
      .then(res=>{
          const user=res.user;
          setUser(user);
          console.log(user)
      })
      .catch(error=>console.error(error))
    }
    // giving empty tag as dependency  it is mean to call the function onetime
    useEffect(()=>{
      onAuthStateChanged(auth,user=>{
        //   here we set the current user
          setUser(user);
      })
    },[])
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{})
    }
    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
};

export default useFirebase;