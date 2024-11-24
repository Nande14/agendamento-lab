import { useDiscipline } from "./useDiscipline";
import { ViewDiscipline } from "./ViewDiscipline";

export const DisciplineScreen = () => {
  return <ViewDiscipline {...useDiscipline()} />;
};
