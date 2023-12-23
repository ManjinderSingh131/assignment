import { Box, Card } from "@mui/material";

export const CustomizedCard = ({ children, scrollable, mx, my, p }) => {
  return (
    <Card
      variant="oulined"
      sx={{
        mx: mx ? mx : 2,
        my: my ? my : 2,
        boxShadow: "10px 10px 10px rgba(0,0,0,0.05)",
        overflowY: scrollable ? "scroll" : "hidden",
      }}
    >
      <Box p={p ? p : 2}>{children}</Box>
    </Card>
  );
};
