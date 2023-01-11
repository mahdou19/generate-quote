import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useStyles } from "../styles/box-quote.jsx";
import theme, { Colors } from "../styles/theme.jsx";

import axios from "axios";

const CardQuote = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState({ text: `"The mind unlearns with difficulty what it has long learned."`, author: `Seneca` });

  const fetchData = function fetchData() {
    const options = {
      method: "POST",
      url: "https://motivational-quotes1.p.rapidapi.com/motivation",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "6c50ddfcffmshf8a2df1fa54116dp17964djsn88097c9e69aa",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };

    axios
      .request(options)
      .then(function (response) {
        const str = response.data;
        const words = str.split("-");
        setQuote({ text: words[0], author: words[1] });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Paper
      className={classes.container}
      sx={{
        p: 2,
        margin: "50px auto",
        width: 600,
        minHeight: "15vh",
        borderColor: Colors.green,
        boxShadow: `12px 12px 10px 10px ${Colors.green}`,
        [theme.breakpoints.down("md")]: {
          width: 400,
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
              <Typography
                variant="h4"
                gutterBottom
                className={classes.text}
                sx={{ fontFamily: "Playball" }}
              >
                {quote.text}
              </Typography>
              {quote.author === "null" ? (
                ""
              ) : (
                <Typography variant="overline" display="block" gutterBottom>
                  {quote.author}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={fetchData}>
              Generate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardQuote;
