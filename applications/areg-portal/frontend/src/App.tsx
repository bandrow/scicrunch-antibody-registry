import React from "react";
import "./styles/style.less";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/Theme";
import AntibodiesTable from "./components/AntibodiesTable";
import Navbar from "./components/Navbar";

const Main = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <CssBaseline />
    <Container maxWidth="xl" sx={{ my: 1 }}>
      <AntibodiesTable />
    </Container>
  </ThemeProvider>
);

export default Main;
