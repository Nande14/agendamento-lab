import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

interface ModalCreateLaboratoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreateLaboratory: React.FC<ModalCreateLaboratoryProps> = ({
  isOpen,
  onClose,
}) => {
  const initialFormData = {
    name: "",
    machineQuantity: "",
    softwares: "",
    observations: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await axios.post(
        "https://agendamentolabback-42tkkyxe.b4a.run/laboratory/register-laboratory",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Disciplina criada com sucesso:", response.data);
      toast({
        title: "Disciplina criada com sucesso!",
        description: "A disciplina foi criada e adicionada ao sistema.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      resetForm();
      onClose();
    } catch (error) {
      console.error("Ocorreu um erro ao criar a disciplina:", error);
      toast({
        title: "Erro ao criar disciplina",
        description: "Houve um problema ao tentar criar a disciplina.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Laboratório</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleInputChange}
            marginTop="20px"
          />
          <Input
            name="machineQuantity"
            placeholder="Número de computadores"
            value={formData.machineQuantity}
            onChange={handleInputChange}
            marginTop="20px"
          />
          <Input
            name="softwares"
            placeholder="Softwares"
            value={formData.softwares}
            onChange={handleInputChange}
            marginTop="20px"
          />
          <Input
            name="observations"
            placeholder="Observações"
            value={formData.observations}
            onChange={handleInputChange}
            marginTop="20px"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={() => {
              onClose();
              resetForm();
            }}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="green"
            onClick={handleSubmit}
            isLoading={loading}
          >
            {loading ? <Spinner size="sm" color="red" /> : "Adicionar"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateLaboratory;
