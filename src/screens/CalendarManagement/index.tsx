import { useCalendarManagement } from "./useCalendarManagement";
import { ViewCalendarManagement } from "./ViewCalendarManagement";

export const CalendarManagementScreen: React.FC = () => {
  return <ViewCalendarManagement {...useCalendarManagement()} />;
};
