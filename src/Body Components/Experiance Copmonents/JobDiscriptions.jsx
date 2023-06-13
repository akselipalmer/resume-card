import { Grid, Typography } from "@mui/joy";
import React from "react";

export default function JobDiscriptions({ smallScreen }) {
  return (
    <Grid xs={12} md={8} pl={smallScreen ? 10 : 0} mb={10}>
      {!smallScreen && (
        <>
          <Typography level="body2" fontWeight={700} textAlign="center">
            JOB POSITION HERE
          </Typography>
          <Typography level="body3" textAlign="center">
            location of the job
          </Typography>
          <Typography level="body3" textAlign="center" sx={{ mb: 1 }}>
            2020 - 2022
          </Typography>
        </>
      )}
      <Typography level="body2" pb={smallScreen ? 8 : 4} lineHeight={1.7}>
        I am creating an enterprise grade, full-stack collection management
        system from the ground up. My roles include designing, developing, and
        deploying the system. I am using React, Material UI, Tailwind UI, and
        other UI libraries to create an interactive user interface.
      </Typography>
      {!smallScreen && (
        <>
          <Typography level="body2" fontWeight={700} textAlign="center">
            JOB POSITION HERE
          </Typography>
          <Typography level="body3" textAlign="center">
            location of the job
          </Typography>
          <Typography level="body3" textAlign="center" sx={{ mb: 1 }}>
            2020 - 2022
          </Typography>
        </>
      )}
      <Typography level="body2" lineHeight={1.7}>
        Additionally, I am utilizing Firebase, Google Cloud, Git, APIs, and web
        architectures to ensure all components of the system work together
        seamlessly. My ability to communicate and learn complex systems in
        simple terms has allowed me to ensure the project is successful.
      </Typography>
    </Grid>
  );
}
