import { JobWithPosition, Pipeline } from "./interface";
import {jobHeight, pipelineDemoData, verticalPadding} from "./constant";
import React from "react";
import { Stage } from "./draw-stage";
import { PipelineNode } from "./draw-node";
import { PipelineLine } from "./draw-line";

interface IProps {
  pipelineData?: Pipeline;
  trackHeight?: number;
  canvasWidth?: number;
}
export const PipelineClass: React.FC<IProps> = (props) => {
  const {
    pipelineData = pipelineDemoData,
    trackHeight = 80,
    canvasWidth = window.innerWidth,
  } = props;
  //x, y 对应job左上角的位置坐标
  const matrix: JobWithPosition[] = [];
  const stage: { label: string; x: number }[] = [];
  const stageWidth = canvasWidth / pipelineData.stages.length;
  for (let i = 0; i < pipelineData.stages.length; i++) {
    const currentStage = pipelineData.stages[i];
    // 计算节点的横坐标
    const x = stageWidth * i;
    stage.push({ label: currentStage.title, x });
    for (let j = 0; j < currentStage.jobs.length; j++) {
      const currentJob = currentStage.jobs[j];
      const y = j * jobHeight + trackHeight;
      // 计算节点的垂直坐标
      matrix.push({ x, y, ...currentJob });
    }
  }
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ minHeight: 500 }}
        viewBox="0 0 100% 100%"
      >
        <g>
          {stage.map((stage) => {
            return <Stage label={stage.label} x={stage.x} />;
          })}
        </g>
        <g>
          {matrix.map((stage) => {
            return (
              <PipelineNode
                id={stage.id}
                x={stage.x}
                y={stage.y}
                name={stage.name}
                time={stage.time}
                status={stage.status}
              />
            );
          })}
        </g>
        <g>
          <PipelineLine matrix={matrix} />
        </g>
      </svg>
    </>
  );
};
