import type { FC } from "react";
import { memo } from "react";

/**
 * Application footer showing current year and product name.
 */
const Footer: FC = () => {
  return (
    <footer className="h-14 bg-white-dashlite border-t border-neutral-200 shadow-md flex items-center justify-center text-sm text-neutral-600">
      © {new Date().getFullYear()} Dashlite. All rights reserved.
    </footer>
  );
};

export default memo(Footer);
