import { memo } from "react";
import DashboardLayout from "@/shared/templates/DashboardLayout";
import DashboardSuccessAlert from "@/modules/dashboard/components/dashboard/organisms/DashboardSuccessAlert";
import DashboardUserGrowthChart from "@/modules/dashboard/components/dashboard/organisms/DashboardUserGrowthChart";
import DashboardPlanChart from "@/modules/dashboard/components/dashboard/organisms/DashboardPlanChart";
import DashboardDeviceChart from "@/modules/dashboard/components/dashboard/organisms/DashboardDeviceChart";
import DashboardWrapperUser from "@/modules/dashboard/components/dashboard/templates/DashboardWrapperUser";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DashboardSuccessAlert />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardUserGrowthChart />
        <DashboardPlanChart />
        <DashboardDeviceChart />
      </div>

      <DashboardWrapperUser />
    </DashboardLayout>
  );
};

export default memo(DashboardPage);
