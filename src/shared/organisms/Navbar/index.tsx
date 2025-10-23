import type { FC } from "react";
import { memo } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import type { NavbarProps } from "@/types";

/**
 * Top navigation bar displaying current page title and optional action area.
 */

/**
 * Renders a responsive navbar.
 *
 * - On large screens: shows title on the left and actions on the right
 * - On small screens: centers title and right-aligns actions
 *
 * @param {NavbarProps} props - Navbar props
 * @param {Record<string,string>} [props.pageTitles] - Map of pathname to title
 * @param {string|React.ReactNode} [props.defaultTitle] - Fallback title
 * @param {React.ReactNode} [props.actions] - Right-aligned actions area
 * @param {string} [props.className] - Additional classes for the header
 * @returns {JSX.Element} Header element
 */
const Navbar: FC<NavbarProps> = ({
  actions,
  className,
  pageTitles = {
    "/": "Admin Dashboard",
    "/settings": "Settings",
    "/notifications": "Notifications",
    "/users": "Users",
    "/account": "Account",
  },
  defaultTitle = "Dashboard",
}) => {
  const location = useLocation();

  const title = pageTitles[location.pathname] || defaultTitle;
  return (
    <header
      className={clsx(
        "h-20 bg-lightblue-dashlite border-b rounded-b-xl lg:rounded-br-xl lg:rounded-b-none border-neutral-200 flex items-center px-4",
        className,
      )}
    >
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="font-semibold text-white text-2xl">{title}</div>
        <div className="flex items-center gap-4">{actions}</div>
      </div>

      <div className="lg:hidden flex items-center justify-between w-full">
        <div className="flex-1"></div>
        <div className="font-semibold text-white text-2xl text-center flex-1">
          {title}
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          {actions}
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
