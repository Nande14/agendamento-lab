import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../Dicipline/style";
import {
  CalendarGrid,
  DateButton,
  StatusButtons,
  StatusButton,
} from "./styles";

export const CalendarAdmin: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "Disponível" | "Marcado" | "Removido" | "Feriado" | null
  >(null);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleStatusChange = (
    newStatus: "Disponível" | "Marcado" | "Removido" | "Feriado"
  ) => {
    setStatus(newStatus);
  };

  return (
    <Container>
      <Title>Administração do Calendário</Title>
      <CalendarGrid>
        <DateButton onClick={() => handleDateClick("2024-11-01")}>
          1 Nov
        </DateButton>
        {/* Outros dias */}
      </CalendarGrid>
      <StatusButtons>
        <StatusButton
          onClick={() => handleStatusChange("Disponível")}
          bgColor="#4caf50"
        >
          Liberar
        </StatusButton>
        <StatusButton
          onClick={() => handleStatusChange("Removido")}
          bgColor="#f44336"
        >
          Remover
        </StatusButton>
        <StatusButton
          onClick={() => handleStatusChange("Feriado")}
          bgColor="#ff9800"
        >
          Feriado
        </StatusButton>
      </StatusButtons>
      <p>Data selecionada: {selectedDate}</p>
      <p>Status: {status}</p>
    </Container>
  );
};
