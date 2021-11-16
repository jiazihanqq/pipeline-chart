import React from "react";

export interface IProps {
  label: string;
}
export const Track: React.FC<IProps> = (props) => {
  const { label } = props;
  return (
    <>
      <g>
        <text>{label}</text>
      </g>
    </>
  );
};
