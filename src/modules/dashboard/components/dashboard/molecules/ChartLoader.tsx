import React, { Suspense, memo } from "react";
import Spinner from "@/shared/atoms/Spinner";
import type { ChartLoaderProps } from "@/types";

const ChartLoader: React.FC<ChartLoaderProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default memo(ChartLoader);
