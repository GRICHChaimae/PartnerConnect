import React from 'react'
import Box from '@mui/material/Box';
import MentorList from './MentorList';

export default function Mentor() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <MentorList />
      </Box>
    </>
  )
}