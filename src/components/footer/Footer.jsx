import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useStyles } from "../styles/footer";

function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <AppBar
        className={classes.container}
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            ©2023 Mamadou SALL ❤️
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
