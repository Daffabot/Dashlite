import type { FC } from "react";
import clsx from "clsx";
import { memo } from "react";
import type { CardProps } from "@/types";

/**
 * Container with border, shadow and optional title used to group related content.
 */

/**
 * Renders a generic card container.
 *
 * @param {CardProps} props - Card props
 * @param {string} [props.title] - Optional header title displayed at the top
 * @param {React.ReactNode} props.children - Content inside the card
 * @param {string} [props.className] - Extra classes to customize appearance
 * @returns {JSX.Element} Card container
 */
const Card: FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-md border border-neutral-200 p-4",
        className,
      )}
    >
      {title && <h2 className="text-sm font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default memo(Card);
