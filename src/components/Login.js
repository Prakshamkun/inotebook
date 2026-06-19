import React, { useState } from 'react';

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      }
    );

    const json = await response.json();

    if (json.authToken) {

      localStorage.setItem(
        'token',
        json.authToken
      );

      alert("Login Successful");

    } else {

      alert("Invalid Credentials");

    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mt-3">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Email</label>

          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>

          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;