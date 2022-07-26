import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

const Content = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Content;
