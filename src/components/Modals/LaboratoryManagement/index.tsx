import React from "react";
import { ILaboratoryManagementModal } from "./types";
import { ViewLaboratoryManagement } from "./ViewLaboratoryManagement";
import { useLaboratoryManagement } from "./useLaboratoryManagement";

export const LaboratoryManagementModal: React.FC<
  ILaboratoryManagementModal
> = ({ laboratoryId, onClose }) => {
  return (
    <ViewLaboratoryManagement
      {...useLaboratoryManagement({
        laboratoryId,
        onClose,
      })}
    />
  );
};
