import { Box, Grid, Sheet, Typography } from "@mui/joy";
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
      mt={3}
      md={12}
      pb={1}
      mx={13}
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
