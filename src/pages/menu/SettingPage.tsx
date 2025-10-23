import React, { memo } from "react";
import DashboardLayout from "@/shared/templates/DashboardLayout";
import { Alert } from "@/shared/molecules/Alert";
import SettingCardWrapper from "@/modules/dashboard/components/setting/organisms/SettingCardWrapper";

/** * Application settings page to configure UI theme, limits and maintenance mode. */
const SettingPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Alert
        type="success"
        title="Success"
        message="Settings saved successfully!"
        className="absolute top-24"
      />

      <SettingCardWrapper />
    </DashboardLayout>
  );
};

export default memo(SettingPage);
