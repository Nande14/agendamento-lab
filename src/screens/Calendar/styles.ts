// CalendarAdmin.tsx
import React, { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin: 20px 0;
`;

export const DateButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f0f0f0;
  color: #333;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const StatusButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const StatusButton = styled.button<{ bgColor: string }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor};
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
