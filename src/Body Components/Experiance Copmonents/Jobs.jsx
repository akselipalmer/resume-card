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
          JOB POSITION HERE
        </Typography>
        <Typography level="body3">location of the job</Typography>
        <Typography level="body3">2020 - 2022</Typography>
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
      <Box sx={{ borderRight: 2 }}>
        <Typography level="body2" fontWeight={700}>
          JOB POSITION HERE
        </Typography>
        <Typography level="body3">location of the job</Typography>
        <Typography level="body3">2020 - 2022</Typography>
      </Box>
    </Grid>
  );
}
