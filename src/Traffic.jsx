import { useState } from "react";
import { Light } from "./Light";

export const Traffic = ({ colors = [] }) => {
  const [currentColor, setCurrentColor] = useState("");
  return (
    <div className="traffic">
      {colors.map(({ id, color, name }) => (
        <Light
          key={id}
          color={color}
          name={name}
          light={color === currentColor}
          onClick={() => setCurrentColor(color)}
        />
      ))}
    </div>
  );
};
