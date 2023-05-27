import { Grid, Typography } from "@mui/joy";
import React from "react";

export default function JobDiscriptions() {
  return (
    <Grid md={8} pl={10} mb={10}>
      <Typography level="body2" pb={8} lineHeight={1.7}>
        I am creating an enterprise grade, full-stack collection management
        system from the ground up. My roles include designing, developing, and
        deploying the system. I am using React, Material UI, Tailwind UI, and
        other UI libraries to create an interactive user interface.
      </Typography>
      <Typography level="body2" lineHeight={1.7}>
        Additionally, I am utilizing Firebase, Google Cloud, Git, APIs, and web
        architectures to ensure all components of the system work together
        seamlessly. My ability to communicate and learn complex systems in
        simple terms has allowed me to ensure the project is successful.
      </Typography>
    </Grid>
  );
}
