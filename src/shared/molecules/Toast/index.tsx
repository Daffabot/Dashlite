import React, { useEffect, memo } from "react";
import clsx from "clsx";
import type { ToastProps } from "@/types";

const baseStyles =
  "flex items-center gap-3 p-3 rounded-xl shadow-md text-sm animate-slide-in";

const typeStyles: Record<string, string> = {
  success: "bg-green-600 text-white",
  error: "bg-red-600 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-600 text-white",
};

/**
 * Temporary toast notification with auto-dismiss timer.
 */
export const Toast: React.FC<ToastProps> = memo(
  ({ message, type = "info", duration = 3000, onClose, className }) => {
    useEffect(() => {
      if (!duration) return;
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
      <div className={clsx(baseStyles, typeStyles[type], className)}>
        <span>{message}</span>
      </div>
    );
  },
);
