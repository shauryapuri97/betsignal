import React from "react";
import { Tooltip, IconButton } from "@mui/material";

export const CustomIconButton = ({ tooltip, Icon, onClick }) => (
  <Tooltip title={tooltip}>
    <IconButton size="small" onClick={onClick}>
      <Icon />
    </IconButton>
  </Tooltip>
);
