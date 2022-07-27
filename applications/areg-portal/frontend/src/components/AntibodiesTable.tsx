import React from "react";
//MUI
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  GridRowsProp,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";

//project imports
import { getAntibodies } from "../utils/helpers";
import Content from "./UI/Content";

//use renderCell to render diferent types here:
// renderCell: (params) => (
//   <div>
//     <Typography>{params.value.name}</Typography>
//     <Typography color="textSecondary">{params.value.title}</Typography>
//   </div>

function joinNameAndId(params: GridValueGetterParams) {
  let nameIdJoint = `${params.row.ab_name || ""} ${params.row.ab_id || ""}`;
  return nameIdJoint;
}

const rows: GridRowsProp = getAntibodies();

const columns: GridColDef[] = [
  {
    field: "ab_name",
    headerName: "Name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "ab_id",
    headerName: "ID",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "ab_name_id",
    headerName: "Name & ID",
    width: 250,
    valueGetter: joinNameAndId,
  },
  {
    field: "ab_target",
    headerName: "Target antigen",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "target_species",
    headerName: "Target species",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "proper_citation",
    headerName: "Proper citation",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "clonality",
    headerName: "Clonality",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "clone_id",
    headerName: "Clone ID",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "host",
    headerName: "Host",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "vendor",
    headerName: "Vendor",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "catalog_num",
    headerName: "Cat Num",
    minWidth: 100,
    flex: 1,
  },
];

function AntibodiesTable() {
  return (
    <Content>
      <Box sx={{ height: "80vh" }} mt={16}>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            "& .MuiDataGrid-columnHeadersInner": {
              backgroundColor: "#EAECF0",
            },
            "& .MuiDataGrid-cell": {
              backgroundColor: "#FCFCFD",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
              checkboxSelection
              disableSelectionOnClick
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </Box>
    </Content>
  );
}

export default AntibodiesTable;
