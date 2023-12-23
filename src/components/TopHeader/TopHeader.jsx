import { ChevronLeft } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TopHeader = ({ pageHeader }) => {
  const navigate = useNavigate();
  return (
    <Box display={"flex"} flexDirection={"row"} pb={2}>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-start"}>
        <IconButton onClick={() => navigate(-1)}>
          <ChevronLeft size="large" />
        </IconButton>
      </Box>
      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <Typography variant="h6">{pageHeader}</Typography>
      </Box>
    </Box>
  );
};
