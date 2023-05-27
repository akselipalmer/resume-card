import { Box, Typography } from "@mui/joy";
import React from "react";

export default function Discription() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={3}>
      <Typography level="h5"> . PROFILE . </Typography>
      <Typography level="body1" lineHeight={1.8} textAlign="center" mt={2}>
        I am a highly experienced Full Stack Web Developer with extensive
        experience in designing, building, and deploying various web
        applications. I have a proven track record of success in creating
        interactive user interfaces using React, Material UI, Tailwind UI, and
        other UI libraries.
      </Typography>
    </Box>
  );
}
