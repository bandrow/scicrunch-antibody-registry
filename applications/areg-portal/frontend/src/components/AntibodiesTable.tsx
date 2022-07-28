import React from "react";
//MUI
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
  GridAlignment,
} from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";

//project imports
import { getAntibodies } from "../services/AntibodiesService";

const RenderNameAndId = (props: GridRenderCellParams<String>) => {
  return (
    <Box>
      <Typography variant="body2" align="left">
        {props.row.ab_name}
      </Typography>
      <Typography variant="caption" align="left" component="div">
        {props.row.ab_id}
      </Typography>
    </Box>
  );
};

const RenderTargetAntigenAndSpecies = (props: GridRenderCellParams<String>) => {
  return (
    <Box>
      <Typography variant="body2">
        {props.row.ab_target} {props.row.target_species}
      </Typography>
    </Box>
  );
};

const rows: GridRowsProp = getAntibodies();

const columnsDefaultProps = {
  flex: 1 as number,
  headerAlign: "center" as GridAlignment,
  align: "center" as GridAlignment,
};

const columns: GridColDef[] = [
  {
    ...columnsDefaultProps,
    field: "ab_name",
    headerName: "Name",
    hide: true,
  },
  {
    ...columnsDefaultProps,
    field: "ab_id",
    headerName: "ID",
    hide: true,
  },
  {
    ...columnsDefaultProps,
    field: "ab_name_id",
    headerName: "Name & ID",
    flex: 2,
    renderCell: RenderNameAndId,
    headerAlign: "left",
    align: "left",
  },
  {
    ...columnsDefaultProps,
    field: "ab_target",
    headerName: "Target antigen",
    hide: true,
  },
  {
    ...columnsDefaultProps,
    field: "target_species",
    headerName: "Target species",
    hide: true,
  },
  {
    ...columnsDefaultProps,
    field: "target_ant_spec",
    headerName: "Target antigen & species",
    renderCell: RenderTargetAntigenAndSpecies,
  },
  {
    ...columnsDefaultProps,
    field: "proper_citation",
    headerName: "Proper citation",
    flex: 2,
  },
  {
    ...columnsDefaultProps,
    field: "clonality",
    headerName: "Clonality",
  },
  {
    ...columnsDefaultProps,
    field: "comments",
    headerName: "Comments",
    flex: 2,
  },
  {
    ...columnsDefaultProps,
    field: "clone_id",
    headerName: "Clone ID",
  },
  {
    ...columnsDefaultProps,
    field: "host",
    headerName: "Host",
  },
  {
    ...columnsDefaultProps,
    field: "vendor",
    headerName: "Vendor",
  },
  {
    ...columnsDefaultProps,
    field: "catalog_num",
    headerName: "Cat Num",
  },
];

function AntibodiesTable() {
  return (
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
            getRowHeight={() => "auto"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AntibodiesTable;
