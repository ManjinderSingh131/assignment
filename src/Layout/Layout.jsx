import { Outlet } from "react-router-dom";
import React from "react";
import BottomNavigationComponent from "../components/Navigation/Navigation";
import { Box, Paper } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={1}
      >
        <Box display={"flex"} flexDirection={"column"} sx={{
          maxWidth: 500,
          bgcolor: "#f9f9f9",
          height: "100%",
          minHeight: "94vh",
          pb: 5
        }}>
          <Box p={1}>
            <Outlet />
          </Box>
          <Paper elevation={3}>
            <BottomNavigationComponent />
          </Paper>
        </Box>
      </Box>
    </>
  );
};
