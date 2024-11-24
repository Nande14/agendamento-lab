import styled from "styled-components";

export const ReservationContainer = styled.section`
  width: 91.25rem;
  height: 54rem;

  background-color: white;

  display: flex;
  flex-direction: row;

  margin: 0 auto;
`;

export const CalendarContainer = styled.section`
  width: 399px;
  height: 698px;

  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.p`
  color: #000;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;

  margin: 4rem 0 7rem 0;
`;

export const ReservationViewerContainer = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  gap: 10rem;
  padding: 5rem 0;
`;

export const ReservationViewerTitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 700;
`;
