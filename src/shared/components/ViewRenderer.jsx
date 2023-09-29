import React from "react";
import { Box, Toolbar } from "@mui/material";

export const ViewRenderer = ({ children }) => (
  <Box sx={{ flexGrow: 1, marginLeft: 3, marginRight: 3 }}>
    <Toolbar />
    {children}
  </Box>
);
