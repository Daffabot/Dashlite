import { memo } from "react";
import { Alert } from "@/shared/molecules/Alert";

const DashboardSuccessAlert = memo(() => (
  <div className="absolute top-24">
    <Alert type="success" title="Success" message="User added successfully!" />
  </div>
));

export default DashboardSuccessAlert;
