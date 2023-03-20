import React from 'react'
import TextField from '@mui/material/TextField';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';

export default function AddForm({closeEvent}) {
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center"> 
        Add Mentor
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item>
          <TextField id="outlined-basic" label="Oulined" variant="outlined" />
        </Grid>
      </Grid>
      <Box sx={{ m: 4}} />
    </>
  )
}
