// ReservationView.tsx
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: #f4f4f4;
  color: #333;
  border: 1px solid #ddd;
  font-size: 14px;
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  font-size: 14px;
`;

export const TableRow = styled.tr<{ even?: boolean }>`
  background-color: ${({ even }) => (even ? "#f9f9f9" : "white")};

  &:hover {
    background-color: #f1f1f1;
  }
`;
