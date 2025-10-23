import { memo } from "react";
import Table from "@/shared/molecules/Table";
import type { UserTableProps } from "@/types";

const TABLE_HEADERS = ["Name", "Email", "Role", "Status", "Plan"];

const UserTable = memo(({ rows }: UserTableProps) => {
  return <Table headers={TABLE_HEADERS} rows={rows} />;
});

export default UserTable;