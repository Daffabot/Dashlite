import type { FC } from "react";
import clsx from "clsx";
import { memo } from "react";
import type { FormProps, FormFieldProps } from "@/types";

/**
 * Simple form wrapper adding vertical spacing and class merging.
 */
export const Form: FC<FormProps> = memo(({ className, children, ...props }) => {
  return (
    <form className={clsx("space-y-4", className)} {...props}>
      {children}
    </form>
  );
});

/**
 * Labeled field container with optional error text.
 */
export const FormField: FC<FormFieldProps> = memo(
  ({ label, error, children, className }) => {
    return (
      <div className={clsx("flex flex-col gap-1", className)}>
        {label && <label className="text-sm text-neutral-700">{label}</label>}
        {children}
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  },
);
