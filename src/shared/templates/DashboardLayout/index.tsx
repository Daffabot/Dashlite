import type { FC } from "react";
import { memo, useState, useCallback, useMemo } from "react";
import Sidebar from "../../organisms/Sidebar";
import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";
import MainContent from "../../organisms/MainContent";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import ProfileMenu from "../../molecules/ProfileMenu";
import HamburgerMenu from "../../organisms/HamburgerMenu";
import HamburgerButton from "../../molecules/HamburgerButton";
import Card from "../../molecules/Card";
import {
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { hasAccess } from "@/modules/auth/constants/roles";

/**
 * App-wide layout that composes the sidebar, navbar, breadcrumbs and footer.
 * It also manages the mobile hamburger menu state.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render inside the layout
 * @returns {JSX.Element} Structured application layout
 */
const DashboardLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  /**
   * Primary navigation items rendered in the sidebar and hamburger menu.
   * Each item defines a visible label, a route path and an icon.
   */
  const navItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <HomeIcon className="stroke-2" />,
      display: hasAccess(user?.role, "user"),
    },
    {
      label: "Users",
      path: "/dashboard/users",
      icon: <UsersIcon className="stroke-2" />,
      display: hasAccess(user?.role, "admin"),
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: <Cog6ToothIcon className="stroke-2" />,
      display: hasAccess(user?.role, "owner"),
    },
  ];

  /**
   * Mapping between route paths and human-friendly page titles.
   * Used by the top navbar to display the current page context.
   */
  const pageTitles = {
    "/dashboard": `${user.role?.replace(/^./, user.role[0].toUpperCase())} Dashboard`,
    "/dashboard/settings": "Settings",
    "/dashboard/users": "Users Management",
    "/dashboard/accounts/notifications": "Notifications",
    "/dashboard/accounts": "My Account",
  };

  /**
   * Actions presented in the profile menu on small screens hamburger overlay.
   * Items may either navigate via `path` or trigger an action via `onClick`.
   */
  const profileActions = [
    {
      label: "Notifications",
      path: "/dashboard/accounts/notifications",
      icon: <BellIcon className="w-5 h-5 stroke-2" />,
      variant: "primary" as const,
    },
    {
      label: "Account Settings",
      path: "/dashboard/accounts",
      icon: <Cog6ToothIcon className="w-5 h-5 stroke-2" />,
      variant: "primary" as const,
    },
    {
      label: "Log Out",
      onClick: async () => {
        await logout();
        navigate("/login");
      },
      icon: <ArrowRightOnRectangleIcon className="w-5 h-5 stroke-2" />,
      variant: "danger" as const,
    },
  ];

  /**
   * Basic profile information used by the hamburger menu overlay.
   */
  const profileInfo = {
    name: user.username,
    email: user.email,
    avatar: "https://i.pravatar.cc/100?img=40",
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  /** Opens the mobile hamburger menu. */
  const handleOpenMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  /** Closes the mobile hamburger menu. */
  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  /**
   * Prebuilt actions section for the navbar (profile menu on large screens,
   * hamburger trigger on small screens).
   */
  const navbarActions = useMemo(
    () => (
      <div className="flex items-center gap-4">
        <div className="hidden lg:block">
          <ProfileMenu profileInfo={profileInfo} />
        </div>
        <div className="lg:hidden">
          <HamburgerButton onClick={handleOpenMobileMenu} />
        </div>
      </div>
    ),
    [handleOpenMobileMenu],
  );
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden lg:block">
        <Sidebar navItems={navItems} />
      </div>

      <div className="flex flex-col flex-1">
        <Navbar
          pageTitles={pageTitles}
          defaultTitle="Unknown Page"
          actions={navbarActions}
        />
        <MainContent>
          <Card>
            <Breadcrumbs />
          </Card>
          {children}
        </MainContent>
        <Footer />
      </div>

      {isMobileMenuOpen && (
        <HamburgerMenu
          navItems={navItems}
          profileActions={profileActions}
          profileInfo={profileInfo}
          onClose={handleCloseMobileMenu}
        />
      )}
    </div>
  );
};

export default memo(DashboardLayout);
