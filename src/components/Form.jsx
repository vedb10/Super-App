import React, { useState, useEffect } from 'react';
import '../assets/styles/Form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    checkbox: false,
    submitted: false, // to track whether the form has been submitted
  });

  const [errors, setErrors] = useState({
    name: false,
    username: false,
    email: false,
    mobile: false,
    checkbox: false,
  });

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(formValues));
  }, [formValues]);

  const validateForm = () => {
    const newErrors = {
      name: formValues.name.trim().length === 0,
      username: formValues.username.trim().length === 0,
      email: !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email),
      mobile: !formValues.mobile.trim() || isNaN(parseInt(formValues.mobile)),
      checkbox: !formValues.checkbox,
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setFormValues({ ...formValues, submitted: true });
      navigate('/category');
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked });
  };

  return (
    <div className="form-box">
      <div className="form-size">
        <h1 id="title">Super app</h1>
        <h6 id="subtitle">Create your new account</h6>
        <form className={`form-size ${formValues.submitted ? 'submitted' : ''}`}>
          <div>
          <input style={errors.name === true ? {borderColor: "red"}: {borderColor : "transparent"}}
              className="input"
              name="name"
              placeholder="Name"
              type="text"
              onChange={handleChange}
              value={formValues.name}
              required
            />
            {errors.name && <p className="errorPara">This is a required field</p>}
          </div>
          <div>
            <input style={errors.username === true ? {borderColor: "red"}: {borderColor : "transparent"}}
              className="input"
              name="username"
              placeholder="Username"
              type="text"
              onChange={handleChange}
              value={formValues.username}
              required
            />
            {errors.username && <p className="errorPara">This is a required field</p>}
          </div>
          <div>
            <input style={errors.email === true ? {borderColor: "red"}: {borderColor : "transparent"}}
              className="input"
              name="email"
              placeholder="Email"
              type="text"
              onChange={handleChange}
              value={formValues.email}
              required
            />
            {errors.email && <p className="errorPara">Invalid email address</p>}
          </div>
          <div>
            <input style={errors.mobile === true ? {borderColor: "red"}: {borderColor : "transparent"}}
              className="input"
              name="mobile"
              placeholder="Mobile"
              type="tel"
              onChange={handleChange}
              value={formValues.mobile}
              required
            />
            {errors.mobile && <p className="errorPara">Invalid mobile number</p>}
          </div>
          <div className="checkbox">
            <input type="checkbox" name="checkbox" onChange={handleCheckbox} required />
            <label>Share my registration data with Superapp</label>
          </div>
          {errors.checkbox && <p className="errorPara">This is a required field</p>}
        </form>
        <button id="submit-btn" type="submit" onClick={handleSubmit}>
          SIGN UP
        </button>
        <p>
          By clicking on Sign up, you agree to Superapp{' '}
          <span style={{ color: '#72DB73' }}>Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects your personal data
          please head Superapp
          <span style={{ color: '#72DB73' }}>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Form;
