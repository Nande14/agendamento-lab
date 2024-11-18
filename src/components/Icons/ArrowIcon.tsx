import { defaultIconProps } from "@/types/iconTypes";
import { memo } from "react";

const UnMemoizedArrow = ({
  width = 20,
  height = 20,
  primaryColor = "#1A1A1A",
}: defaultIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4806 15.9941C13.8398 15.6529 13.8398 15.0998 13.4806 14.7586L8.47062 10L13.4806 5.24141C13.8398 4.90023 13.8398 4.34706 13.4806 4.00589C13.1214 3.66471 12.539 3.66471 12.1798 4.00589L6.51941 9.38223C6.1602 9.72341 6.1602 10.2766 6.51941 10.6178L12.1798 15.9941C12.539 16.3353 13.1214 16.3353 13.4806 15.9941Z"
        fill={primaryColor}
        fill-opacity="0.61"
      />
    </svg>
  );
};

export const ArrowIcon = memo(UnMemoizedArrow);
