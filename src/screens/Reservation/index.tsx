import { Container, Table } from "@chakra-ui/react";
import { Title, TableHeader, TableRow, TableCell } from "./styles";

interface Reservation {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const reservations: Reservation[] = [
  {
    name: "Rafael Roque",
    date: "11/01/2024",
    time: "20:30",
    location: "Sala 1",
    description: "Reunião com equipe",
  },
  {
    name: "Daniel",
    date: "11/01/2024",
    time: "21:30",
    location: "Sala 1",
    description: "Reunião com equipe",
  },
  // Outras reservas
];

export const ReservationView: React.FC = () => {
  return (
    <Container>
      <Title>Visualização de Reservas</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader>Hora</TableHeader>
            <TableHeader>Localização</TableHeader>
            <TableHeader>Descrição</TableHeader>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <TableRow key={index} even={index % 2 === 0}>
              <TableCell>{reservation.name}</TableCell>
              <TableCell>{reservation.date}</TableCell>
              <TableCell>{reservation.time}</TableCell>
              <TableCell>{reservation.location}</TableCell>
              <TableCell>{reservation.description}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
