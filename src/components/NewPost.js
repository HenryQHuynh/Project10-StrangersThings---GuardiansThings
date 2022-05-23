import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createPost } from '../api';
import Button from '@mui/material/Button';
import '../css/NewPost.css';

const NewPost = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  let history = useHistory();

  const handleCheckbox = () => {
    willDeliver === false ? setWillDeliver(true) : setWillDeliver(false);
  };

  const handleNewPost = async () => {
    await createPost(token, title, description, price, location, willDeliver);
    alert('Post created successfully');
    history.push('/myposts');
  };

  return (
    <div id='new-post-page'>
      <fieldset id='new-post-form'>
        <legend>New Post</legend>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleNewPost();
          }}
        >
          <div>
            <textarea
              type='text'
              placeholder='Add a title'
              maxLength='50'
              rows='2'
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></textarea>
          </div>

          <div>
            <textarea
              id='input-description'
              type='text'
              placeholder='Add description for your item'
              maxLength='404'
              rows='3'
              cols='15'
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>

          <div>
            <textarea
              type='text'
              placeholder='Enter value'
              maxLength='70'
              rows='1'
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            ></textarea>
          </div>

          <div>
            <textarea
              type='text'
              placeholder='Location (optional)'
              maxLength='50'
              rows='1'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            ></textarea>
          </div>

          <div>
            <fieldset id='new-post-delivery'>
              <legend>Will Deliver? (optional)</legend>
              <label htmlFor='yes'>Yes</label>
              <input
                type='checkbox'
                name='yes'
                value={willDeliver}
                onChange={(event) => {
                  handleCheckbox(event);
                }}
              ></input>
            </fieldset>
          </div>

          <Button
            id='new-post-button'
            type='submit'
            variant='contained'
            color='success'
          >
            Submit Post
          </Button>
        </form>
      </fieldset>
    </div>
  );
};

export default NewPost;
