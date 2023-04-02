import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function AboutUs() {
  return (
    <div style={{ flexGrow: 1, padding: '24px' }}>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" style={{ marginBottom: '24px' }}>
            Our Story
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            enim sed lorem malesuada bibendum. In hac habitasse platea dictumst.
            Quisque faucibus luctus libero, vel fermentum nisl venenatis a.
            Praesent non nibh tellus. Donec vel lacus nec nisi volutpat
            scelerisque. Sed vehicula, ipsum in congue eleifend, nulla dolor
            varius arcu, sit amet posuere massa enim in eros. Fusce dictum
            felis vel sapien tristique varius.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" style={{ marginBottom: '24px' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            enim sed lorem malesuada bibendum. In hac habitasse platea dictumst.
            Quisque faucibus luctus libero, vel fermentum nisl venenatis a.
            Praesent non nibh tellus. Donec vel lacus nec nisi volutpat
            scelerisque. Sed vehicula, ipsum in congue eleifend, nulla dolor
            varius arcu, sit amet posuere massa enim in eros. Fusce dictum
            felis vel sapien tristique varius.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
