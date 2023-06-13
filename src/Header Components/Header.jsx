import { Box, Grid, Sheet, Typography } from "@mui/joy";
import React from "react";
import Contact from "./Contact";
import Mailto from "./Mailto";

export default function Header() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      px={2}
      sx={{ backgroundColor: "rgba(190, 227, 219, 0.8)" }}
    >
      <Grid xs={12} sm={10} md={8} wrap="wrap" pt={10}>
        <Sheet sx={{ p: 2 }}>
          <Sheet
            sx={{
              py: 3,
              px: 2,
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
              mt={0.5}
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent={"center"}
            >
              <Grid
                xs={0}
                sm={3}
                height={2}
                sx={{ backgroundColor: "black" }}
              ></Grid>
              <Grid xs={12} sm={5.5} md={5} textAlign="center">
                <Typography level="h6">Full Stack Developer</Typography>
              </Grid>
              <Grid
                xs={0}
                sm={3}
                height={2}
                sx={{ backgroundColor: "black" }}
              ></Grid>
            </Grid>
          </Sheet>
        </Sheet>
      </Grid>
      <Grid container width="100%" my={2}>
        <Mailto />
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
