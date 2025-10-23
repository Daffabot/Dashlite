import { memo } from "react";
import DashboardUserTable from "../organisms/DashboardUserTable";
import DashboardAddUserForm from "../organisms/DashboardAddUserForm";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { hasAccess } from "@/modules/auth/constants/roles";

const DashboardWrapperUser = memo(() => {
  const { user } = useAuth();
  const isAdmin = hasAccess(user?.role, "admin");
  const gridCols = isAdmin ? "lg:grid-cols-2" : "grid-cols-1";
  return (
    <div className={`grid ${gridCols} gap-6`}>
      <DashboardUserTable />
      {isAdmin && <DashboardAddUserForm />}
    </div>
  );
});

export default DashboardWrapperUser;
