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
import Swal from 'sweetalert2';
import PartnerConnectLogo from '../../components/PartnerLogo';
import dash from '../../images/dash.jpg';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import axios from "axios";

export default function Login() {
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
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: error.response.data.message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000
          });
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
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: '50%',height: '100%', flex: 1 }} >
        <img
          src={dash}
          alt='dashbord'
          loading="lazy"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flex: 1, flexDirection: 'column', }}>
        <Box sx={{ width: '100%', px: 3 , paddingBottom: 5 }}>
          <PartnerConnectLogo />
        </Box>
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
                <Typography  style={{ margin: '8px' }}>
                  You don't have an account !!
                </Typography>
                <Link href="/register" style={{ marginBottom: '8px' }}>
                  Click here
                </Link>
                <Button type="submit" variant="outlined">Login</Button>
              </div>
        </form>
      </Box>
    </Box>
  );
}
