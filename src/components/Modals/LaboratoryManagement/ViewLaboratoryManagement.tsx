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
import { IViewLaboratoryManagement } from "./types";
import {
  LaboratoryLabelText,
  LaboratoryNameContainer,
  LaboratoryNameField,
  LaboratoryNameFieldErrorText,
} from "./styles";

export const ViewLaboratoryManagement: React.FC<IViewLaboratoryManagement> = ({
  laboratoryId,
  onClose,
  loading,
  laboratory,
  handleDelete,
  handleSave,
  handleChange,
}) => {
  return (
    <Modal isOpen={!!laboratoryId} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detalhes da Disciplina</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading ? (
            <Flex justify="center" align="center" height="60px">
              <Spinner size="xl" color="green.500" />
            </Flex>
          ) : laboratory ? (
            <LaboratoryNameContainer>
              <LaboratoryNameField>
                <LaboratoryLabelText>Nome:</LaboratoryLabelText>{" "}
                <Input
                  name="name"
                  value={laboratory.name}
                  onChange={handleChange}
                  marginTop="20px"
                />
              </LaboratoryNameField>
            </LaboratoryNameContainer>
          ) : (
            <LaboratoryNameFieldErrorText>
              Erro ao carregar
            </LaboratoryNameFieldErrorText>
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
