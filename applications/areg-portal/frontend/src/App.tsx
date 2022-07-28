import React from "react";
import "./styles/style.less";
import { Container, CssBaseline } from "@mui/material";

import AntibodiesTable from "./components/AntibodiesTable";

const Main = () => (
  <>
    <CssBaseline />
    <Container maxWidth="xl">
      <AntibodiesTable />
    </Container>
  </>
);

export default Main;
