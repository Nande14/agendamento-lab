import { defaultIconProps } from "@/types/iconTypes";
import { memo } from "react";

const UnMemoizedHamburguerMenuIcon = ({width = 28, height = 28}: defaultIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="32.4" width="28" height="3.2" rx="1.6" fill="black" />
      <rect x="10" y="22.4" width="28" height="3.2" rx="1.6" fill="black" />
      <rect x="10" y="12.4" width="28" height="3.2" rx="1.6" fill="black" />
    </svg>
  );
};

export const HamburguerMenuIcon = memo(UnMemoizedHamburguerMenuIcon);
