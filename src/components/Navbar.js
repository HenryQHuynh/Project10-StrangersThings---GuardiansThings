import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import '../css/Navbar.css';

const Navbar = ({ token, setToken, setUsername, setPassword }) => {
  let history = useHistory();

  return (
    <nav>
      <Link className='navbar' to='/home'>
        Main Terminal
      </Link>

      <Link className='navbar' to='/posts'>
        Posts
      </Link>

      {!token && (
        <Link className='navbar' to='/login'>
          Login
        </Link>
      )}

      {token && (
        <Link className='navbar' to='/newpost'>
          Add New Post
        </Link>
      )}

      {token && (
        <Link className='navbar' to='/myposts'>
          My Posts
        </Link>
      )}

      {token && (
        <Link className='navbar' to='/mymessages'>
          My Messages
        </Link>
      )}

      {!token && (
        <Link id='link-register' className='navbar' to='/register'>
          Create Account
        </Link>
      )}

      {token && (
        <Button
          id='logout-button'
          className='navbar'
          onClick={() => {
            setToken('');
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            setUsername('');
            setPassword('');
            history.push('/home');
          }}
        >
          Logout
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
