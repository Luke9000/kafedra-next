import React from "react";
import LegendData from "./LegendData";
import Legend from "./Legend";
import useWindowSize from '../../../../hooks/useWindowSize';

const LegendsList = () => {
  const screen = useWindowSize();

  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "var(--spacing-xl)",
    width:"100%"
  };

  return (
    <div style={style}>
      {LegendData.map((item) => (
        <Legend
          key={item.name}
          fill={item.color}
          text={item.name}
          size={screen.width > 800 ? screen.width / 87 : 20}
        ></Legend>
      ))}
    </div>
  );
};

export default LegendsList;
