export interface Laboratory {
  id: number;
  name: string;
  machineQuantity: string;
  softwares: string;
  observation: string;
}

export interface IViewLaboratory {
  handleOpenModalCreate: () => void;
  isLoading: boolean;
  laboratories?: Laboratory[];
  handleLaboratoryClick: (laboratoryId: number) => void;
  isModalCreateOpen: boolean;
  handleCloseModalCreate: () => void;
  selectedLaboratoryId: number | null;
  handleCloseLaboratoryDetails: () => void;
}
