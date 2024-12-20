import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 700px;

  display: flex;

  border-radius: 8px;
  border: 1px solid rgba(26, 26, 26, 0.1);
  background: #fff;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.08);

  margin: 0 auto;
`;

export const InfoContainer = styled.section`
  width: 399px;
  height: 698px;
  background-color: white;
  border-right: 1px solid rgba(26, 26, 26, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.p`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const InfoList = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const InfoItemsContainer = styled.section``;

export const InfoItem = styled.li`
  color: #8c8585;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
`;

export const CalendarTitle = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const CalendarSubtitle = styled.p`
  color: rgba(26, 26, 26, 0.61);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

export const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  margin-top: 1.25rem;

  background-color: #f0f0f0;
  width: 114px;
  height: 70px;

  gap: 0.25rem;
  border-radius: 0.25rem;
`;

export const ActionButton = styled.button`
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
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
