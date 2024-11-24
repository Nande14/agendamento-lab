import { useReservation } from "./useReservation";
import { ViewReservation } from "./ViewReservation";

export const ReservationScreen: React.FC = () => {
  return <ViewReservation {...useReservation()} />;
};
