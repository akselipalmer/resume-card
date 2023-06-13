import { Box, Grid, Stack, Typography } from "@mui/joy";
import React from "react";

export default function Expertise({ smallScreen }) {
  return (
    <Grid md={4} xs={12}>
      <Box
        sx={{ border: 2 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={smallScreen ? 0 : 4}
      >
        <Typography level="h5"> . EXPERTISE . </Typography>
      </Box>
      <Stack alignItems="center" mt={2}>
        <Typography level="body3">YOUR SKILLS HERE</Typography>
        <Typography level="body3">ABOUT YOUR SKILLS HERE</Typography>
        <Typography level="body3">YOUR SKILLS HERE</Typography>
        <Typography level="body3">ABOUT YOUR SKILLS HERE</Typography>
        <Typography level="body3">YOUR SKILLS HERE</Typography>
        <Typography level="body3">ABOUT YOUR SKILLS HERE</Typography>
      </Stack>
    </Grid>
  );
}
