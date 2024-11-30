export interface IProfessor {
  id: number;
  name: string;
  employee_id: string;
  email: string;
}

export interface IViewTeacher {
  handleOpenCreateModal: () => void;
  isLoading: boolean;
  professors?: IProfessor[];
  handleTeacherClick: (teacherId: number) => void;
  isModalOpen: boolean;
  selectedTeacherId: number | null;
  handleCloseModal: () => void;
  isCreateModalOpen: boolean;
  handleCloseCreateModal: () => void;
}
