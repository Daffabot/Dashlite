import { useEffect } from "react";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { hasAccess } from "@/modules/auth/constants/roles";
import type { ProtectedRouteProps } from "@/types";
import Spinner from "@/shared/atoms/Spinner";

export const ProtectedRoute = ({
  children,
  role = "user",
}: ProtectedRouteProps) => {
  const { user, isReady } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isReady && !user) {
      navigate("/login", { replace: true });
    }
  }, [isReady, user, navigate]);

  if (isReady) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user) return null;

  if (!hasAccess(user.role, role)) {
    navigate("/forbidden", { replace: true });
    return null;
  }

  return <>{children}</>;
};
