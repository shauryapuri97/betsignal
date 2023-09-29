import React from "react";
import ReactDOM from "react-dom";
import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CustomModal = ({ isOpen, onClose, children }) => {
  return ReactDOM.createPortal(
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>{children}</Box>
    </Modal>,
    document.getElementById("portal")
  );
};
