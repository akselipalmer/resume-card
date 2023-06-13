import { Box, Grid, Typography } from "@mui/joy";
import React from "react";

export default function Jobs() {
  return (
    <Grid md={4}>
      <Box
        sx={{
          height: 10,
          width: 10,
          backgroundColor: "black",
          position: "relative",
          top: 0,
          left: "100%",
          borderRadius: 100,
          transform: "translateX(-6px)",
        }}
      ></Box>
      <Box sx={{ borderRight: 2, pb: 10 }}>
        <Typography level="body2" fontWeight={700}>
          FULL STACK WEB DEVELOPER
        </Typography>
        <Typography level="body3">Remote</Typography>
        <Typography level="body3">2023 - Current</Typography>
      </Box>
      <Box
        sx={{
          height: 10,
          width: 10,
          backgroundColor: "black",
          position: "relative",
          top: 0,
          left: "100%",
          borderRadius: 100,
          transform: "translateX(-6px)",
        }}
      ></Box>
      <Box sx={{ borderRight: 2, minHeight: 120 }}>
        <Typography level="body2" fontWeight={700}>
          SERVER, BUSSER, EXPEDITER
        </Typography>
        <Typography level="body3">Goochland, VA</Typography>
        <Typography level="body3">2021 - 2023</Typography>
      </Box>
    </Grid>
  );
}
