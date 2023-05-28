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
      sx={{ backgroundColor: "rgba(190, 227, 219, 0.8)" }}
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
            <Grid
              container
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              px={2}
            >
              <Grid
                md={3}
                height={2}
                mr={3}
                sx={{ backgroundColor: "black" }}
              ></Grid>
              <Grid md={4} display="flex" justifyContent="center">
                <Typography level="h6">Full Stack Developer</Typography>
              </Grid>
              <Grid
                md={3}
                height={2}
                ml={3}
                sx={{ backgroundColor: "black" }}
              ></Grid>
            </Grid>
          </Sheet>
        </Sheet>
      </Grid>
      <Grid container width="100%" my={2}>
        <Contact name="EMAIL" value="constox@gmail.com" />
        <Contact name="GITHUB" value="https://github.com/akselipalmer" />
        <Contact
          name="LINKEDIN"
          value="https://www.linkedin.com/in/akseli-palmer-666116122/"
        />
        <Contact
          name="WEBSITE"
          value="https://akselipalmer.github.io/portfolio/"
        />
      </Grid>
    </Grid>
  );
}
