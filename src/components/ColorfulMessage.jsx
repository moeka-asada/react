import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color: color,
    fontsize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
