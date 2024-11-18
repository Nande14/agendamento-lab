import { useCalendar } from "./useCalendar";
import { ViewCalendar } from "./ViewCalendar";

export const Calendar: React.FC = () => {
  return <ViewCalendar {...useCalendar()} />;
};
