import type { FC } from "react";
import { useState, useRef, useEffect, memo } from "react";
import clsx from "clsx";
import type { DropdownProps } from "@/types";
import Button from "../../atoms/Button";
/**
 * Headless dropdown wrapper: renders a trigger and a floating menu.
 * Closes when clicking outside.
 */
const Dropdown: FC<DropdownProps> = ({ trigger, children, className }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <Button onClick={() => setOpen(!open)}>{trigger}</Button>
      {open && (
        <div
          className={clsx(
            "absolute right-0 mt-2 w-40 bg-white border border-neutral-200 rounded-md shadow-md z-10 space-y-2",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default memo(Dropdown);
