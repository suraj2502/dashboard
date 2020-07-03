import React from "react";
import './login.css'
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import { Link } from "react-router-dom";

import './Join.css';

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
      
    }}
    validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address.";
      }
    
      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalid password. Must contain one number.";
      }
    
      return errors;
    }}
  >
      
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Login</h1>
          <form onSubmit={handleSubmit}>

<label htmlFor="email">Email</label>
<input
  id="email"
  type="text"
  placeholder="Enter your email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  className={"text"}
  className={errors.email && touched.email && "error"}
/>
{errors.email && touched.email && (
  <div className="input-feedback">{errors.email}</div>
)}

<label htmlFor="password">Password</label>
<input
  id="password"
  type="password"
  placeholder="Enter your password"
  value={values.password}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.password && touched.password && "error"}
/>
{errors.password && touched.password && (
  <div className="input-feedback">{errors.password}</div>
)}


  <Link  to={`/Dashboard#/users`}>
  <button className={'button mt-20'} type="submit" disabled={isSubmitting}>Sign In</button>
</Link>


</form>
          
        </div>
      </div>
       
      );
    }}
    
  </Formik>
  
);

export default ValidatedLoginForm;