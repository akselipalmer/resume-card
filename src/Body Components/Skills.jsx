import { Box, Grid, Typography } from "@mui/joy";
import React from "react";
import Educations from "./Skills Components/Educations";
import Levels from "./Skills Components/Levels";
import Expertise from "./Skills Components/Expertise";

export default function Skills() {
  return (
    <>
      <Educations />
      <Levels />
      <Expertise />
    </>
  );
}
