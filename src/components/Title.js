import React from 'react';
import { Navbar } from './index';
import '../css/Title.css';

const Title = ({ token, setToken, setUsername, setPassword }) => {
  return (
    <div id='title'>
      <h1>
        Tower Communication Terminal (TCT)
        < a href='https://destiny.fandom.com/wiki/Glimmer' target='_blank'>
        <img 
        src={require('./GlimGlam.png')}
        alt='glimmer'
        id='glim'
        />
        </a>
        
      </h1>
      <Navbar
        token={token}
        setToken={setToken}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Title;
