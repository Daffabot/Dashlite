import { useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "../contexts/AuthContext";
import type { AuthUser } from "@/types";
import {
  login as apiLogin,
  logout as apiLogout,
  register as apiRegister,
  getCurrentUser,
} from "../services/fakeAuthService";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const data = getCurrentUser();
    return data;
  });
  const [isReady, setIsReady] = useState<boolean>(true);

  // Optional verification step: attempt to hydrate from API if available
  // Its for async function
  useEffect(() => {
    let mounted = true;
    (async () => {
      const current = await getCurrentUser();
      if (mounted) {
        setUser(current);
        setIsReady(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Its for sync function
  /*
  useEffect(() => {
    const now = getCurrentUser();
    setUser(now);
    setIsReady(true);
  }, []); */

  async function login(email: string, password: string): Promise<AuthUser> {
    const res = await apiLogin(email, password);
    if (!res) throw new Error("Invalid user data");
    setUser(res);
    return { ...res, success: true };
  }

  async function register(
    name: string,
    email: string,
    password: string,
  ): Promise<AuthUser> {
    const res = await apiRegister(name, email, password);
    if (!res) throw new Error("Invalid user data");
    setUser(res);
    return { ...res, success: true };
  }

  async function logout() {
    try {
      await apiLogout();
      setUser(null);
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  }

  const value = useMemo(
    () => ({
      login,
      register,
      logout,
      user,
      isReady,
    }),
    [user, isReady],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
