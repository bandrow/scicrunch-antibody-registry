import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Searchbar from "./Searchbar";
import NavLinks from "./NavLinks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            disableGutters
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                height: "2.5rem",
              }}
            >
              <Box
                height="100%"
                sx={(theme) => ({
                  borderRight: `0.094rem solid ${theme.palette.grey[100]}`,
                  pr: theme.spacing(2),
                })}
              >
                <Box component="img" src="./assets/logo.svg" />
              </Box>
              <NavLinks />
            </Box>
            <Searchbar />
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={(theme) => ({
                  margin: theme.spacing(0, 2),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.palette.grey["400"],
                })}
              >
                <HelpOutlineIcon
                  sx={{
                    width: "1.25rem",
                    heigth: "1.25rem",
                  }}
                />
              </Box>
              <Button>Log in / Register</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} component="div" />
    </Box>
  );
};

export default Navbar;
