import React, { memo } from "react";
import DashboardLayout from "@/shared/templates/DashboardLayout";
import AccountCardWrapper from "@/modules/dashboard/components/account/organisms/AccountCardWrapper";
import { Alert } from "@/shared/molecules/Alert";

/**
 * Account settings page allowing users to update their profile information.
 */
const AccountPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Alert
        type="success"
        title="Success"
        message="Account settings saved successfully!"
        className="absolute top-24"
      />

      <AccountCardWrapper />
    </DashboardLayout>
  );
};

export default memo(AccountPage);
