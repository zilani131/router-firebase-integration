import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>This is Register</h1>
            <form action="">
                <input type="text"  placeholder='Name' id="" />
                <br />
                <input type="email"  placeholder='Email' id="" />
                <br />
                <input type="password"  placeholder='Password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;