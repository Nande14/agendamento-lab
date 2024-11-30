import { useLaboratory } from "./useLaboratory";
import { ViewLaboratory } from "./ViewLaboratory";

export const LaboratoryScreen = () => {
  return <ViewLaboratory {...useLaboratory()} />;
};
