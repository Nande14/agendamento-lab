import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Spinner,
  Flex,
  Input,
} from "@chakra-ui/react";
import { IViewDisciplineManagement } from "./types";
import {
  DisciplineLabelText,
  DisciplineNameContainer,
  DisciplineNameField,
  DisciplineNameFieldErrorText,
} from "./styles";

export const ViewDisciplineManagement: React.FC<
  IViewDisciplineManagement
> = ({
  disciplineId,
  onClose,
  loading,
  discipline,
  handleDelete,
  handleSave,
  handleChange,
}) => {
  return (
    <Modal isOpen={!!disciplineId} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detalhes da Disciplina</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading ? (
            <Flex justify="center" align="center" height="60px">
              <Spinner size="xl" color="green.500" />
            </Flex>
          ) : discipline ? (
            <DisciplineNameContainer>
              <DisciplineNameField>
                <DisciplineLabelText>Nome:</DisciplineLabelText>{" "}
                <Input
                  name="name"
                  value={discipline.name}
                  onChange={handleChange}
                  marginTop="20px"
                />
              </DisciplineNameField>
            </DisciplineNameContainer>
          ) : (
            <DisciplineNameFieldErrorText>
              Erro ao carregar
            </DisciplineNameFieldErrorText>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button colorScheme="red" mr={3} onClick={handleDelete}>
            Excluir
          </Button>
          <Button colorScheme="green" mr={3} onClick={handleSave}>
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
