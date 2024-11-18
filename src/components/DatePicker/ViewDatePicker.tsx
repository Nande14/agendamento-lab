import { dayNames, monthNames } from "@/const/date";
import {
  ButtonBackMonth,
  ButtonNextMonth,
  DayOfWeek,
  LeftArrowIcon,
  MonthAndYearText,
  PickerBody,
  PickerContainer,
  PickerHeader,
  RightArrowIcon,
  SevenColGrid,
} from "./styles";
import { IViewDatePicker } from "./types";
import {
  getDaysWithNulls,
} from "@/utils";

export const ViewDatePicker = ({
  prevMonth,
  nextMonth,
  currentMonth,
  currentYear,
  selectedDate,
  handleSelectDate,
}: IViewDatePicker) => {
  return (
    <PickerContainer>
      <PickerHeader>
        <ButtonBackMonth onClick={prevMonth}>
          <LeftArrowIcon />
        </ButtonBackMonth>

        <MonthAndYearText>
          {monthNames[currentMonth]} {currentYear}
        </MonthAndYearText>

        <ButtonNextMonth onClick={nextMonth}>
          <RightArrowIcon />
        </ButtonNextMonth>
      </PickerHeader>

      <PickerBody>
        <SevenColGrid heading>
          {dayNames.map((day) => (
            <DayOfWeek>{day}</DayOfWeek>
          ))}
        </SevenColGrid>

        <SevenColGrid onClick={handleSelectDate}>
          {getDaysWithNulls(currentYear, currentMonth).map((day, index) =>
            day === null ? (
              <p key={index} className="empty"></p>
            ) : (
              <p
                key={index}
                id="day"
                data-day={day}
                className={
                  selectedDate?.getTime() ===
                  new Date(currentYear, currentMonth, day).getTime()
                    ? "active"
                    : ""
                }
              >
                {day}
              </p>
            )
          )}
        </SevenColGrid>
      </PickerBody>
    </PickerContainer>
  );
};
