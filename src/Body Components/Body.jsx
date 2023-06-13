import { Box, Grid } from "@mui/joy";
import React from "react";
import Discription from "./Discription";
import Proficiency from "./Proficiency";
import Skills from "./Skills";
import Experiance from "./Experiance Copmonents/Experiance";
import Jobs from "./Experiance Copmonents/Jobs";
import JobDiscriptions from "./Experiance Copmonents/JobDiscriptions";
import { useMediaQuery } from "@mui/material";
export default function Body() {
  const smallScreen = useMediaQuery("(min-width:900px)", { noSsr: true });
  return (
    <Grid container px={8}>
      <Discription />
      {smallScreen && <Proficiency />}
      <Skills smallScreen={smallScreen} />
      <Experiance />
      {smallScreen && <Jobs />}
      <JobDiscriptions smallScreen={smallScreen} />
    </Grid>
  );
}
