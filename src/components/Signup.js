import React, { useState } from 'react';

const Signup = () => {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (
  credentials.password !==
  credentials.cpassword
) {
  alert(
    "Passwords do not match"
  );
  return;
}

    const response = await fetch(
      `https://inotebook-backend-cxsu.onrender.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        })
      }
    );

    const json = await response.json();

    if (json.authToken) {
      localStorage.setItem('token', json.authToken);
      alert("Account Created Successfully");
    } else {
      alert("Invalid Details");
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mt-4">

      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">
            Name
          </label>

          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
            minLength={5}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Confirm Password
          </label>

          <input
            type="password"
            className="form-control"
            name="cpassword"
            value={credentials.cpassword}
            onChange={onChange}
          />
        </div>

        <button
  disabled={
    credentials.password.length < 5 ||
    credentials.name.length < 3
  }
  type="submit"
  className="btn btn-primary"
>
  Sign Up
</button>
      </form>

    </div>
  );
};

export default Signup;