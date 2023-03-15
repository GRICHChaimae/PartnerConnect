import React from 'react'
import { Button } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function AddButton({handleOpen}) {
  return (
    <Button variant="contained" endIcon={<PersonAddAlt1Icon />} onClick={handleOpen}>
        Add
    </Button>
  )
}
