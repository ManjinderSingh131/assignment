import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { getSteps } from "./steps";
import { Typography } from "@mui/material";
import { CircleOutlined } from "@mui/icons-material";

const CustomTimelineItem = ({ isCompleted, name, isLast, icon }) => {
  return (
    <TimelineItem
      sx={{
        "&.MuiTimelineItem-root": {
          minHeight: "70px",
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot
          sx={{
            p: isCompleted ? "0.1rem" : "0 0.4rem",
            bgcolor: isCompleted ? "primary.main" : "#fefefe",
            boxShadow: "none",
          }}
        >
          {isCompleted ? (
            <Typography fontSize={"1rem"}>{icon}</Typography>
          ) : (
            <CircleOutlined
              fontSize="1rem"
              sx={{
                color: "#dedede",
              }}
            />
          )}
        </TimelineDot>
        {!isLast && (
          <TimelineConnector
            sx={{ bgcolor: isCompleted ? "primary.main" : "#efefef" }}
          />
        )}
      </TimelineSeparator>
      <TimelineContent
        sx={{
          py: isCompleted ? "12px" : "9px",
        }}
      >
        <Typography
          variant="caption"
          fontWeight={isCompleted ? "fontWeightBold" : "normal"}
        >
          {name}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default function StatusTimeline({ status }) {
  const [currentSteps, setCurrentSteps] = React.useState([]);
  React.useEffect(() => {
    if (status) {
      setCurrentSteps(getSteps(status));
    }
  }, [status]);
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {currentSteps &&
        currentSteps.length &&
        currentSteps.map((step) => {
          return (
            <CustomTimelineItem
              isCompleted={step.isCompleted}
              name={step.name}
              icon={step.icon}
              isLast={step.isLast}
              key={step.name}
            />
          );
        })}
    </Timeline>
  );
}
