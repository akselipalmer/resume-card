import { Grid, Typography } from "@mui/joy";
import React from "react";

export default function JobDiscriptions({ smallScreen }) {
  return (
    <Grid xs={12} md={8} pl={smallScreen ? 10 : 0} mb={10}>
      {!smallScreen && (
        <>
          <Typography level="body2" fontWeight={700} textAlign="center">
            FULL STACK WEB DEVELOPER
          </Typography>
          <Typography level="body3" textAlign="center">
            Remote
          </Typography>
          <Typography level="body3" textAlign="center" sx={{ mb: 1 }}>
            2023 - Current
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
            SERVER, BUSSER, EXPEDITER
          </Typography>
          <Typography level="body3" textAlign="center">
            Goochland, VA
          </Typography>
          <Typography level="body3" textAlign="center" sx={{ mb: 1 }}>
            2021 - 2023
          </Typography>
        </>
      )}
      <Typography level="body2" lineHeight={1.7}>
        I had the privilege to create positive relationships with our regulars
        and promote a high level of service, leading to an increase in referrals
        and walk-in business. I demonstrated adeptness in communication, and my
        experience in this role has further strengthened my capabilities in
        communication, teamwork, and customer satisfaction.
      </Typography>
    </Grid>
  );
}
