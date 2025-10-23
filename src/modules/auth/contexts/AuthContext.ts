import { createContext } from "react";
import type { AuthContextType } from "@/types";

export const AuthContext = createContext<AuthContextType | null>({
  login: async () => { throw new Error("Not implemented"); },
  register: async () => { throw new Error("Not implemented"); },
  logout: async () => { throw new Error("Not implemented"); },
  user: null,
  isReady: true,
});
