import React from 'react'
import "./LoginPage.css"

let LoginPage = () =>{
    return(
        <div className='loginBox'>
        <form>
         <label for="email">Email</label>
         <input type="email" placeholder='youremail' id="email" name="email"/>
         <label for="password">Password</label>
         <input type="password" placeholder='*******' id="password" name="password"/>
         <button>Log In</button>
        </form>
        <button>Don't have account? Register here </button>
        </div>
    )
}

export default LoginPage;