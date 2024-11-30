import { dayNames, monthNames } from "@/const/date";
import {
  ButtonBackMonth,
  ButtonNextMonth,
  DayContainer,
  DayNumber,
  DayOfWeekContainer,
  DayOfWeekText,
  EmptyContainer,
  LeftArrowIcon,
  MonthAndYearText,
  PickerBody,
  PickerContainer,
  PickerHeader,
  RightArrowIcon,
  SevenColGrid,
} from "./styles";
import { IViewDatePicker } from "./types";
import { getDaysWithNulls } from "./helps";

export const ViewDatePicker: React.FC<IViewDatePicker> = ({
  nextMonth,
  previousMonth,
  currentMonth,
  currentYear,
  handleSelectDate,
  handleChooseDayStyle,
}) => {
  return (
    <PickerContainer>
      <PickerHeader>
        <ButtonBackMonth onClick={previousMonth}>
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
        <SevenColGrid>
          {dayNames.map((day) => (
            <DayOfWeekContainer>
              <DayOfWeekText>{day}</DayOfWeekText>
            </DayOfWeekContainer>
          ))}
        </SevenColGrid>

        <SevenColGrid>
          {getDaysWithNulls(currentYear, currentMonth).map(
            (day: number, index) =>
              day === null ? (
                <EmptyContainer />
              ) : (
                <DayContainer
                  key={index}
                  dayStyle={handleChooseDayStyle(day)}
                  value={day}
                  onClick={(event) => {
                    handleSelectDate(event);
                  }}
                >
                  <DayNumber>{day}</DayNumber>
                </DayContainer>
              )
          )}
        </SevenColGrid>
      </PickerBody>
    </PickerContainer>
  );
};
