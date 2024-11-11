import { Container } from "@chakra-ui/react";
import { Title, Description, GenerateButton } from "./styles";

export const Report: React.FC = () => {
  return (
    <Container>
      <Title>Relatórios</Title>
      <Description>
        Geração de relatórios de uso dos laboratórios para análise de dados.
      </Description>
      <GenerateButton onClick={() => alert("Gerando relatório...")}>
        Gerar Relatório
      </GenerateButton>
    </Container>
  );
};