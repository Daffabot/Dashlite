import React, { memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../atoms/Button";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { ProfileAction, HamburgerMenuProps } from "@/types";

/**
 * Mobile-only drawer menu with navigation, profile info and quick actions.
 */
const HamburgerMenu: React.FC<HamburgerMenuProps> = memo(
  ({ navItems, profileActions, profileInfo, version = "v1.0.0", onClose }) => {
    const location = useLocation();

    const handleActionClick = useCallback(
      (action: ProfileAction) => {
        if (action.onClick) {
          action.onClick();
        }
        onClose();
      },
      [onClose],
    );

    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />

        <div className="fixed left-0 top-0 h-full rounded-r-xl w-80 bg-darkblue-dashlite text-white animate-slide-in-left">
          <div className="flex items-center justify-between p-4 h-20 border-b border-lightblue-dashlite/80">
            <span className="text-xl font-bold">Dashlite</span>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems
              .filter((item) => item.display)
              .map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3 rounded-md font-semibold transition",
                      isActive
                        ? "bg-white text-black-dashlite"
                        : "text-white hover:bg-white/20",
                    )}
                  >
                    {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                    {item.label}
                  </Link>
                );
              })}
          </nav>

          <div className="p-4 border-t border-lightblue-dashlite/80">
            <div className="flex items-center gap-3 mb-4 p-3 rounded-md bg-white/10">
              <img
                src={profileInfo.avatar}
                alt={`${profileInfo.name} Avatar`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{profileInfo.name}</div>
                <div className="text-sm text-white/70">{profileInfo.email}</div>
              </div>
            </div>

            <div className="space-y-2">
              {profileActions.map((action, index) => {
                const isDanger = action.variant === "danger";
                const baseClasses =
                  "flex items-center font-semibold gap-3 px-4 py-3 rounded-md transition w-full text-left";
                const variantClasses = isDanger
                  ? "text-red-400 hover:bg-red-500/20"
                  : "text-white hover:bg-white/20";

                if (action.path) {
                  return (
                    <Link
                      key={index}
                      to={action.path}
                      onClick={onClose}
                      className={`${baseClasses} ${variantClasses}`}
                    >
                      <span className="w-5 h-5">{action.icon}</span>
                      {action.label}
                    </Link>
                  );
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleActionClick(action)}
                    className={`${baseClasses} ${variantClasses}`}
                    variant={action.variant}
                  >
                    <span className="w-5 h-5">{action.icon}</span>
                    {action.label}
                  </Button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-lightblue-dashlite/80 text-center text-sm text-white/70">
              {version}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

HamburgerMenu.displayName = "HamburgerMenu";

export default HamburgerMenu;
