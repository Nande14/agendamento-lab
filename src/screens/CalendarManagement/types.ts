export interface IViewCalendarManagement {
  handleLiberate: () => Promise<void>;
  handleRemove: () => Promise<void>;
  handleAddHoliday: () => Promise<void>;
  handlePickDate: (date: string) => void;
}
