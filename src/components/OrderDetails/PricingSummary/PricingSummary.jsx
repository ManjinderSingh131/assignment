import { Box, Typography } from "@mui/material";
import { CardHeadings } from "../CardHeadings/CardHeadings";

export const PricingSummary = ({ cost, shipper }) => {
  const getTotal = (cost) => {
    return Object.values(cost).reduce((partialSum, a) => partialSum + a, 0);
  };
  return (
    <>
      <CardHeadings>Pricing Summary</CardHeadings>
      <PricePart
        costType={`${shipper} Cost`}
        price={cost.transit}
        showBorderBottom={true}
      />
      <PricePart costType={"Door Pickup Cost"} price={cost.pickup} />
      <PricePart costType={"Door Delivery Cost"} price={cost.delivery} />
      <PricePart costType={"GST"} price={cost.gst} showBorderBottom={true} />
      <PricePart costType={"Total"} price={getTotal(cost)} isTotal={true} />
    </>
  );
};

export const PricePart = ({ costType, price, showBorderBottom, isTotal }) => {
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
      px={1}
      py={1}
      borderBottom={showBorderBottom ? "2px dashed #efefef" : "transparent"}
    >
      <Typography variant={isTotal ? "h6" : "body2"}>
        <Box
          sx={{
            color: isTotal ? "black" : "#9b9b9b",
            fontWeight: 600,
          }}
        >
          {costType}
        </Box>
      </Typography>
      <Typography variant={isTotal ? "h6" : "caption"}>
        Rs. {parseFloat(price).toFixed(2)}
      </Typography>
    </Box>
  );
};
