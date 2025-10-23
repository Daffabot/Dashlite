import { useState, useMemo, useCallback } from "react";

const PAGE_SIZE = 10;

const dummyUsers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "User" : "Editor",
  status: i % 2 === 0 ? "Active" : "Inactive",
  plan: i % 2 === 0 ? "Pro" : "Free",
}));

export const usePagination = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return dummyUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [search, roleFilter]);

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);

  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  }, [filteredUsers, page]);

  const tableRows = useMemo(() => {
    return paginatedUsers.map((u) => [
      u.name,
      u.email,
      u.role,
      u.status,
      u.plan,
    ]);
  }, [paginatedUsers]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setPage(1);
    },
    [],
  );

  const handleRoleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRoleFilter(e.target.value);
      setPage(1);
    },
    [],
  );

  const handlePrev = useCallback(() => {
    setPage((p) => Math.max(p - 1, 1));
  }, []);

  const handleNext = useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages));
  }, [totalPages]);

  return {
    search,
    roleFilter,
    page,
    totalPages,
    tableRows,
    handleSearchChange,
    handleRoleChange,
    handlePrev,
    handleNext,
  };
};
