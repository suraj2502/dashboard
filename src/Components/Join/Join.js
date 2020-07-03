import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [email, setName] = useState('');
  const [password, setPassword] = useState('');
  
  return (
   
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Login</h1>
        <div>
        
          <input placeholder="email" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
        
          <input type="password"  placeholder="password" className="joinInput mt-20" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <Link onClick={e => (!email|| !password ) ? e.preventDefault() : null} to={`/Dashboard#/users`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}