import React, { useState } from 'react';
import axios from "axios";
import BASE_URL from 'requests.js';
import { setUserSession } from 'Utils/Common';

function Login(props) {
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post(BASE_URL+'/login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      console.log(response)
      if(response.data.error){
        setError(response.data.error);
      }
      else{
        localStorage.setItem('token',response.data.token);
        setUserSession(response.data.token);
        setTimeout(function() {
          props.history.push('/admin/dashboard');
        }, 5000);
        
        
      }
      
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div className="box">
        <div className="login-form">
            <h1>Login</h1><br/>
                <div>
                Email<br />
                <input type="text" {...email}  />
                </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;