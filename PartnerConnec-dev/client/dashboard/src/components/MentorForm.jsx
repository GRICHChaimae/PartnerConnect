import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

export default function AddForm({ closeEvent, getMentors }) {
  const [loading, setLoading] = useState(false)
  const [mentorData, setMentorData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMentorData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const addMentor = () => {
    setLoading(true)
    axios.post('http://localhost:3000/api/v1/p-auth/signup', {
      name: mentorData.name,
      email: mentorData.email,
      password: mentorData.password
    }, config)
    .then(res => {
      console.log('Mentor account created successfully');
      closeEvent();
      getMentors()
      setLoading(false)
      Swal.fire('Message!', 'Mentor account created successfully')
    })
    .catch(error => {
      console.error(error);
    });
    // console.log(mentorData.name)
  } 

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Mentor
      </Typography>
      <IconButton
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ m: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            placeholder="Enter Name"
            value={mentorData.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            required
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Email"
            value={mentorData.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            placeholder="Enter Password"
            value={mentorData.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          {
            loading?
            <CircularProgress sx={{marginLeft:'40%'}}/>:
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            onClick={addMentor}
          >
            Add Mentor
          </Button>
          }
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}