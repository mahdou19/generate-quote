import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

function Footer() {
  return (
    <Box>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
