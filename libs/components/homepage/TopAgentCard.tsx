import React from "react";
import { Stack, Box } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <Box className={"agent-img"}>
       <Box
  className={"agent-img"}
  style={{
    backgroundImage: `url("/img/profile/girl.svg")`,
  }}
/>
      </Box>
      <Box className={"agent-info"}>
        <strong className={"name"}>Martin</strong>
        <span className={"type"}>AGENT</span>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;