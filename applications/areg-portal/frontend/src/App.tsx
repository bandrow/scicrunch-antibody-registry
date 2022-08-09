import React from "react";
import "./styles/style.less";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/Theme";
import AntibodiesTable from "./components/AntibodiesTable";
import Navbar from "./components/NavBar/Navbar";
import TableHeader from "./components/TableHeader";

const Main = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Container maxWidth="xl" sx={{ my: 1 }}>
      <TableHeader />
      <AntibodiesTable />
    </Container>
  </ThemeProvider>
);

export default Main;
