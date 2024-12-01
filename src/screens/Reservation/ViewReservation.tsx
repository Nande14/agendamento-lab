import React from "react";
import {
  CalendarContainer,
  InfoTitle,
  ReservationContainer,
  ReservationViewerContainer,
  ReservationViewerTitle,
} from "./styles";

import catolica from "../../../public/catholic.png";
import Image from "next/image";
import { DatePicker } from "@/components/DatePicker";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IViewReservation } from "./types";

export const ViewReservation: React.FC<IViewReservation> = ({
  handlePickDate,
  filteredAndFormattedSchedules,
}) => {
  return (
    <ReservationContainer>
      <CalendarContainer>
        <Image
          src={catolica}
          alt="Logo da universidade católica"
          width={1000}
          height={1000}
        />
        <InfoTitle>Laboratório</InfoTitle>
        <DatePicker handlePickDate={handlePickDate} />
      </CalendarContainer>
      <ReservationViewerContainer>
        <ReservationViewerTitle>
          Visualização de reservas
        </ReservationViewerTitle>

        <Table variant="simple" colorScheme="green">
          <Thead>
            <Tr>
              <Th>Professor</Th>
              <Th>Data</Th>
              <Th>Hora</Th>
              <Th>Localização</Th>
              <Th>Descrição</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredAndFormattedSchedules.map((schedule, index) => (
              <Tr key={index}>
                <Td>{schedule?.name}</Td>
                <Td>{schedule?.date}</Td>
                <Td>{schedule?.hour}</Td>
                <Td>{schedule?.laboratory}</Td>
                <Td>{schedule?.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ReservationViewerContainer>
    </ReservationContainer>
  );
};
