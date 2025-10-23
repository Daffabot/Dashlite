import React, { memo } from "react";
import DashboardLayout from "@/shared/templates/DashboardLayout";
import NotificationCardWrapper from "@/modules/dashboard/components/notification/organisms/NotificationCardWrapper";
/**
 * Page for managing and viewing user notifications.
 */

const NotificationPage: React.FC = () => {
  return (
    <DashboardLayout>
      <NotificationCardWrapper />
    </DashboardLayout>
  );
};

export default memo(NotificationPage);
