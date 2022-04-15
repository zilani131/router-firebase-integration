
import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div>
            <h1>This is login</h1>
            <button onClick={signInWithGoogle}>Google sign in</button>
            <form action="">
                <input type="email" placeholder='Email' name="" id="" />
                <br />
                <input type="password" placeholder='Password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;