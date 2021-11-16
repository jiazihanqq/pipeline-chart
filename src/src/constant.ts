// 第一个节点的初始位置；
import { Pipeline } from "./interface";

// 高度
export const jobHeight = 50;
export const jobWidth = 200;
export const verticalPadding = 40;
export const pipelineDemoData: Pipeline = {
  stages: [
    {
      title: "编译",
      jobs: [
        {
          id: 1,
          name: "编译",
          status: "success",
          time: 100,
          linkTo: [2]
        },
      ],
    },
    {
      title: "部署",
      jobs: [
        {
          id: 2,
          name: "部署",
          status: "success",
          time: 1000,
          linkTo: [3, 4]
        },
      ],
    },
    {
      title: "代码扫描和检查",
      jobs: [
        {
          id: 3,
          name: "STC",
          status: "success",
          time: 5000,
          linkTo: [5, 6]
        },
        {
          id: 4,
          name: "PMD",
          status: "success",
          time: 9000,
          linkTo: [5, 6]
        },
      ],
    },
    {
      title: "集成测试",
      jobs: [
        {
          id: 5,
          name: "集成测试",
          status: "fail",
          time: 10000,
        },
        {
          id: 6,
          name: "单元测试",
          status: "fail",
          time: 20000,
        },
      ],
    },
  ],
};
