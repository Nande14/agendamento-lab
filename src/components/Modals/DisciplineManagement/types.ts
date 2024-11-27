export type TDiscipline = {
  id: number;
  name: string;
};

export interface IDisciplineManagementModal {
  disciplineId: number | null;
  onClose: () => void;
}

export interface IUseDisciplineManagement
  extends IDisciplineManagementModal {}

export interface IViewDisciplineManagement {
  disciplineId: number | null;
  onClose: () => void;
  loading: boolean;
  discipline: TDiscipline | null;
  handleDelete: () => Promise<void>;
  handleSave: () => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
