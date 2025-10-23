import React, { useEffect, useState, memo } from "react";
import clsx from "clsx";
import { alertBus } from "@/utils/alertBus";
import type { AlertProps } from "@/types";

export const Alert: React.FC<AlertProps> = memo(
  ({
    type = "info",
    message,
    title,
    duration = 3000,
    className,
    display = false,
  }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const handler = () => {
        setShow(true);
        setTimeout(() => setShow(false), duration);
      };
      alertBus.addEventListener("trigger", handler);
      return () => alertBus.removeEventListener("trigger", handler);
    }, [duration]);

    return (
      <div
        className={clsx(
          "flex items-start gap-3 p-4 rounded-xl border shadow-sm text-sm transition-all duration-300 ease-in-out",
          {
            "bg-green-50 border-green-200 text-green-700": type === "success",
            "bg-red-50 border-red-200 text-red-700": type === "error",
            "bg-yellow-50 border-yellow-200 text-yellow-700":
              type === "warning",
            "bg-blue-50 border-blue-200 text-blue-700": type === "info",
          },
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
          display && "!opacity-100",
          className,
        )}
      >
        <div>
          <div className="font-medium">{title}</div>
          <p>{message}</p>
        </div>
      </div>
    );
  },
);
