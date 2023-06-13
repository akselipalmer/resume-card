import { Box, Grid, Typography } from "@mui/joy";
import React from "react";
import Proficiency from "../Proficiency";

export default function Levels({ smallScreen }) {
  const levels = [
    { name: "MATERIAL UI", value: 85 },
    { name: "GOOGLE FIREBASE", value: 90 },
    { name: "REACT", value: 95 },
    { name: "JAVASCRIPT", value: 95 },
  ];

  return (
    <Grid xs={12} md={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderLeft: smallScreen ? 2 : 0,
          borderRight: smallScreen ? 2 : 0,
          mx: 2,
          mt: smallScreen ? 3 : 0,
          px: 4,
        }}
      >
        {" "}
        {levels.map(({ name, value }, index) => (
          <Box width="100%" textAlign="center" key={index}>
            <Typography level="body2" mt={index === 0 ? 0 : 1}>
              {name}
            </Typography>
            <Box sx={{ height: 8, width: "100%", border: 2, mt: 1 }}>
              <Box
                sx={{
                  backgroundColor: "black",
                  height: "100%",
                  width: `${value}%`,
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Grid>
  );
}
