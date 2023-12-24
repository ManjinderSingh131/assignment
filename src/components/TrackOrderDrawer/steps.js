export const steps = [
  {
    name: "Initiated",
    icon: <>📦</>,
  },
  {
    name: "Out For Pickup",
    icon: <>🚗</>,
  },
  {
    name: "Picked Up",
    icon: <>🫳</>,
  },
  {
    name: "At Shipmantra Hub",
    icon: <>🏨</>,
  },
  {
    name: "Handed Over to Shipper",
    icon: <>🫡</>,
  },
  {
    name: "In Transit to Destination City",
    icon: <>🚘</>,
  },
  {
    name: "Handed Over To Shipmantra",
    icon: <>🫳</>,
  },
  {
    name: "At Shipmantra Destination Hub",
    icon: <>🏨</>,
  },
  {
    name: "Out For Delivery",
    icon: <>🚀</>,
  },
  {
    name: "Delivered",
    icon: <>🎉</>,
  },
];

export const getSteps = (currentStatus, shipper) => {
  const currentStepIndex = steps.findIndex(
    (step) => step.name.toLowerCase() === currentStatus.toLowerCase()
  );
  const currentStatusSteps = steps.map((step, index) => {
    if (index <= currentStepIndex) {
      step.isCompleted = true;
    } else {
      step.isCompleted = false;
    }
    if (index === steps.length - 1) {
      step.isLast = true;
    }
    if (shipper) {
      step.name = step.name.replaceAll("Shipper", shipper);
    }
    return step;
  });
  return currentStatusSteps;
};
