import styled from "styled-components";
import { ArrowIcon } from "../Icons";

export const PickerContainer = styled.section`
  border-radius: 8px;
  width: 400px;
  background-color: white;
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

export const PickerBody = styled.section`
  margin: 5px;
`;

interface ISevenColumnGrid {
  heading?: boolean;
}

export const DayOfWeek = styled.p`
  color: #1a1a1a;
  text-align: center;
  font-size: 11.438px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const SevenColGrid = styled.section<ISevenColumnGrid>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 0.5rem;

  .active {
    border: 1px solid green;
    border-radius: 500px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
