import { Box, Grid, Typography } from "@mui/joy";
import React from "react";

export default function Levels() {
  const levels = [
    { name: "Material UI", value: 85 },
    { name: "Google Firebase", value: 90 },
    { name: "React", value: 95 },
    { name: "JAVASCRIPT", value: 95 },
  ];

  return (
    <Grid md={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderLeft: 2,
          borderRight: 2,
          mx: 2,
          mt: 3,
          px: 4,
        }}
      >
        {" "}
        {levels.map(({ name, value }, index) => (
          <>
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
          </>
        ))}
      </Box>
    </Grid>
  );
}
