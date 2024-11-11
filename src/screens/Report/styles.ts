// Report.tsx
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin: 10px 0 20px;
`;

export const GenerateButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
