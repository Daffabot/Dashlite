import { memo } from "react";
import Button from "@/shared/atoms/Button";
import type { UserPaginationControlsProps } from "@/types";

const UserPaginationControls = memo(
  ({ page, totalPages, onPrev, onNext }: UserPaginationControlsProps) => {
    return (
      <div className="flex items-center justify-between mt-4">
        <Button variant="secondary" onClick={onPrev} disabled={page === 1}>
          Prev
        </Button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="secondary"
          onClick={onNext}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    );
  },
);

export default UserPaginationControls;