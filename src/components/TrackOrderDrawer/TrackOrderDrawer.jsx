import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Grid, IconButton, Typography } from "@mui/material";
import { Close, Inventory2 } from "@mui/icons-material";
import { CustomizedCard } from "../OrderDetails/Card/CustomizedCard";
import StatusTimeline from "./StatusTimeline";

export const OrderIdShipperCardRow = ({ label, value }) => {
  return (
    <Grid container pt={0.5}>
      <Grid item xs={2.5}>
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.7rem",
          }}
        >
          {label}:
        </Typography>
      </Grid>
      <Grid item xs={9.5}>
        <Typography
          variant="caption"
          sx={{ fontWeight: 500, wordBreak: "break-all", fontSize: "0.7rem" }}
        >
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export const OrderIdShipperCard = ({ orderId, shipper, setOpenDrawer }) => {
  return (
    <>
      <Grid container pt={2} px={2}>
        <Grid item xs={11} display={"flex"} justifyContent={"center"}>
          <Typography variant="h6">Orders Tracking</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <Close />
          </IconButton>
        </Grid>
      </Grid>
      <CustomizedCard>
        <Grid container pb={5}>
          <Grid item xs={1}>
            <Box
              p={1}
              mt={1}
              bgcolor={"#fef3fe"}
              borderRadius={"3rem"}
              height={18}
              width={18}
            >
              <Inventory2 fontSize="small" color="primary" />
            </Box>
          </Grid>
          <Grid item xs={11}>
            <Box display={"flex"} flexDirection={"column"} pl={3}>
              <OrderIdShipperCardRow label={"Order ID"} value={orderId} />
              <OrderIdShipperCardRow label={"Shipper"} value={shipper} />
            </Box>
          </Grid>
        </Grid>
      </CustomizedCard>
    </>
  );
};

export default function TrackOrderDrawer({
  openDrawer,
  setOpenDrawer,
  orderId,
  shipper,
  status,
}) {
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"bottom"}
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
          sx={{
            ".MuiDrawer-paper": {
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              bgcolor: "#f6f6f6",
              maxHeight: "90vh"
            },
          }}
        >
          <OrderIdShipperCard
            orderId={orderId}
            shipper={shipper}
            setOpenDrawer={setOpenDrawer}
          />
          <CustomizedCard scrollable={true} p={0.3} my={1}>
            <StatusTimeline status={status} shipper={shipper}/>
          </CustomizedCard>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
