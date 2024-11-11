import { useDicipline } from "./useDicipline";
import { ViewDicipline } from "./ViewDicipline";

export const DiciplineScreen = () => {
  return <ViewDicipline {...useDicipline()} />;
};
