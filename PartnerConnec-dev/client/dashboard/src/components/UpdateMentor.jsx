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

export default function UpdateForm({id, closeEvent, getMentors }) {
  const [loading, setLoading] = useState(false)
  const [mentorData, setMentorData] = useState({
    name: '',
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

  const updateMentor = () => {
    if (!mentorData.name) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill all fields',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000
      });
      return;
    }
    setLoading(true)
    axios.put(`http://localhost:3000/api/v1/edit-mentor-info/${id}`, {
      name: mentorData.name,
    }, config)
    .then(() => {
      console.log('Mentor info updated successfully');
      closeEvent();
      getMentors()
      setLoading(false)
      Swal.fire('Message!', 'Mentor account updated successfully')
    })
    .catch(error => {
      console.error(error);
    });
  } 

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Update Mentor name
      </Typography>
      <IconButton
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ m: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
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
        <Grid item xs={12}>
          {
            loading?
            <CircularProgress sx={{marginLeft:'40%'}}/>:
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            onClick={updateMentor}
          >
            Update Mentor
          </Button>
          }
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}