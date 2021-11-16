import React, { ReactNode } from "react";
import { JobWithPosition } from "./interface";

export interface IProps {
  matrix: JobWithPosition[];
}

export const PipelineLine: React.FC<IProps> = (props) => {
  const { matrix } = props;
  const lines: ReactNode[] = [];
  matrix.forEach((item) => {
    const { linkTo, x: fromX, y: fromY } = item;
    if (linkTo?.length) {
      for (let i of linkTo) {
        const aimNode = matrix.filter((item) => {
          return item.id === i;
        });
        if (aimNode) {
          // 去重
          const { x: aimX, y: aimY } = aimNode[0];
          lines.push(
            <>
              <line
                x1={fromX + 200}
                y1={fromY + 25}
                x2={aimX}
                y2={aimY + 25}
                style={{ stroke: "red", strokeWidth: 2 }}
              />
            </>
          );
        }
      }
    }
    return null;
  });
  return <>{lines}</>;
};
