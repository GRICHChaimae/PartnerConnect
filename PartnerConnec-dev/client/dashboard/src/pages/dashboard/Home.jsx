import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../../Dash.css"

export default function Home() {
  return (
    <>
      <Box height={70} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Stack spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack spacing={2} direction="row">
            <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <div className='paddingall'>
                  <span>230$</span>
                  <span>Total Income</span>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>

              </CardContent>
            </Card>
          </Stack>
          </Grid>
        </Grid>
          <Box height={20}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
