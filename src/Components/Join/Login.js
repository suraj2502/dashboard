import React from "react";
import './login.css'
import { Formik} from "formik";
import * as EmailValidator from "email-validator";
import { Link } from "react-router-dom";


const Login = () => (
  
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
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!/(?=.*[0-9])/.test(values.password)) {
        errors.password = "Invalid password. Must contain one number.";
      }
      else if(!/(?=.*[A-Z])/.test(values.password))
      {
        errors.password ="Invalid password.must contain at least one uppercase character"
      }
      else if(!/([a-z])/.test(values.password))
    {
      errors.password ="Invalid password.must contain at least one lowercase character"
    }
    else if(!/(?=.*\W)/.test(values.password))
    {
      errors.password ="Invalid password.must contain at least one special character"
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
          

<input
  id="email"
  type="text"
  placeholder="Enter your email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.email && touched.email && "error" && "joinInput"}
/>
{errors.email && touched.email && (
  <div className="input-feedback">{errors.email}</div>
)}

<input
  id="password"
  type="password"
  placeholder="Enter your password"
  value={values.password}
  onChange={handleChange}
  onBlur={handleBlur}
  className={errors.password && touched.password && "error" && "joinInput mt-20"}
/>
{errors.password && touched.password && (
  <div className="input-feedback">{errors.password}</div>
)}

  <Link onClick={e => ((errors.email || errors.password )) ? e.preventDefault() : null} to={`/Dashboard#/users`}>
  <button className={'button mt-20' } type="submit" onSubmit={handleSubmit} disabled={isSubmitting}>Sign In</button>
</Link>

          
        </div>
      </div>
       
      );
    }}
    
  </Formik>
  
);

export default Login;