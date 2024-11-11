export interface ITeacher {
  id: number;
  name: string;
  employee_id: string;
  email: string;
}

export interface IViewTeacher {
  handleOpenCreateModal: () => void;
  loading: boolean;
  teachers: ITeacher[];
  handleTeacherClick: (teacherId: number) => void;
  isModalOpen: boolean;
  selectedTeacherId: number | null;
  handleCloseModal: () => void;
  isCreateModalOpen: boolean;
  handleCloseCreateModal: () => void;
}
