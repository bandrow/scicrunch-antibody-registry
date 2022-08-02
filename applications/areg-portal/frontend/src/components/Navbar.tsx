import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Searchbar from "./Searchbar";
//import logo from "./assets/logo.svg";

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "background.paper" }}>
        <Toolbar>
          <Box component="img" src="./assets/logo.svg" mx={1} />
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Antibodies Registry
          </Typography>
          <Searchbar />
        </Toolbar>
      </AppBar>
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} component="div" />
    </Box>
  );
};

export default Navbar;
