import React from 'react'
import "./SignUpPage.css"

let SignUpPage = () =>{
    return(
        <div className='loginBox'>
        <form>
        <label for="firstname">First Name</label>
        <input type="text" placeholder='First Name' id="firstname" name="email"/>
        <label for="lastname">Last Name</label>
        <input type="text" placeholder='Last Name' id="email" name="email"/>
        <label for="email">Email</label>
        <input type="email" placeholder='youremail' id="email" name="email"/>
        <label for="password">Password</label>
        <input type="password" placeholder='*******' id="password" name="password"/>
         <button>Log In</button>
        </form>
        <button>Already Registerd? Login</button>
        </div>
    )
}

export default SignUpPage;