import { DatePicker } from "@/components/DatePicker";
import {
  ActionButton,
  ButtonsContainer,
  CalendarContainer,
  CalendarSubtitle,
  CalendarTitle,
  Container,
  InfoContainer,
  InfoItem,
  InfoItemsContainer,
  InfoList,
  InfoTitle,
} from "./styles";
import { IViewCalendarManagement } from "./types";
import Image from "next/image";
import catolica from "../../../public/catholic.png";

export const ViewCalendarManagement: React.FC<IViewCalendarManagement> = ({
  handleLiberate,
  handleRemove,
  handleAddHoliday,
  handlePickDate,
}) => {
  return (
    <Container>
      <InfoContainer>
        <Image
          src={catolica}
          alt="Logo da universidade católica"
          width={1000}
          height={1000}
        />

        <InfoTitle>Laboratório</InfoTitle>

        <InfoList>
          <InfoItem>
            Administração do calendário: Nesta tela, é possível gerenciar o
            calendário de uso dos laboratórios, adicionando ou removendo dias
            específicos e marcando feriados. Clique o o botão direito do mouse
            no dia e escolha se quer “Liberar”, “Remover” ou “Feriado”. Dias em
            Amarelo: Dísponivel Dias em Branco: Marcado Dias em Cinza: Removido
            Dias em Vermelho: Feriado
          </InfoItem>

          <InfoItem>
            Clique com o botão direito do mouse no dia e escolha se quer
            "Liberar", "Remover" ou "Feriado".
          </InfoItem>

          <InfoItemsContainer>
            <InfoItem>Dias em Amarelo: Disponível</InfoItem>
            <InfoItem>Dias em Branco: Marcado</InfoItem>
            <InfoItem>Dias em Cinza: Removido</InfoItem>
            <InfoItem>Dias em Vermelho: Feriado</InfoItem>
          </InfoItemsContainer>
        </InfoList>
      </InfoContainer>

      <CalendarContainer>
        <CalendarTitle>Administração do Calendário</CalendarTitle>
        <CalendarSubtitle>
          Escolha um dia para fazer alterações
        </CalendarSubtitle>
        <DatePicker handlePickDate={handlePickDate} />

        <ButtonsContainer>
          <ActionButton onClick={handleLiberate}>Liberar</ActionButton>
          <ActionButton onClick={handleRemove}>Remover</ActionButton>
          <ActionButton onClick={handleAddHoliday}>Feriado</ActionButton>
        </ButtonsContainer>
      </CalendarContainer>
    </Container>
  );
};
