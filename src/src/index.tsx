import { Job, Pipeline } from "./interface";
import {jobHeight, pipelineDemoData, jobWidth} from "./constant";

class PipelineClass {
  //x, y 对应job左上角的位置坐标
  private matrix: ({ x: number; y: number } & Job)[];
  constructor(
    pipelineData: Pipeline = pipelineDemoData,
    trackHeight: 50,
  ) {
    this.matrix = []; //存放顶点坐标
    for (let i = 0; i < pipelineData.stages.length; i++) {
      const currentStage = pipelineData.stages[i];
      // 计算节点的横坐标
      const x = jobWidth * i;
      for (let j = 0; j < currentStage.jobs.length; j++) {
        const currentJob = currentStage.jobs[j];
        const y = j * jobHeight;
        // 计算节点的垂直坐标
        this.matrix.push({ x, y, ...currentJob });
      }
    }
  }
}
export { PipelineClass };
