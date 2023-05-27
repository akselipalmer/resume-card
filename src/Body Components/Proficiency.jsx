import { Box, Grid, Typography } from "@mui/joy";
import React from "react";

export default function Proficiency() {
  return (
    <Grid
      sx={{
        border: 2,
        borderBottom: "none",
        minWidth: 500,
        display: "flex",
        justifyContent: "center",
      }}
      md={12}
      pb={1}
      mx={13}
    >
      <Box
        sx={{
          backgroundColor: "#fcbf49",
          px: 3,
          py: 0.5,
          transform: "translateY(-18px)",
        }}
      >
        <Typography level="h6"> . PROFICIENCY . </Typography>
      </Box>
    </Grid>
  );
}
