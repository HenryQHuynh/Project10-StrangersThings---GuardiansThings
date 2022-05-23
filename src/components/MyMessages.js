import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { fetchProfile } from '../api';
import '../css/MyMessages.css';

const MyMessages = ({ localStorageToken, username }) => {
  const [inbox, setInbox] = useState([]);
  const [outbox, setOutbox] = useState([]);

  const getInbox = async () => {
    const response = await fetchProfile(localStorageToken);
    const messages = response.data.messages;
    const filteredMessages = messages.filter(
      (message) => message.fromUser.username !== username
    );

    setInbox(filteredMessages);
  };

  //A variety of outside resources were utilized to cobbled together the code responsible for the functionality of the messaging system. Although it works somewhat, I am still skeptical of some aspects of the code below.
  const handleInbox = () => {
    return (
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, overflow: 'hidden' }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} align='left'>
                For Item:
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='left'>
                Message:
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='left'>
                From:
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inbox.reverse().map((message) => (
              <TableRow
                key={message._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='left'>{message.post.title}</TableCell>
                <TableCell align='left'>{message.content}</TableCell>
                <TableCell align='left'>{message.fromUser.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const getOutbox = async () => {
    const response = await fetchProfile(localStorageToken);
    const messages = response.data.messages;
    const filteredMessages = messages.filter(
      (message) => message.fromUser.username === username
    );

    setOutbox(filteredMessages);
  };

  const handleOutbox = () => {
    return (
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, overflow: 'hidden' }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} align='left'>
                For Item:
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='left'>
                Message:
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {outbox.reverse().map((message) => (
              <TableRow
                key={message._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center'>{message.post.title}</TableCell>
                <TableCell align='center'>{message.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  useEffect(() => {
    getInbox();
    getOutbox();
  }, [username]);

  return (
    <div id='mymessages-page'>
      <h1 id='welcome'>Welcome to the Tower Communication Terminal (TCT), {`${username}`}</h1>
      <h2>Incoming Messages</h2>
      {inbox.length === 0 ? (
        <p id='empty-inbox-outbox'>You have no messages at the moment.</p>
      ) : (
        handleInbox()
      )}
      <h2>Outgoing Messages</h2>
      {outbox.length === 0 ? (
        <p id='empty-inbox-outbox'>You have no messages at the moment.</p>
      ) : (
        handleOutbox()
      )}
    </div>
  );
};

export default MyMessages;
