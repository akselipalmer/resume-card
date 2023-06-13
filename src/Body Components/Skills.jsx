import { Box, Grid, Typography } from "@mui/joy";
import React from "react";
import Educations from "./Skills Components/Educations";
import Levels from "./Skills Components/Levels";
import Expertise from "./Skills Components/Expertise";
import ProficiencySmall from "../ProficiancySmall";

export default function Skills({ smallScreen }) {
  return (
    <>
      <Educations smallScreen={smallScreen} />
      {!smallScreen && <ProficiencySmall />}
      <Levels smallScreen={smallScreen} />
      <Expertise smallScreen={smallScreen} />
    </>
  );
}
