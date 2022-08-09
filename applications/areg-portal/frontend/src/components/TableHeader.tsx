import React from "react";
import { Box, Typography } from "@mui/material";

const TableHeader = () => {
  return (
    <Box height="4.125rem">
      <Typography variant="h1" color="grey.700" align="left">
        Antibody Registry
      </Typography>
      <Typography variant="subtitle1" color="grey.400" align="left">
        Last Updated: Friday, 15th July
      </Typography>
    </Box>
  );
};

export default TableHeader;
