import React from "react";

export interface IProps {
  label: string;
  x: number;
}
export const Stage: React.FC<IProps> = (props) => {
  const { label, x } = props;
  return (
    <>
      <text x={x} y={50} fontSize={30}>
        {label}
      </text>
    </>
  );
};
