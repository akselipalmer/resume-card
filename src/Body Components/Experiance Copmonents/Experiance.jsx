import { Box, Grid, Sheet, Typography } from "@mui/joy";
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
          backgroundColor: "white",
          transform: "translateY(-18px)",
        }}
      >
        <Sheet
          sx={{ backgroundColor: "rgba(255, 214, 186, 0.5)", px: 3, py: 0.5 }}
        >
          <Typography level="h6"> . EXPERIANCE . </Typography>
        </Sheet>
      </Box>
    </Grid>
  );
}
