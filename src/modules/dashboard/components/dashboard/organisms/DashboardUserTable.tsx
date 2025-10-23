import { memo } from "react";
import Card from "@/shared/molecules/Card";
import Table from "@/shared/molecules/Table";

const DashboardUserTable = memo(() => (
  <Card title="User Table">
    <Table
      headers={["Name", "Email", "Plan"]}
      rows={[
        ["Daffa", "daffa@example.com", "Pro"],
        ["Budi", "budi@example.com", "Free"],
        ["Siti", "siti@example.com", "Enterprise"],
      ]}
    />
  </Card>
));

export default DashboardUserTable;
