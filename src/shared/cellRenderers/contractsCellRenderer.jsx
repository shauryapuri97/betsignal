import { Typography } from "@mui/material";
import React from "react";
import { Box, Chip } from "@mui/material";

const contractsCellRenderer = (params) => {
  return (
    <Box sx={{ display: "flex", textAlign: "center", gap: 10 }}>
      {params.value?.map(
        ({ name, bid, bidBackStake, offer, offerBackStake }) => (
          <Box
            key={`${name}-${bid}`}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="caption">
              {name.length > 17 ? `${name.substring(0, 17)}..` : name}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip label={bid} sx={{ backgroundColor: "#27ae60" }} />
              <Chip label={offer} sx={{ backgroundColor: "#c0392b" }} />
            </Box>
            <Box
              sx={{ display: "flex", gap: 1, justifyContent: "space-around" }}
            >
              <Typography variant="caption">{`£${bidBackStake}`}</Typography>
              <Typography variant="caption">{`£${offerBackStake}`}</Typography>
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};

export default contractsCellRenderer;
