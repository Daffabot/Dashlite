import { memo } from "react";
import { Input } from "@/shared/atoms/Input";
import { UserFilterBarProps } from "@/types";

const ROLE_OPTIONS = [
  { value: "all", label: "All Role" },
  { value: "Admin", label: "Admin" },
  { value: "User", label: "User" },
  { value: "Editor", label: "Editor" },
];

const UserFilterBar = memo(
  ({ search, roleFilter, onSearchChange, onRoleChange }: UserFilterBarProps) => {
    return (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <Input
          type="text"
          placeholder="Search name or email..."
          value={search}
          onChange={onSearchChange}
          className="min-w-full md:w-1/3"
        />
        <Input
          type="select"
          className="px-3 py-2 border rounded-md text-sm"
          value={roleFilter}
          onChange={onRoleChange}
          options={ROLE_OPTIONS}
        />
      </div>
    );
  },
);

export default UserFilterBar;