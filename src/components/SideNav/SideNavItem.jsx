import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { BRAND_COLOR } from "../../shared/constants/styleConstants";

const SideNavItem = ({ path, label, Icon }) => {
  return (
    <ListItem key={path} disablePadding>
      <ListItemButton
        component={NavLink}
        to={path}
        style={({ isActive }) => ({
          backgroundColor: isActive ? BRAND_COLOR : undefined,
        })}
      >
        <ListItemIcon sx={{ marginLeft: "8px" }}>
          {Icon ? <Icon /> : undefined}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideNavItem;
