import type { FC } from "react";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import type { SidebarProps } from "@/types";

/**
 * Vertical navigation sidebar showing logo, navigation links and a footer area.
 * Highlights the active route based on the current location.
 */
const Sidebar: FC<SidebarProps> = ({
  logo = <span className="text-xl font-bold">Dashlite</span>,
  navItems,
  footer = <span className="text-sm text-white font-medium">v1.0.0</span>,
  className,
}) => {
  const location = useLocation();

  return (
    <aside
      className={clsx(
        "w-56 h-screen rounded-br-xl bg-darkblue-dashlite text-white flex flex-col",
        className,
      )}
    >
      <div className="flex items-center p-4 h-20 border-b border-lightblue-dashlite/80">
        {logo}
      </div>

      <nav className="flex-1 p-2 space-y-2">
        {navItems
          .filter((item) => item.display)
          .map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2 rounded-md font-semibold transition",
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

      <div className="p-4 h-14 border-t border-lightblue-dashlite/80">
        {footer}
      </div>
    </aside>
  );
};

export default memo(Sidebar);
