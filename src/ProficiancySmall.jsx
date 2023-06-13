import { Box, Grid, Sheet, Typography } from "@mui/joy";
import React from "react";

export default function ProficiencySmall() {
  return (
    <Grid
      sx={{
        border: 2,
        borderBottom: "none",
        borderRight: "none",
        borderLeft: "none",
        display: "flex",
        justifyContent: "center",
      }}
      xs={12}
      mt={5}
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
          <Typography level="h6"> . PROFICIENCY . </Typography>
        </Sheet>
      </Box>
    </Grid>
  );
}
