import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

export default function AddMenteeFrom({ closeEvent, getMentees }) {
  const [rows, setRows] = useState([]);
  const [selectedMentorId, setSelectedMentorId] = useState('')
  const [loading, setLoading] = useState(false)
  const [mentorData, setMentorData] = useState({
    name: '',
    email: '',
    mentor: '',
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

  const addMentee = () => {
    if (!mentorData.name || !mentorData.email || !mentorData.password || !selectedMentorId) {
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
    axios.post('http://localhost:3000/api/v1/pr-auth/signup', {
      name: mentorData.name,
      email: mentorData.email,
      mentor: selectedMentorId,
      password: mentorData.password
    }, config)
    .then(res => {
      console.log('Mentee account created successfully');
      closeEvent();
      getMentees()
      setLoading(false)
      Swal.fire('Message!', 'Mentee account created successfully')
    })
    .catch(error => {
      console.error(error);
    });
  } 

  const getMentors = () => {
    axios.get('http://localhost:3000/api/v1/list-parrains', config)
    .then(response => {
      console.log(response.data);
      setRows(response.data)
    })
    .catch(error => {
      console.error(error);
    });
    console.log(token)
  }

  useEffect(() => {
    getMentors()
  }, [])

  const [searchText, setSearchText] = useState('');

  const handleChange = (value) => {
    if (value) {
      setSearchText(value.name);
      setSelectedMentorId(value._id);
    } else {
      setSelectedMentorId('');
      setSearchText('');
    }
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Mentee
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
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={rows}
          sx={{ width: 300 }}
          onChange={(e, v) => handleChange(v)}
          getOptionLabel={(row) => row.name ? row.name : ""}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Search By Name"/>
          )}
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
            onClick={addMentee}
          >
            Add Mentee
          </Button>
          }
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}