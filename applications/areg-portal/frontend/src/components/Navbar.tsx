import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Searchbar from "./Searchbar";
//import logo from "./assets/logo.svg";

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "background.paper" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box component="img" src="./assets/logo.svg" mx={1} />
          <Searchbar />
        </Toolbar>
      </AppBar>
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} component="div" />
    </Box>
  );
};

export default Navbar;
