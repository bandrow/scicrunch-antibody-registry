import React from "react";
//MUI
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";

//project imports
import { getAntibodies } from "../utils/helpers";
import Content from "./UI/Content";

const renderNameAndId = (props: GridRenderCellParams<String>) => {
  return (
    <Box>
      <Typography variant="body2">{props.row.ab_name}</Typography>
      <Typography variant="caption" align="left" component="div">
        {props.row.ab_id}
      </Typography>
    </Box>
  );
};

const renderTargetAntigenAndSpecies = (props: GridRenderCellParams<String>) => {
  return (
    <Box>
      <Typography variant="body2">
        {props.row.ab_target} {props.row.target_species}
      </Typography>
    </Box>
  );
};

const rows: GridRowsProp = getAntibodies();

const columns: GridColDef[] = [
  {
    field: "ab_name",
    headerName: "Name",
    minWidth: 75,
    flex: 1,
    hide: true,
  },
  {
    field: "ab_id",
    headerName: "ID",
    minWidth: 75,
    flex: 1,
    hide: true,
  },
  {
    field: "ab_name_id",
    headerName: "Name & ID",
    width: 200,
    renderCell: renderNameAndId,
  },
  {
    field: "ab_target",
    headerName: "Target antigen",
    minWidth: 75,
    flex: 1,
    hide: true,
  },
  {
    field: "target_species",
    headerName: "Target species",
    minWidth: 75,
    flex: 1,
    hide: true,
  },
  {
    field: "target_ant_spec",
    headerName: "Target antigen & species",
    width: 200,
    renderCell: renderTargetAntigenAndSpecies,
  },
  {
    field: "proper_citation",
    headerName: "Proper citation",
    minWidth: 75,
    flex: 1,
  },
  {
    field: "clonality",
    headerName: "Clonality",
    minWidth: 75,
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    minWidth: 75,
    flex: 1,
  },
  {
    field: "clone_id",
    headerName: "Clone ID",
    minWidth: 75,
    flex: 1,
  },
  {
    field: "host",
    headerName: "Host",
    minWidth: 75,
    flex: 1,
  },
  {
    field: "vendor",
    headerName: "Vendor",
    minWidth: 75,
    flex: 1,
  },
  {
    field: "catalog_num",
    headerName: "Cat Num",
    minWidth: 75,
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
