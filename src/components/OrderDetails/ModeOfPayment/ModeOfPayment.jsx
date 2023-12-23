import { Box, Typography } from "@mui/material";
import { CardHeadings } from "../CardHeadings/CardHeadings";

export const ModeOfPayment = ({ payementMode }) => {
  return (
    <>
      <CardHeadings>Mode of Payment </CardHeadings>
      <Box pl={2}>
        <Typography sx={{ fontWeight: 500 }}>{payementMode}</Typography>
      </Box>
    </>
  );
};
