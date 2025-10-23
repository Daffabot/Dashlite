import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";

/**
 * Breadcrumb navigation derived from the current pathname.
 * Converts URL segments into labeled links.
 */
const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center text-sm font-bold w-fit">
      <HomeIcon className="stroke-2 w-5 h-5" />

      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");

        const labelMap: Record<string, string> = {
          dashboard: "Dashboard",
          users: "Users",
          settings: "Settings",
          accounts: "My Account",
          notifications: "Notifications",
        };

        const label = labelMap[segment] || segment;

        return (
          <span key={path} className="flex items-center">
            <span className="mx-2">/</span>
            {index === segments.length - 1 ? (
              <span>{label}</span>
            ) : (
              <Link to={path} className="hover:underline text-blue-800">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default memo(Breadcrumbs);
