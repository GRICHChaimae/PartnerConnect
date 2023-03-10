import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import axios from "axios";


export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/admin/login', { email, password })
      .then(response => {
        // Handle successful login response
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token);
        navigate('/')
      })
      .catch(error => {
        // Handle login error
        console.log(error.response.data.message)
        if (error.response.data.message === 'Invalid email or password') {
          return 'Invalid email or password';
        } else {
          return error;
        }
      });
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-center'>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            required
            id="email-input" 
            label="Email" 
            variant="standard" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            required
            id="password-input" 
            label="Password" 
            variant="standard" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" variant="outlined">Login</Button>
      </div>
    </form>
    </Box>
  );
}