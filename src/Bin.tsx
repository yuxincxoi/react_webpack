import React, { CSSProperties } from "react";

interface BinProps {
  h1TextNode: string[];
}

const Bin: React.FC<BinProps> = ({ h1TextNode }) => {
  let style: CSSProperties = {
    color: "blue",
  };

  return (
    <div>
      <h1 style={style}>{h1TextNode}</h1>
    </div>
  );
};

export default Bin;
