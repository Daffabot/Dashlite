import React, { memo } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { HamburgerButtonProps } from "@/types";
import Button from "../../atoms/Button";

/**
 * Icon button that toggles the mobile hamburger menu.
 */
const HamburgerButton: React.FC<HamburgerButtonProps> = memo(
  ({ onClick, className }) => {
    return (
      <Button
        onClick={onClick}
        className={clsx(
          "p-2 rounded-md text-white hover:bg-white/20 transition-colors",
          className,
        )}
      >
        <Bars3Icon className="w-7 h-7" />
      </Button>
    );
  },
);

HamburgerButton.displayName = "HamburgerButton";

export default HamburgerButton;
