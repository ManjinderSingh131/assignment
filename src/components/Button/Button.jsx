import { Button } from "@mui/material";

export const CustomizedButton = ({ label, onClick, variant }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        borderRadius: "3rem",
        textTransform: "capitalize",
        color: variant === "contained" ? "#fefefe" : "primary"
      }}
    >
      {label}
    </Button>
  );
};
