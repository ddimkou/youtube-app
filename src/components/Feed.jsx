import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

function Feed() {
  // const [selectedCategory, setSelectedCategory] = useState("New");

  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);

  //   return () => {
  //     second;
  //   };
  // }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Dimkou Dimitrios
        </Typography>
      </Box>
      <Box p={2} sx={{ overlowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
}

export default Feed;
