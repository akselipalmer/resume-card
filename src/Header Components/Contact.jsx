import { Box, Grid, Link, Typography } from "@mui/joy";
import React from "react";

export default function Contact({ name, value }) {
  return (
    <Grid xs={6} sm={3} mb={1} display="flex" justifyContent="center">
      <Link
        level="h6"
        href={value}
        underline="none"
        target="_blank"
        rel="noopener"
        sx={{
          borderRadius: 0,
          color: "black",
          ":hover": { color: "white" },
        }}
      >
        . {name} .
      </Link>
    </Grid>
  );
}
