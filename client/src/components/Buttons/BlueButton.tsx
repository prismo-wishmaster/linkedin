import React from "react";
import type { IconType } from "react-icons";

interface BlueButtonProps {
  text: string;
  icon: IconType;
}

export const BlueButton = ({ text, icon }: BlueButtonProps) => {
  return (
    <button className="flex gap-1 items-center rounded-full bg-[#0a66c2] text-white px-3.5 py-2 hover:bg-[#004182]">
      {React.createElement(icon, { size: 17 })}
      <p className="text-[0.95rem] font-semibold leading-none">{text}</p>
    </button>
  );
};
