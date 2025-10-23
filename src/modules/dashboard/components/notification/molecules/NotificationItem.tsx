import React, { memo} from "react";
import Button from "@/shared/atoms/Button";
import { CheckIcon } from "@heroicons/react/24/outline";
import type { Notification } from "@/types";

const NotificationItem: React.FC<{
  notif: Notification;
  onMarkAsRead: () => void;
}> = memo(
  ({ notif, onMarkAsRead }) => {
    return (
      <li
        key={notif.id}
        className={`flex items-center justify-between p-3 border rounded-md transition ${
          notif.read ? "bg-gray-100 text-gray-500" : "bg-white"
        }`}
      >
        <span>{notif.message}</span>
        <Button
          variant="secondary"
          onClick={onMarkAsRead}
          disabled={notif.read}
        >
          <CheckIcon className="w-4 h-4 sm" />
        </Button>
      </li>
    );
  },
  (prevProps, nextProps) => prevProps.notif.read === nextProps.notif.read,
);

export default NotificationItem;