import React from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useStyles } from '../styles/box-quote.jsx';


const CardQuote = () => {

  const classes = useStyles()
  return (
    <Paper
    className= {classes.container}
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 300,
      flexGrow: 1,
    
    }}
  >
    <Grid container spacing={2}>
     
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full resolution 1920x1080 • JPEG
            </Typography>
           
          </Grid>
          <Grid item>
          <Button variant="contained">Contained</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
  )
}

export default CardQuote