import { Box, Grid, Typography } from "@mui/joy";
import React from "react";

export default function Educations() {
  return (
    <Grid md={4}>
      <Box
        sx={{ border: 2 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography level="h5"> . EDUCATIONS . </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Typography level="body2" fontWeight={650}>
          FRONT END DEVELOPMENT
        </Typography>
        <Typography level="body3">Scrimba</Typography>
        <Typography level="body3" mt={0.2}>
          2022 - 2022
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Typography level="body2" fontWeight={650}>
          LEADERSHIP
        </Typography>
        <Typography level="body3">Global Awakening</Typography>
        <Typography level="body3" mt={0.2}>
          2017- 2020
        </Typography>
      </Box>
    </Grid>
  );
}
