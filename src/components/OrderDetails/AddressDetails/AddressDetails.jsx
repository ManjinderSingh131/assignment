import { Box, Chip, Grid, Typography } from "@mui/material";
import { CardHeadings } from "../CardHeadings/CardHeadings";
import { Circle, LocationOn } from "@mui/icons-material";

const iconStyle = {
  fontSize: "1rem",
  pt: "0.2rem",
};

export const AddressTypeIcon = ({ type }) => {
  return type === "sender" ? (
    <Circle color="success" sx={iconStyle} />
  ) : (
    <LocationOn color="error" sx={iconStyle} />
  );
};

export const CustomizedChip = ({ type }) => {
  return (
    <Chip
      variant="outlined"
      color="success"
      sx={{
        bgcolor: "#f3fff3",
        color: "#1bb17f",
        border: "1px solid #f3f3f3",
        textTransform: "uppercase",
        fontWeight: 500,
      }}
      size="small"
      label={type === "sender" ? "Agent Pickup" : "Agent Delivery"}
    />
  );
};

export const AddressPart = ({ name, address, type, phone }) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <AddressTypeIcon type={type} /> &nbsp;
          <Typography variant="body2">{name}</Typography>
        </Box>
        <CustomizedChip type={type} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        mx={1}
        px={1.5}
        pb={2}
        borderLeft={type === "sender" ? "2px dashed #bbb" : "transparent"}
      >
        <Typography variant="caption">{phone}</Typography>
        <Typography variant="caption">{address}</Typography>
      </Box>
    </Box>
  );
};

export const AddressDetails = ({ sender, recipient }) => {
  return (
    <Grid container>
      <Box width={"100%"}>
        <CardHeadings>Address Details</CardHeadings>
        <AddressPart
          name={sender.name}
          phone={sender.phone}
          address={sender.address}
          type="sender"
        />
        <AddressPart
          name={recipient.name}
          phone={recipient.phone}
          address={recipient.address}
          type="recipient"
        />
      </Box>
    </Grid>
  );
};
