import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey["100"],
  marginRight: theme.spacing(2),
  maxWidth: "30rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.grey["400"],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey["600"],
  width: "100%",
  fontSize: "1rem",
  minHeight: "2.5rem",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Searchbar() {
  return (
    <Search sx={{ flexGrow: 1 }}>
      <SearchIconWrapper>
        <SearchIcon
          sx={{
            width: "1.25rem",
            heigth: "1.25rem",
          }}
        />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search for catalog number…" />
    </Search>
  );
}
