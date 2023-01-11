import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useStyles } from "../styles/box-quote.jsx";
import theme, { Colors } from "../styles/theme.jsx";

const CardQuote = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState("L'exemple d'une mère, en qui la vertu brille, est la grande leçon dont profite une fille.")

  return (
    <Paper
      className={classes.container}
      sx={{
        p: 2,
        margin: "50px auto",
        width: 900,
        minHeight: "15vh",
        borderColor: Colors.green,
        boxShadow: `12px 12px 10px 10px ${Colors.green}`,
        [theme.breakpoints.down("md")]: {
          width: 450,
          m: "30px auto",
        },
        [theme.breakpoints.down("sm")]: {
          width: 200,
          m: "30px auto",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography variant="h4" gutterBottom className={classes.tile} sx={{fontFamily: 'Playball'}}>
        " {quote} "
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
