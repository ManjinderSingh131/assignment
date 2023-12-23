export const getOrders = () => {
  return [
    {
      order_id: "APSRTC-VIS-VIJ-MELTCA6865",
      createdAt: "2023-10-10",
      sender: {
        name: "Susmit",
        phone: "+91 9201222233",
        address:
          "CMR Central Maddilapalem, Resapuvanipulem Road, Resapuvanipalem, Maddilapalem, Visakhapatnam, Andrhra Pradesh, India 530013",
        lat: "17.775533255282017",
        lng: "83.30453303815138",
      },
      recipient: {
        name: "Venenali",
        phone: "+91 9201222233",
        address:
          "CMR Shopping Mall, MG Road, opposite PVP Square Mall, Opposite Kalanjali, Labbipet, Vijayawada, Andhra Pradesh, India 520010",
        lat: "16.537300230761318",
        lng: "80.64725859430322",
      },
      Shipper: "APSRTC",
      status: "initiated",
      cost: {
        transit: 109.0,
        pickup: 90,
        delivery: 80,
        gst: 34.62,
      },
    },
    {
      order_id: "APSRTC-NIS-KOS-MELTCA681132",
      createdAt: "2023-10-10",
      sender: {
        name: "Manjinder",
        phone: "+91 9201222233",
        address: "D-Block, Nathu Pura, Burari Delhi, 110084",
        lat: "28.77332312082606",
        lng: "77.17560459560583",
      },
      recipient: {
        name: "Manoj",
        phone: "+91 8728822222",
        address: "Manav Chowk Ambala, Haryana 134003",
        lat: "30.364085700807898",
        lng: "76.76491319510482",
      },
      Shipper: "APSRTC",
      status: "Delivered",
      cost: {
        transit: 109.0,
        pickup: 90,
        delivery: 80,
        gst: 34.62,
      },
    },
  ];
};

export const getOrderDetails = (orderId) => {
  const orders = getOrders();
  const order = orders.find((order) => order.order_id === orderId);
  return order;
};
