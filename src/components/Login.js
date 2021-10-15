import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'

function Login() {
  let history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState([]);

  function validate(email, password) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (email.length < 1) {
      setErrors((errors) => [
        ...errors,
        "Username can't be empty",
      ]);
    }
  
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in...');

    const errors = validate(formData.email, formData.password);
    if (errors.length > 0) {
      setErrors({ errors });
      return;
    }

    // Request API.
    axios
      .post('https://limitless-peak-63095.herokuapp.com/auth/local', {
        identifier: formData.email,
        password: formData.password,
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        history.push("/admin");
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        setErrors((errors) => [
          ...errors,
          "Login failed. Please try again.",
        ]);
      });
  }

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
      <h2>Login</h2>
      
      <p>
        You can log in with the username <strong>test@example.com</strong> and password <strong>Test123</strong>
      </p>

      <form id="login-form" onSubmit={(e) => handleSubmit(e)}>
          {errors ? errors.map(error => (
            <p key={error}>Error: {error}</p>
          )) : null}
          <div className="form-group">
              <label htmlFor="username">E-mail</label>
              <input id="email" name="email" type="email" className="form-control" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" className="form-control" value={formData.password} onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
