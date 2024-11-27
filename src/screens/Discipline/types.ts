export interface Subject {
  id: number;
  name: string;
}

export interface IViewDicipline {
  handleOpenModalCreate: () => void;
  isLoading: boolean;
  subjects?: Subject[];
  handleDisciplineClick: (disciplineId: number) => void;
  isModalCreateOpen: boolean;
  handleCloseModalCreate: () => void;
  selectedDisciplineId: number | null;
  handleCloseDisciplineDetails: () => void;
}
