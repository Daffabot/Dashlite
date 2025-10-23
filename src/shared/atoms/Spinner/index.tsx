import type { FC } from "react";
import clsx from "clsx";
import { memo } from "react";
import type { SpinnerProps } from "@/types";

/**
 * Animated loading spinner with three sizes.
 */
const Spinner: FC<SpinnerProps> = ({ size = "md", className }) => {
  const sizes: Record<string, string> = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-4",
  };

  return (
    <div
      className={clsx(
        "rounded-full border-neutral-300 border-t-darkblue-dashlite animate-spin",
        sizes[size],
        className,
      )}
    ></div>
  );
};

export default memo(Spinner);
