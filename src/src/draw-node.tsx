import React from "react";
import { JobWithPosition } from "./interface";
import { toHMS } from "./utils/timeformat";
import { jobHeight, jobWidth } from "./constant";

export const PipelineNode: React.FC<JobWithPosition> = (props) => {
  const { time, status, name, x, y } = props;
  const jobVerticleCenter = jobHeight / 2;
  return (
    <>
      <rect
        x={x}
        y={y}
        rx="10"
        ry="10"
        width={jobWidth}
        height={jobHeight}
        stroke="black"
        fill="transparent"
        strokeWidth="5"
      />

      <circle
        cx={x + jobVerticleCenter}
        cy={y + jobVerticleCenter}
        r="15"
        fill={status === "success" ? "green" : "gray"}
        stroke="black"
        strokeWidth="3"
      />
          <text x={x + 45} y={y + jobVerticleCenter + 5} fontSize={14}>
        {name}
      </text>
      <text x={x + 120} y={y + jobVerticleCenter + 5} fontSize={14}>
        {toHMS(Date.now() - time)}
      </text>
    </>
  );
};
