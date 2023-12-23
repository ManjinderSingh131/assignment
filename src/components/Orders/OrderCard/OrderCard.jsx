import { Inventory } from "@mui/icons-material";
import { Box, Card, Divider, Typography } from "@mui/material";
import { CustomizedButton } from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../route-paths";

export const OrderCard = ({ orderId, placedOn }) => {
  const navigate = useNavigate();
  const viewOrderDetailsClickHandler = () => {
    navigate(`${routePaths.ORDERS}/${orderId}`);
  };
  const trackOrderClickHandler = () => {
    navigate(`${routePaths.ORDERS}/${orderId}`, {
      state: {
        showTrackOrderDetails: true,
      },
    });
  };
  return (
    <Card
      variant="outlined"
      sx={{ mx: 2, my: 3, boxShadow: "10px 10px 10px rgba(0,0,0,0.05)" }}
    >
      <Box display="flex" flexDirection={"column"} px={2} py={1.5}>
        <Box display={"flex"} flexDirection={"row"}>
          <Inventory
            color="primary"
            sx={{
              borderRadius: "3rem",
              background: "#efefef",
              p: "0.3rem",
            }}
            fontSize="small"
          />
          <Box display={"flex"} flexDirection={"column"} pl={2}>
            <Typography variant="body2" fontWeight={"fontWeightBold"}>
              Order ID: {orderId}
            </Typography>
            <Typography variant="caption">Placed On: {placedOn}</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        display={"flex"}
        pt={1.5}
        pb={2}
        px={2}
        justifyContent={"space-between"}
      >
        <CustomizedButton
          variant={"contained"}
          label={"View Details"}
          onClick={viewOrderDetailsClickHandler}
        />
        <CustomizedButton
          variant={"outlined"}
          label={"Track Order"}
          onClick={trackOrderClickHandler}
        />
      </Box>
    </Card>
  );
};
