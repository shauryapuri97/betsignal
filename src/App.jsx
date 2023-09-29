import CssBaseline from "@mui/material/CssBaseline";
import SideNav from "./components/SideNav/SideNav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Watchlist from "./components/Watchlist/Watchlist";
import Football from "./components/Football/Football";
import Basketball from "./components/Basketball/Basketball";
import Baseball from "./components/Baseball/Baseball";
import Boxing from "./components/Boxing/Boxing";
import { Box, Typography } from "@mui/material";
import { CustomModal } from "./shared/components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedEvent,
  setSelectedEvent,
} from "./store/slices/configSlice";
import { UsernameContext } from "./shared/contexts/UsernameContext";
import moment from "moment";

const PATHS = [
  { path: "/", Component: Watchlist },
  { path: "/football", Component: Football },
  { path: "/basketball", Component: Basketball },
  { path: "/baseball", Component: Baseball },
  { path: "/boxing", Component: Boxing },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const dispatch = useDispatch();
  const selectedEvent = useSelector(selectSelectedEvent);

  const onCloseModal = () => {
    dispatch(setSelectedEvent());
  };

  return (
    <UsernameContext.Provider value={"testuser@betsignal.io"}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <BrowserRouter>
            <SideNav />
            <Routes>
              {PATHS.map(({ path, Component }) => (
                <Route key={path} path={path} exact element={<Component />} />
              ))}
            </Routes>
          </BrowserRouter>
        </Box>
        <CustomModal isOpen={!!selectedEvent} onClose={onCloseModal}>
          <Typography variant="h6" component="h2">
            {selectedEvent?.eventName}
          </Typography>
          <Typography variant="caption">
            {`Created: ${moment(selectedEvent?.created).format("MM/DD/YYYY")}`}
          </Typography>
        </CustomModal>
      </ThemeProvider>
    </UsernameContext.Provider>
  );
}
