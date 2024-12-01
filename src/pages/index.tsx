import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FormContainer,
  ScheduleListContainer,
  Container,
  Main,
} from "@/screens/Discipline/style";
import {
  Heading,
  VStack,
  HStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Spinner,
  Input,
  FormControl,
  Select,
} from "@chakra-ui/react";
import { appointmentApi, appointmentUrl } from "@/services";
import { formatDateTime } from "@/utils/formatDate";
import { useFetch } from "@/hooks/useFetch";

type TProfessor = {
  id: number;
  name: string;
};

type TDiscipline = {
  id: number;
  name: string;
};

type TLaboratory = {
  id: number;
  name: string;
  machineQuantity: string;
  softwares: string;
  observation: string;
};

interface ISchedule {
  id: string;
  professor: TProfessor;
  discipline: TDiscipline;
  laboratory: TLaboratory;
  start_time: string;
  end_time: string;
  description: string;
}

const ScheduleManagement = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    professorId: "",
    disciplineId: "",
    laboratoryId: "",
    start_time: "",
    end_time: "",
    description: "",
  });
  const [professors, setProfessors] = useState<TProfessor[]>([]);
  const [disciplines, setDisciplines] = useState<TDiscipline[]>([]);
  const [laboratories, setLaboratories] = useState<TLaboratory[]>([]);

  const fetchProfessors = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token de autorização não encontrado.");
        return;
      }
      const response = await axios.get<TProfessor[]>(
        "https://agendamentoback-h2i55nsa.b4a.run/professor/get-all-professors",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfessors(response?.data);
    } catch (error) {
      console.error("Erro ao buscar professores:", error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token de autorização não encontrado.");
        return;
      }
      const response = await axios.get<TDiscipline[]>(
        "https://agendamentoback-h2i55nsa.b4a.run/discipline/get-all-disciplines",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDisciplines(response?.data);
    } catch (error) {
      console.error("Erro ao buscar disciplinas:", error);
    }
  };

  const {
    data: schedules,
    mutate,
    isLoading,
  } = useFetch<ISchedule[]>(
    "schedule/get-all-schedules",
    {},
    true,
    appointmentApi
  );

  const fetchLaboratories = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token de autorização não encontrado.");
        return;
      }
      const response = await axios.get<TLaboratory[]>(
        "https://agendamentoback-h2i55nsa.b4a.run/laboratory/get-all-laboratories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLaboratories(response?.data);
    } catch (error) {
      console.error("Erro ao buscar laboratórios:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log({ formData });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token de autorização não encontrado.");
      }
      if (
        !formData?.professorId ||
        !formData?.disciplineId ||
        !formData?.laboratoryId ||
        !formData?.start_time ||
        !formData?.end_time
      ) {
        throw new Error("Todos os campos devem ser preenchidos.");
      }

      const dataToSend = {
        professorId: Number(formData?.professorId),
        disciplineId: Number(formData?.disciplineId),
        laboratoryId: Number(formData?.laboratoryId),
        description: formData?.description,
        start_time: new Date(formData?.start_time)?.toISOString(),
        end_time: new Date(formData?.end_time)?.toISOString(),
      };

      const response = await axios.post<ISchedule>(
        "https://agendamentoback-h2i55nsa.b4a.run/schedule/register-schedule",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      mutate();

      if (response.status === 200) {
        setFormData({
          professorId: "",
          disciplineId: "",
          laboratoryId: "",
          start_time: "",
          end_time: "",
          description: "",
        });
      } else {
        throw new Error("Erro ao agendar horário. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao agendar horário:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token de autorização não encontrado.");
        return;
      }
      await axios.delete(
        `https://agendamentoback-h2i55nsa.b4a.run/schedule/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      mutate();
    } catch (error) {
      console.error("Erro ao excluir agendamento:", error);
    }
  };

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    const googleToken = urlParam.get("token");

    if (googleToken) {
      localStorage.setItem("token", googleToken);
      window.location.href = "https://agendamento-lab-chi.vercel.app";
    }
  }, []);

  useEffect(() => {
    fetchProfessors();
    fetchSubjects();
    fetchLaboratories();
  }, []);

  return (
    <>
      <Head>
        <title>Agendamento</title>
        <meta name="description" content="Gerado pelo aplicativo Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <Heading as="h1" size="lg" textAlign="center" mb="6">
            Gerenciamento de Agendamentos
          </Heading>
          <HStack spacing="4" mb="6" alignItems="start">
            <FormContainer onSubmit={handleSubmit}>
              <VStack spacing="4">
                <FormControl>
                  <Select
                    name="professorId"
                    placeholder="Selecione o Professor"
                    value={formData?.professorId}
                    onChange={handleChange}
                    required
                  >
                    {professors?.map((professor) => (
                      <option key={professor?.id} value={professor?.id}>
                        {professor?.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <Select
                    name="disciplineId"
                    placeholder="Selecione a Disciplina"
                    value={formData?.disciplineId}
                    onChange={handleChange}
                    required
                  >
                    {disciplines?.map((discipline) => (
                      <option key={discipline?.id} value={discipline?.id}>
                        {discipline?.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <Select
                    name="laboratoryId"
                    placeholder="Selecione o Laboratório"
                    value={formData?.laboratoryId}
                    onChange={handleChange}
                    required
                  >
                    {laboratories?.map((laboratory) => (
                      <option key={laboratory?.id} value={laboratory?.id}>
                        {laboratory?.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <Input
                    name="description"
                    placeholder="Descrição"
                    value={formData?.description}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="datetime-local"
                    name="start_time"
                    value={formData?.start_time}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="datetime-local"
                    name="end_time"
                    value={formData?.end_time}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="green">
                  Agendar
                </Button>
              </VStack>
            </FormContainer>
            <ScheduleListContainer>
              <Text as="h2" fontSize="xl" mb="4">
                Lista de Agendamentos
              </Text>
              {loading ? (
                <Spinner color="green.500" />
              ) : (
                <Table variant="simple" colorScheme="green">
                  <Thead>
                    <Tr>
                      <Th>Professor</Th>
                      <Th>Disciplina</Th>
                      <Th>Laboratório</Th>
                      <Th>Hora de Início</Th>
                      <Th>Hora de Término</Th>
                      <Th>Descrição</Th>
                      <Th>Ações</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {schedules?.map((schedule) => (
                      <Tr key={schedule?.id}>
                        <Td>{schedule?.professor?.name}</Td>
                        <Td>{schedule?.discipline?.name}</Td>
                        <Td>{schedule?.laboratory?.name}</Td>
                        <Td>{formatDateTime(schedule?.start_time)}</Td>
                        <Td>{formatDateTime(schedule?.end_time)}</Td>
                        <Td>{schedule?.description}</Td>
                        <Td>
                          <Button
                            colorScheme="red"
                            onClick={() => handleDelete(schedule?.id)}
                          >
                            Excluir
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              )}
            </ScheduleListContainer>
          </HStack>
        </Container>
      </Main>
    </>
  );
};

export default ScheduleManagement;
