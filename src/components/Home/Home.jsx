import { Box, Typography } from "@mui/material";

export const ToBeDeveloped = () => {
  return (
    <Box p={2} m={2} border={"2px dashed gray"}>
      <Typography>To be developed 🕒</Typography>
    </Box>
  );
};

export const Home = () => {
  return <ToBeDeveloped />;
};
