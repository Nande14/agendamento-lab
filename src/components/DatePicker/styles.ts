import styled, { css } from "styled-components";
import { ArrowIcon } from "../Icons";
import { IDayContainer } from "./types";

export const PickerContainer = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 23.25rem;
  gap: 2rem;
`;

export const PickerHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
`;

export const MonthAndYearText = styled.p`
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 400;
`;

export const ButtonBackMonth = styled.button``;

export const ButtonNextMonth = styled.button`
  transform: rotate(180deg);
`;

export const LeftArrowIcon = styled(ArrowIcon)``;

export const RightArrowIcon = styled(ArrowIcon)``;

export const PickerBody = styled.section``;

export const DayOfWeekContainer = styled.section`
  width: 2.75rem;
  height: 2.75rem;
`;

export const DayOfWeekText = styled.p`
  color: #1a1a1a;
  text-align: center;
  font-size: 11.25px;
  font-weight: 400;
`;

export const SevenColGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 0.5rem;
`;

export const EmptyContainer = styled.section`
  width: 42px;
  height: 42px;
  border: 2px solid transparent;
  border-radius: 500px;
`;

export const DayNumber = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const DayContainer = styled.button<IDayContainer>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.625rem;
  height: 2.625rem;

  border-radius: 10rem;

  ${({ dayStyle }) => css`
    background-color: ${dayStyle?.backgroundColor};
    border: 2px solid ${dayStyle?.borderColor};
  `}

  & ${DayNumber} {
    ${({ dayStyle }) => css`
      color: ${dayStyle?.fontColor};
    `}
  }
`;
