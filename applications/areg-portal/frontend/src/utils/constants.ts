import {
  GridRowsProp,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import dataJson from "./data.json";

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

export const rows: GridRowsProp = dataJson;

export const columns: GridColDef[] = [
  { field: "ab_name", headerName: "Name", minWidth: 100, flex: 1 },
  { field: "ab_id", headerName: "ID", minWidth: 100, flex: 1 },
  {
    field: "ab_name_id",
    headerName: "Name & ID",
    width: 250,
    valueGetter: joinNameAndId,
  },
  { field: "ab_target", headerName: "Target antigen", minWidth: 100, flex: 1 },
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
  { field: "clonality", headerName: "Clonality", minWidth: 100, flex: 1 },
  { field: "comments", headerName: "Comments", minWidth: 100, flex: 1 },
  { field: "clone_id", headerName: "Clone ID", minWidth: 100, flex: 1 },
  { field: "host", headerName: "Host", minWidth: 100, flex: 1 },
  { field: "vendor", headerName: "Vendor", minWidth: 100, flex: 1 },
  { field: "catalog_num", headerName: "Cat Num", minWidth: 100, flex: 1 },
];
