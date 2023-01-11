import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useStyles } from "../styles/box-quote.jsx";
import theme from "../styles/theme.jsx";

const CardQuote = () => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.container}
      sx={{
        p: 2,
        margin: "50px auto",
        width: 400,
        minHeight: "15vh",

        [theme.breakpoints.down("sm")]: {
          width: "100%",
          m: "30px auto",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained">Générer</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardQuote;
