
import './App.css';
import LoginPage from './component/loginpage/LoginPage';
import React, { useState } from 'react'
import SignUpPage from './component/loginpage/SignUpPage';


function App() {
  const [currentForm, SetCurrentForm] = useState('login');
  return (
    <div className="App">
      <div></div>
      {
        currentForm === "login" ? <LoginPage /> : <SignUpPage />
      }
    </div>
  );
}

export default App;
