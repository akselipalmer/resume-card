import { Box, Grid, Sheet, Typography } from "@mui/joy";
import React from "react";
import Contact from "./Contact";

export default function Header() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      px={2}
      sx={{ backgroundColor: "#8ecae6" }}
    >
      <Grid md={12} wrap="wrap" px={18} pt={10}>
        <Sheet sx={{ p: 2 }}>
          <Sheet
            sx={{
              py: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: 2,
            }}
          >
            <Typography level="h2">Hello. I'm Akseli Palmer</Typography>
            <Typography level="h6">Full Stack Developer</Typography>
          </Sheet>
        </Sheet>
      </Grid>
      <Grid md={12} sx={{ display: "flex" }} py={4} px={3}>
        <Contact name="EMAIL" value="constox@gmail.com" />
        <Contact name="email" value="constox@gmail.com" />
        <Contact name="email" value="constox@gmail.com" />
        <Contact name="email" value="constox@gmail.com" />
      </Grid>
    </Grid>
  );
}
