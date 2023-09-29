import React, { useContext } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import betsignalLogo from "../../assets/betsignalLogo.png";
import {
  IoFootballOutline,
  IoStar,
  IoBasketballSharp,
  IoBaseballSharp,
} from "react-icons/io5";
import { GiBoxingGlove } from "react-icons/gi";
import SideNavItem from "./SideNavItem";
import { UsernameContext } from "../../shared/contexts/UsernameContext";

const DRAWER_WIDTH = 200;

const SIDE_NAV_ITEMS = [
  { label: "Football", path: "/football", Icon: IoFootballOutline },
  { label: "Basketball", path: "/basketball", Icon: IoBasketballSharp },
  { label: "Baseball", path: "/baseball", Icon: IoBaseballSharp },
  { label: "Boxing", path: "/boxing", Icon: GiBoxingGlove },
];

export default function SideNav() {
  const username = useContext(UsernameContext);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          style={{ display: "flex", flex: 1, justifyContent: "space-between" }}
        >
          <img
            src={betsignalLogo}
            alt="Betsignal Logo"
            width={DRAWER_WIDTH - 50}
          />
          <Tooltip title={username}>
            <Avatar alt="Remy Sharp" sx={{ height: 30, width: 30 }} />
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <SideNavItem
              key={"/"}
              path={"/"}
              label={"Watchlist"}
              Icon={IoStar}
            />
            <Divider />
            {SIDE_NAV_ITEMS.map(({ label, path, Icon }) => (
              <SideNavItem key={path} path={path} label={label} Icon={Icon} />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
