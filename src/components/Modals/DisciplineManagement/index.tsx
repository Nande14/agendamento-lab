import React from "react";
import { IDisciplineManagementModal } from "./types";
import { ViewDisciplineManagement } from "./ViewDisciplineManagement";
import { useDisciplineManagement } from "./useDisciplineManagement";

export const DisciplineManagementModal: React.FC<
  IDisciplineManagementModal
> = ({ disciplineId, onClose, onDisciplineUpdated }) => {
  return (
    <ViewDisciplineManagement
      {...useDisciplineManagement({
        disciplineId,
        onClose,
        onDisciplineUpdated,
      })}
    />
  );
};
