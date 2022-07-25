import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../utils/constants";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

function AntibodiesTable() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100vh" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}

export default AntibodiesTable;
