export type TLaboratory = {
  id: number;
  name: string;
};

export interface ILaboratoryManagementModal {
  laboratoryId: number | null;
  onClose: () => void;
}

export interface IUseLaboratoryManagement extends ILaboratoryManagementModal {}

export interface IViewLaboratoryManagement {
  laboratoryId: number | null;
  onClose: () => void;
  loading: boolean;
  laboratory: TLaboratory | null;
  handleDelete: () => Promise<void>;
  handleSave: () => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
