import { IDatePicker } from "./types";
import { useDatePicker } from "./useDatePicker";
import { ViewDatePicker } from "./ViewDatePicker";

export const DatePicker: React.FC<IDatePicker> = ({ handlePickDate }) => {
  return <ViewDatePicker {...useDatePicker({ handlePickDate })} />;
};
