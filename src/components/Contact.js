import React, { useState } from 'react'

function Contact() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState([]);

  function validate(firstname, lastname, email, subject, message) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (firstname.length < 3) {
      setErrors((errors) => [
        ...errors,
        "Firstname can't be shorter than 3 characters",
      ]);
    }
  
    if (lastname.length < 4) {
      setErrors((errors) => [
        ...errors,
        "Lastname can't be shorter than 4 characters",
      ]);
    }
  
    if (email.length < 1) {
      setErrors((errors) => [
        ...errors,
        "E-mail is required",
      ]);
    }
  
    if (subject.length < 1) {
      setErrors((errors) => [
        ...errors,
        "Subject is required",
      ]);
    }
  
    if (message.length < 10) {
      setErrors((errors) => [
        ...errors,
        "Message can't be shorter than 10 characters",
      ]);
    }
  
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted...');
    console.log(formData);

    const errors = validate(formData.firstname, formData.lastname, formData.email, formData.subject, formData.message);
    if (errors.length > 0) {
      setErrors({ errors });
      return;
    }
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
      <h2>Contact</h2>

      <form id="contact-form" onSubmit={(e) => handleSubmit(e)}>
          {errors ? errors.map(error => (
            <p key={error}>Error: {error}</p>
          )) : null}
          <div className="form-group">
              <label htmlFor="firstname">Firstname</label>
              <input id="firstname" name="firstname" type="text" className="form-control" value={formData.firstname} onChange={handleInputChange} />
          </div>
          <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <input id="lastname" name="lastname" type="text" className="form-control" value={formData.lastname} onChange={handleInputChange} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input id="email" name="email" type="email" className="form-control" aria-describedby="emailHelp" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" onChange={handleInputChange} value={formData.subject}>
                <option value="subject_1">Subject 1</option>
                <option value="subject_2">Subject 2</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control" rows="5" onChange={handleInputChange} value={formData.message}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact
