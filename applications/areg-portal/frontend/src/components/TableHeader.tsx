import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TableHeader = () => {
  return (
    <Box height="4.125rem" mb={2} mt={5}>
      <Stack spacing={1}>
        <Typography variant="h1" color="grey.700" align="left">
          Antibody Registry
        </Typography>
        <Typography variant="subtitle1" color="grey.400" align="left">
          Last Updated: Friday, 15th July
        </Typography>
      </Stack>
    </Box>
  );
};

export default TableHeader;
