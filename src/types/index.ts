import React from "react";
import type {
  ReactNode,
  FormHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import type { Role } from "@/modules/auth/constants/roles";

// Theme types
export type Theme = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

// Navbar types
export interface NavbarProps {
  actions?: ReactNode;
  className?: string;
  pageTitles?: Record<string, string>;
  defaultTitle?: string | ReactNode;
}

// MainContent types
export interface MainContentProps {
  children: ReactNode;
}

// Single navigation item used by the sidebar.
export interface NavItem {
  label: string;
  path: string;
  icon?: ReactNode;
  display?: boolean;
}

// Props for the `Sidebar` navigation component.
export interface SidebarProps {
  logo?: ReactNode;
  navItems: NavItem[];
  footer?: ReactNode;
  className?: string;
}

// Hamburger types
export interface ProfileAction {
  label: string;
  path?: string;
  onClick?: () => void;
  icon: ReactNode;
  variant?: "danger" | "primary" | "secondary";
}

export interface ProfileInfo {
  name: string;
  email: string;
  avatar: string;
}

export interface HamburgerMenuProps {
  navItems: NavItem[];
  profileActions: ProfileAction[];
  profileInfo: ProfileInfo;
  version?: string;
  onClose: () => void;
}

// HamburgerButton types
export interface HamburgerButtonProps {
  onClick: () => void;
  className?: string;
}

// Card types
export interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

// Dropddown types
export interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

// Form types
export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: ReactNode;
}

export interface FormFieldProps {
  label?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

// Spinner types
export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Table types
export interface TableProps {
  headers: string[];
  rows: ReactNode[][];
  className?: string;
}

// Common visual and labeling props shared across all input variants.
type CommonProps = {
  label?: string;
  name?: string;
  className?: string;
  wrapperClass?: string;
  required?: boolean;
};

// Text-like input props (text, password, email, number, date).
interface TextInputProps extends CommonProps {
  type: "text" | "password" | "email" | "number" | "date";
  value?: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Multiline input props.
interface TextareaProps extends CommonProps {
  type: "textarea";
  value?: string;
  placeholder?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// Select input props.
interface SelectProps extends CommonProps {
  type: "select";
  value?: string;
  options: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Checkbox input props.
interface CheckboxProps extends CommonProps {
  type: "checkbox";
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Radio input props.
interface RadioProps extends CommonProps {
  type: "radio";
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Range slider props.
interface RangeProps extends CommonProps {
  type: "range";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Union of supported input variants.
export type InputProps =
  | TextInputProps
  | TextareaProps
  | SelectProps
  | CheckboxProps
  | RadioProps
  | RangeProps;

// Button types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

// NotificationPage types
export interface Notification {
  id: number;
  message: string;
  read: boolean;
}

// ProtectedRoute types
export interface ProtectedRouteProps {
  children: ReactNode;
  role?: Role;
}

// AuthContext types
export interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: "user" | "admin" | "owner";
  token?: string;
  success?: boolean;
}

export interface AuthContextType {
  user: AuthUser | null;
  isReady: boolean;
  login: (email: string, password: string) => Promise<AuthUser>;
  register: (
    name: string,
    email: string,
    password: string,
  ) => Promise<AuthUser>;
  logout: () => void;
}

// fakeAuthService types
type RoleFake = "user" | "admin" | "owner";

export interface User {
  id: number;
  username: string;
  email: string;
  role: RoleFake;
  token: string;
}

// authService types
export interface LoginResponse {
  user: {
    id: string;
    name: string;
    role: "user" | "admin" | "owner";
  };
}

// BarChartComponent types
export type BarChartProps = {
  data: any[];
  dataKeys: string[];
  colors?: string[];
  className?: string;
};

// LineChartComponent types
export type LineChartProps = {
  data: any[];
  dataKeys: string[];
  colors?: string[];
  className?: string;
};

// PieChartComponent types
export type PieChartProps = {
  data: { name: string; value: number }[];
  colors?: string[];
  className?: string;
};

// Toast types
export type ToastProps = {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose?: () => void;
  className?: string;
};

// Alert types
export type AlertProps = {
  type?: "success" | "error" | "warning" | "info";
  message: string;
  title?: string;
  duration?: number;
  className?: string;
  display?: boolean;
};

// CodePageProps types
export interface CodePageProps {
  codeProps: {
    code: number;
    title: string;
    desc: string;
  };
}

// ChartLoaderProps types
export interface ChartLoaderProps {
  children: ReactNode;
}

// UserTableProps types
export interface UserTableProps {
  rows: string[][];
}

// UserPaginationControlsProps types
export interface UserPaginationControlsProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

// UserFilterBarProps types
export interface UserFilterBarProps {
  search: string;
  roleFilter: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
