import React, { useState, memo, useCallback } from "react";
import Card from "@/shared/molecules/Card";
import Button from "@/shared/atoms/Button";
import type { Notification } from "@/types";
import NotificationItem from "../molecules/NotificationItem";

const dummyNotifications: Notification[] = [
  { id: 1, message: "New user registers API.", read: false },
  {
    id: 2,
    message: "The system will be under maintenance tonight.",
    read: false,
  },
  { id: 3, message: "API payment successfully processed.", read: false },
  { id: 4, message: "New feature update available.", read: false },
];

/**
 * Page for managing and viewing user notifications.
 */

const NotificationCardWrapper: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(dummyNotifications);

  const markAsRead = useCallback((id: number) => {
    setNotifications((prev) => {
      const updatedNotifications = prev.map((n) =>
        n.id === id ? { ...n, read: true } : n,
      );

      // Hanya set state jika ada perubahan
      if (updatedNotifications !== prev) {
        return updatedNotifications;
      }

      return prev;
    });
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => {
      const updatedNotifications = prev.map((n) => ({ ...n, read: true }));

      // Hanya set state jika ada perubahan
      if (JSON.stringify(updatedNotifications) !== JSON.stringify(prev)) {
        return updatedNotifications;
      }

      return prev;
    });
  }, []);

  return (
      <Card title="Notifications">
        <Button variant="secondary" onClick={markAllAsRead} className="mb-4">
          Have Read All
        </Button>
        <ul className="space-y-3">
          {notifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              notif={notif}
              onMarkAsRead={() => markAsRead(notif.id)}
            />
          ))}
        </ul>
      </Card>
  );
};

export default memo(NotificationCardWrapper);
