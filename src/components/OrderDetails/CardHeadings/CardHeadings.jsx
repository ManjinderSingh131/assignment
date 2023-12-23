import { Typography } from "@mui/material";
import { green } from "@mui/material/colors";

export const CardHeadings = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: "1.1rem",
        fontWeight: 400,
        textTransform: "uppercase",
      }}
      color={green[600]}
      pb={'1rem'}
    >
      {children}
    </Typography>
  );
};
