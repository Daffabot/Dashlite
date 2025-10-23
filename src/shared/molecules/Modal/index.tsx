import type { FC } from "react";
import clsx from "clsx";
import { memo } from "react";
import type { ModalProps } from "@/types";
import Button from "../../atoms/Button";

/**
 * Accessible modal dialog with overlay.
 */

/**
 * Renders a centered modal dialog when `isOpen` is true.
 *
 * @param {ModalProps} props - Modal props
 * @param {boolean} props.isOpen - Whether the modal is visible
 * @param {() => void} props.onClose - Callback to close the modal
 * @param {string} [props.title] - Optional modal header title
 * @param {React.ReactNode} props.children - Modal body content
 * @param {string} [props.className] - Extra classes for the dialog container
 * @returns {JSX.Element|null} Modal markup or null when closed
 */
const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 h-full">
      <div
        className={clsx(
          "bg-white rounded-lg shadow-lg w-full max-w-md p-4",
          className,
        )}
      >
        {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
        <div>{children}</div>
        <div className="flex justify-end gap-2 mt-4">
          <Button
            onClick={onClose}
            variant="secondary"
            className="px-3 py-1 rounded-md text-sm"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
