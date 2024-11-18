import { useDatePicker } from "./useDatePicker";
import { ViewDatePicker } from "./ViewDatePicker";

export const DatePicker = () => {
  return <ViewDatePicker {...useDatePicker()} />;
};
