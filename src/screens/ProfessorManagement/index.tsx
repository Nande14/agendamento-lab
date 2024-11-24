import { useProfessorManagement } from "./useProfessorManagement";
import { ViewProfessorManagement } from "./ViewProfessorManagement";

export const ProfessorManagementScreen = () => {
  return <ViewProfessorManagement {...useProfessorManagement()} />;
};
