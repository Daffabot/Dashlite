import type { FC } from "react";
import { memo } from "react";
import type { MainContentProps } from "@/types";

/**
 * Scrollable main content area container for page bodies.
 */
const MainContent: FC<MainContentProps> = ({ children }) => {
  return (
    <main
      id="main-content"
      className="flex-1 bg-white-dashlite p-8 space-y-6 overflow-y-auto"
    >
      {children}
    </main>
  );
};

export default memo(MainContent);
