import { memo } from "react";
import Card from "@/shared/molecules/Card";
import { usePagination } from "@/modules/dashboard/hooks/usePagination";
import UserFilterBar from "../organisms/UserFilterBar";
import UserTable from "../molecules/UserTable";
import UserPaginationControls from "../organisms/UserPaginationControls";

const UserCardWrapper = memo(() => {
  const {
    search,
    handleSearchChange,
    roleFilter,
    handleRoleChange,
    page,
    totalPages,
    tableRows,
    handlePrev,
    handleNext,
  } = usePagination();

  return (
    <Card title="List of API Users">
      <UserFilterBar
        search={search}
        roleFilter={roleFilter}
        onSearchChange={handleSearchChange}
        onRoleChange={handleRoleChange}
      />

      <UserTable rows={tableRows} />

      <UserPaginationControls
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Card>
  );
});

export default UserCardWrapper;