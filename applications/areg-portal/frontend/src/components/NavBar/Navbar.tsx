import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import Searchbar from "./Searchbar";
import NavLinks from "./NavLinks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Navbar = () => {
  return (
    <Box>
      <AppBar elevation={0}>
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
              <Stack direction="row" spacing={2}>
                <Box component="img" src="./assets/logo.svg" />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={(theme) => ({
                    borderColor: theme.palette.grey[100],
                    borderRightWidth: "1.5px",
                  })}
                />
                <NavLinks />
              </Stack>
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
                <IconButton disableRipple>
                  <HelpOutlineIcon
                    sx={{
                      width: "1.25rem",
                      heigth: "1.25rem",
                    }}
                  />
                </IconButton>
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
