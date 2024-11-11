import { useTeacher } from "./useTeacher";
import { ViewTeacher } from "./ViewTeacher";

export const TeacherManagementScreen = () => {
  return <ViewTeacher {...useTeacher()} />;
}
