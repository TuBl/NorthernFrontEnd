import React, { useState, useEffect, Fragment } from "react";
import "../assets/CSS/styles.css";
import Thanks from "../Components/Thanks";

const Auth = () => {
  const [formData, setFormData] = useState({
    email: "",
    interest: "Your interest",
    active: false,
    loading: false,
    final: false
  });
  const { email, interest, active, final } = formData;

  const handleInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelect = e => {
    setFormData({ ...formData, interest: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      console.log(`Email: ${email}, Interest: ${interest}`);
      setFormData({ ...formData, active: false, final: true });
    } else {
      setFormData({ ...formData, active: true });
    }
  };
  return (
    <Fragment>
      {final ? (
        <Thanks></Thanks>
      ) : (
        <div className='bg'>
          <div className='container'>
            <div className='heading'>
              <h1>INTERNSHIP SIGNUP FORM</h1>
              <div className='line'></div>
              <p>
                Prepare for your careeer with a Project Management,
                Web-Devlopment, Graphic design, or Digital Marketing Internship
                at Northern.
              </p>
            </div>
            <div className='form'>
              <form onSubmit={e => onSubmit(e)} noValidate>
                {active ? (
                  <p className='err'>Please enter a valid email</p>
                ) : null}
                <div className='inputs'>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => handleInput(e)}
                    className={!active ? "input" : "inputErr"}
                    placeholder='Your Email Address *'
                  />
                  <select
                    value={interest}
                    className='select'
                    onChange={e => handleSelect(e)}
                  >
                    <option value='Project Management'>
                      Project Management
                    </option>
                    <option value='Web-Devlopment'>Web-Devlopment</option>
                    <option value='Graphic Design'>Graphic Design</option>
                    <option value='Digital Marketing'>Digital Marketing</option>
                  </select>
                </div>
                <div>
                  <button className='btn' disabled={final}>
                    Sign Up Now <i className='fas fa-caret-right'></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Auth;
