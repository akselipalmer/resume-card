import { Box, Button, Link, Tooltip, Typography } from "@mui/joy";
import React from "react";
export default function InspiredBy() {
  return (
    <Tooltip
      title="A huge thanks for the design inspired by this Dribbble Resume. Check out their page to view the original design and to see more awesome resumes! 

I built this page using React and Joy UI

    "
      sx={{ maxWidth: 400, px: 2, py: 1 }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        flexWrap="wrap"
        top={5}
        left="50%"
        py={0.1}
        px={2}
        sx={{
          transform: "translateX(-50%)",
        }}
      >
        <Typography>Inspired By</Typography>
        <Button
          sx={{ color: "#09090D" }}
          variant="text"
          component={Link}
          href="https://dribbble.com/shots/21147961-Minimal-Resume-Template?utm_source=Clipboard_Shot&utm_campaign=Resume-CV&utm_content=Minimal%20Resume%20Template&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Resume-CV&utm_content=Minimal%20Resume%20Template&utm_medium=Social_Share"
        >
          Checkout
        </Button>
      </Box>
    </Tooltip>
  );
}
