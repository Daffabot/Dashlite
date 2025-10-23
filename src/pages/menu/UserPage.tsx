import React, { memo } from "react";
import DashboardLayout from "@/shared/templates/DashboardLayout";
import UserCardWrapper from "@/modules/dashboard/components/user/templates/UserCardWrapper";
/**
 * Users management page with client-side filtering and pagination.
 */
const UserPage: React.FC = () => {
  return (
    <DashboardLayout>
      <UserCardWrapper />
    </DashboardLayout>
  );
};

export default memo(UserPage);
