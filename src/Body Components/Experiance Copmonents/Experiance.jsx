import { Box, Grid, Typography } from "@mui/joy";
import React from "react";

export default function Experiance() {
  return (
    <Grid
      sx={{
        borderTop: 2,
        mt: 6,
        minWidth: 500,
        display: "flex",
        justifyContent: "center",
      }}
      md={12}
    >
      <Box
        sx={{
          backgroundColor: "#fcbf49",
          px: 3,
          py: 0.5,
          transform: "translateY(-18px)",
        }}
      >
        <Typography level="h6"> . EXPERIANCE . </Typography>
      </Box>
    </Grid>
  );
}
