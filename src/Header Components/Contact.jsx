import { Box, Grid, Typography } from "@mui/joy";
import React from "react";

export default function Contact({ name, value }) {
  return (
    <Grid
      md={3}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography level="h6"> . {name} . </Typography>
      <Typography level="body1">{value}</Typography>
    </Grid>
  );
}
