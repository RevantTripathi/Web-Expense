import React from 'react'
import "./LoginPage.css"

let LoginPage = () => {
    return (
        <div className='loginBox'>
            <form className='login_form'>

                <div className='email_input'>
                    <label for="email">Email</label>
                    <input type="email" placeholder='youremail' id="email" name="email" />
                </div>

                <div className='password_input'>
                    <label for="password">Password</label>
                    <input type="password" placeholder='*******' id="password" name="password" />
                </div>

                <button className='login_bt'>Log In</button>
            </form>
            <button className='change_page'>Don't have account? Register here </button>
        </div>
    )
}

export default LoginPage;