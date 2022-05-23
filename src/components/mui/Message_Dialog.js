import { useState } from 'react';
import { fetchMessages } from '../../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function MessageDialog({ token, post }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendMessage = async () => {
    const result = await fetchMessages(token, post._id, content);

    if (result) {
      console.log('Message sent!');
      alert('Hyper Message sent successfully');
    }

    handleClose();
  };

  return (
    <div>
      <Button id='dialog-message' variant='contained' onClick={handleClickOpen}>
        Message
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Message Seller</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            type='text'
            fullWidth
            multiline
            variant='outlined'
            minLength='1'
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { handleSendMessage(); }} >Send message</Button>
          <Button onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
