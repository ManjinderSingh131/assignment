import { useLocation, useParams } from "react-router-dom";
import { TopHeader } from "../TopHeader/TopHeader";
import { useEffect, useState } from "react";
import { getOrderDetails } from "../Orders/service/service";
import { AddressDetails } from "./AddressDetails/AddressDetails";
import { CustomizedCard } from "./Card/CustomizedCard";
import { ModeOfPayment } from "./ModeOfPayment/ModeOfPayment";
import { PricingSummary } from "./PricingSummary/PricingSummary";
import { CustomizedButton } from "../Button/Button";
import { Box } from "@mui/material";
import TrackOrderDrawer from "../TrackOrderDrawer/TrackOrderDrawer";

export const OrderDetails = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [showTrackingDetails, setShowTrackingDetails] = useState(false);
  const location = useLocation();

  const redirectToMaps = (srclat, srclng, dstlat, dstlng) => {
    console.log(srclat, srclng, dstlat, dstlng)
    const url = `https://google.com/maps/dir/?api=1&map_action=map&origin=${srclat},${srclng}&destination=${dstlat},${dstlng}`;
    console.log(url)
    window.open(
      url,
      "_blank",
      "noreferrer"
    );
  };

  useEffect(() => {
    if (orderId) {
      const currentOrderDetails = getOrderDetails(orderId);
      setOrderDetails(currentOrderDetails);
    }
  }, [orderId]);

  useEffect(() => {
    if (
      orderDetails &&
      location.state &&
      location.state.showTrackOrderDetails === true
    ) {
      setShowTrackingDetails(true);
    }
  }, [location, orderDetails]);
  return (
    <>
      <TopHeader pageHeader={"Order Details"} />
      {orderDetails && (
        <>
          <CustomizedCard>
            <AddressDetails
              recipient={orderDetails.recipient}
              sender={orderDetails.sender}
            />
          </CustomizedCard>
          <CustomizedCard>
            <ModeOfPayment payementMode={"Wallet"} />
          </CustomizedCard>
          <CustomizedCard>
            <PricingSummary
              cost={orderDetails.cost}
              shipper={orderDetails.Shipper}
            />
          </CustomizedCard>
          <Box display={"flex"} justifyContent={"space-between"} p={2}>
            <CustomizedButton
              label={"Track Order"}
              variant={"contained"}
              onClick={() => setShowTrackingDetails(true)}
            />
            <CustomizedButton
              label={"Show On Map"}
              variant={"contained"}
              onClick={() =>
                redirectToMaps(
                  orderDetails.sender.lat,
                  orderDetails.sender.lng,
                  orderDetails.recipient.lat,
                  orderDetails.recipient.lng
                )
              }
            />
          </Box>
          <TrackOrderDrawer
            openDrawer={showTrackingDetails}
            setOpenDrawer={setShowTrackingDetails}
            orderId={orderDetails.order_id}
            shipper={orderDetails.Shipper}
            status={orderDetails.status}
          />
        </>
      )}
    </>
  );
};
