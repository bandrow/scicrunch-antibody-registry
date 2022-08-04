import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Searchbar from "./Searchbar";
import NavTabs from "./NavTabs";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const HelpIconWrapper = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.grey["400"],
}));

const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component="img" src="./assets/logo.svg" mx={1} />
            <NavTabs />
          </Box>
          <Searchbar />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <HelpIconWrapper>
              <HelpOutlineIcon
                sx={(theme) => ({
                  width: theme.spacing(2.5),
                  heigth: theme.spacing(2.5),
                })}
              />
            </HelpIconWrapper>
            <Button>Log in / Register</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} component="div" />
    </Box>
  );
};

export default Navbar;
