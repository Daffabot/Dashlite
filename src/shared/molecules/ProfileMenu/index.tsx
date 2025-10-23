import { useState, useRef, useEffect, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BellIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import type { ProfileInfo } from "@/types";

/**
 * Avatar-triggered profile dropdown with quick links and logout action.
 */
const ProfileMenu = ({ profileInfo }: { profileInfo: ProfileInfo }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-15 h-15 rounded-full overflow-hidden border-2 border-neutral-300 bg-indigo-500/50 transition-all duration-500"
      >
        <img
          src={profileInfo.avatar}
          alt={`${profileInfo.name} Avatar`}
          title={profileInfo.name}
          className="w-full h-full object-cover hover:opacity-60 transition-all duration-500"
        />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white drop-shadow-lg border border-slate-300 rounded-lg z-50">
          <Link
            to="/dashboard/accounts/notifications"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:rounded-t-lg text-sm text-neutral-700"
            onClick={() => setOpen(false)}
          >
            <BellIcon className="w-5 h-5 text-gray-500" />
            Notifications
          </Link>
          <Link
            to="/dashboard/accounts"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm text-neutral-700"
            onClick={() => setOpen(false)}
          >
            <Cog6ToothIcon className="w-5 h-5 text-gray-500" />
            Account Settings
          </Link>
          <Link
            to="#"
            onClick={() => {
              setOpen(false);
              logout();
              navigate("/login");
            }}
            className="flex items-center text-red-500 gap-2 px-4 py-2 hover:bg-gray-100 hover:rounded-b-lg text-sm"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default memo(ProfileMenu);
