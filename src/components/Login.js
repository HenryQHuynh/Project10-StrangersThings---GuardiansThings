import React from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../api';
import Button from '@mui/material/Button';
import '../css/Login.css';

const Login = ({ setToken, username, setUsername, password, setPassword }) => {
  let history = useHistory();

  const handleLogin = async () => {
    const result = await loginUser(username, password);

    if (result.data) {
      setToken(result.data.token);
      localStorage.setItem('username', username);
      localStorage.setItem('token', result.data.token);
      console.log('Verification succesful!')
      alert('Verification successful Guardian');
      history.push('/posts');
    } else {
      alert(`Verification Error: Info is incorrect, try again`);
    }
  };

  return (
    <div id='login-page'>
      <fieldset id='login-form'>
        <legend>Guardian Login Terminal</legend>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            handleLogin();
          }}
        >
          <label>Callsign or Username</label>
          <div>
            <input
              type='text'
              minLength='3'
              maxLength='20'
              required
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </div>

          <label>Password</label>
          <div>
            <input
              type='password'
              minLength='3'
              maxLength='20'
              required
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>

          <Button
            id='login-button'
            type='submit'
            variant='contained'
            color='success'
          >
            Login
          </Button>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
