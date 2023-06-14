import { Box, Button, Grid, Link, Tooltip, Typography } from "@mui/joy";
import React from "react";

export default function Mailto() {
  const [tooltipOpen, settooltipOpen] = React.useState(false);
  function handleOpenTooltip() {
    function handleClose() {
      settooltipOpen(false);
    }

    navigator.clipboard.writeText("constox@gmail.com");
    settooltipOpen(true);
    setTimeout(handleClose, 1500);
  }

  return (
    <Grid xs={6} sm={3} mb={1} display="flex" justifyContent="center">
      <Tooltip
        title="Copied to Clipboard"
        size="sm"
        disableHoverListener
        arrow
        open={tooltipOpen}
      >
        <Button
          size="lg"
          onClick={handleOpenTooltip}
          variant="text"
          sx={{
            borderRadius: 0,
            color: "#09090D",
            ":hover": { color: "white" },
          }}
        >
          . EMAIL .
        </Button>
      </Tooltip>
    </Grid>
  );
}
