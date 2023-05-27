import { Box, Grid } from "@mui/joy";
import React from "react";
import Discription from "./Discription";
import Proficiency from "./Proficiency";
import Skills from "./Skills";
import Experiance from "./Experiance Copmonents/Experiance";
import Jobs from "./Experiance Copmonents/Jobs";
import JobDiscriptions from "./Experiance Copmonents/JobDiscriptions";

export default function Body() {
  return (
    <Grid container px={8}>
      <Discription />
      <Proficiency />
      <Skills />
      <Experiance />
      <Jobs />
      <JobDiscriptions />
    </Grid>
  );
}
