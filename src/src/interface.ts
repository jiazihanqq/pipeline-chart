export interface Pipeline {
  stages: Stage[];
}

export interface Stage {
  title: string;
  jobs: Job[];
}

export interface Job {
  name: string;
  status: "success" | "fail";
  time: number; //毫秒时间戳
  id: number;
  linkTo?: number[];
}
export interface JobWithPosition extends Job {
  x: number;
  y: number;

}
