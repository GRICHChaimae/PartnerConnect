import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PartnerConnectLogo = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  };
  const logoStyle = {
    paddingTop: 20,
    borderRadius: 10,
  };
  const textStyle = {
    color: '#3A1078',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };
  const subtitleStyle = {
    color: '#4E31AA',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
  };

  return (
    <Box style={containerStyle}>
      <Box style={logoStyle}>
        <Typography style={textStyle}>Partner Connect</Typography>
      </Box>
      <Typography style={subtitleStyle}>FOR A GOOD START</Typography>
    </Box>
  );
};

export default PartnerConnectLogo;