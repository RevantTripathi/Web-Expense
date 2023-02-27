import React from 'react'
import "./SignUpPage.css"

let SignUpPage = () => {
    return (
        <div className='signUpBox2'>
            <form className='signup_form'>
                <div className='first_input'>
                    <label for="firstname">First Name</label>
                    <input type="text" placeholder='First Name' id="firstname" name="email" />
                </div>
                <div className='last_input'>
                    <label for="lastname">Last Name</label>
                    <input type="text" placeholder='Last Name' id="email" name="email" />
                </div>
                <div className='email_inputs'>
                    <label for="email">Email</label>
                    <input type="email" placeholder='youremail' id="email" name="email" />
                </div>
                <div className='password_inputs'>
                    <label for="password">Set Password</label>
                    <input type="password" placeholder='*******' id="password" name="password" />
                </div>
                <button>Log In</button>
            </form>
            <button>Already Registerd? Login</button>
        </div>
    )
}

export default SignUpPage;