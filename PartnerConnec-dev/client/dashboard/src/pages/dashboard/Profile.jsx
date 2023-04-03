import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import Swal from 'sweetalert2'


const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
};

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/api/v1/update-admin-password', {
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
      password: password,
    }, config)
    .then(() => {
      console.log('Password updated successfully');
      setNewPassword('')
      setConfirmNewPassword('')
      setPassword('')
      Swal.fire('Message!', 'Password updated successfully')
    })
    .catch(error => {
      console.error(error.response.data.message);
      Swal.fire('Message!', error.response.data.message)
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', flex: 1 }}>
      <Typography variant="h5" component="h1">
        Change Password
      </Typography>
      <form style={styles.form} onSubmit={handleSubmit}>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Old Password</InputLabel>
          <FilledInput
            required
            id="filled-adornment-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">New Password</InputLabel>
          <FilledInput
            required
            id="filled-adornment-password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            type={showNewPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
          <FilledInput
            required
            id="filled-adornment-password"
            value={confirmNewPassword}
            onChange={(event) => setConfirmNewPassword(event.target.value)}
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          style={styles.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Save Changes
        </Button>
      </form>
    </Box>


  );
};

export default ChangePasswordForm;
