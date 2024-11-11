import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  border-bottom: 1px solid #e2e8f0;

  p {
    font-size: 20px;
    font-weight: bold;
    color: #2d3748;
  }
`;

export const IconExit = styled.div`
  position: relative;
  top: 11px;
`;

export const Text = styled.p`
  padding: 10px 10px;
  cursor: pointer;
  font-size: 20px;
`;
