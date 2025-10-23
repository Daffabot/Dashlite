import type { FC } from "react";
import clsx from "clsx";
import { memo } from "react";
import type { ButtonProps } from "@/types";

/**
 * Button component with style variants.
 * Inherits all native button attributes.
 */

/**
 * Renders a themed button.
 *
 * @param {ButtonProps} props - Button props extending native attributes
 * @param {"primary"|"secondary"|"danger"} [props.variant="primary"] - Visual style variant
 * @param {string} [props.className] - Additional class names to merge
 * @returns {JSX.Element} Clickable button element
 */
const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-md text-sm font-bold transition focus:outline-none focus:ring-1";
  const variants: Record<string, string> = {
    primary:
      "bg-lightblue-dashlite text-white-dashlite hover:bg-darkblue-dashlite focus:ring-neutral-500",
    secondary:
      "bg-neutral-200 text-neutral-800 border border-neutral-300 hover:bg-neutral-300 focus:ring-neutral-400",
    danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-400",
  };
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);
