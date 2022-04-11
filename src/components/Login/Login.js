import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "requests.js";
import { setUserSession } from "Utils/Common";
import jwt from "jwt-decode";

function Login(props) {
  const email = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post(BASE_URL + "/login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        
        if (response.data.token) {

          localStorage.setItem("token", response.data.token);
          setUserSession(response.data.token);

          const token = jwt(response.data.token);
          localStorage.setItem("admin_sub", token.sub);

          if (token.sub === 2) {
            setTimeout(function () {
              props.history.push("/admin/users");
            }, 1000);
          } else {
            setTimeout(function () {
              props.history.push("/admin/dashboard");
            }, 1000);
          }
        }
        else{
          setError(response.data.error);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="box">
      <div className="login-form">
        <h1>Login</h1>
        <br />
        <div>
          Email
          <br />
          <input type="text" {...email} />
        </div>
        <div style={{ marginTop: 10 }}>
          Password
          <br />
          <input type="password" {...password} autoComplete="new-password" />
        </div>
        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <input
          type="button"
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
        />
        <br />
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
