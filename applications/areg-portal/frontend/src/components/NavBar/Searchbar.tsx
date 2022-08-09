import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey["100"],
  padding: theme.spacing(0.5),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey["600"],
  width: "100%",
  fontSize: "1rem",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Searchbar() {
  return (
    <Search>
      <Stack
        direction="row"
        spacing={1}
        display="flex"
        alignItems="center"
        width="100%"
        sx={(theme) => ({ ml: theme.spacing(1) })}
      >
        <SearchIcon
          sx={(theme) => ({
            width: "1.3rem",
            color: theme.palette.grey["400"],
          })}
        />
        <StyledInputBase placeholder="Search for catalog number…" />
        <Box
          sx={(theme) => ({
            bgcolor: "grey.200",
            maxHeight: "2rem",
            minWidth: "2rem",
            borderRadius: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: theme.spacing(1),
          })}
        >
          <Typography sx={{ color: "grey.400", fontWeight: "bold" }}>
            /
          </Typography>
        </Box>
      </Stack>
    </Search>
  );
}
