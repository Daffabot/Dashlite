import type { LoginResponse } from "@/types";

// ===== LOGIN =====
export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const res = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include", // penting untuk cookie
  });
  if (!res.ok) throw new Error("Invalid credentials");
  return res.json();
}

// ===== REGISTER =====
export async function register(
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
): Promise<LoginResponse> {
  const res = await fetch(import.meta.env.VITE_API_URL + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, confirmPassword }),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}

// ===== FORGOT PASSWORD =====
export async function forgotPassword(
  email: string,
): Promise<{ message: string }> {
  const res = await fetch(
    import.meta.env.VITE_API_URL + "/auth/forgot-password",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    },
  );
  if (!res.ok) throw new Error("Email not found");
  return res.json();
}

export async function logout() {
  const res = await fetch(import.meta.env.VITE_API_URL + "/auth/logout", {
    method: "POST",
    credentials: "include", // kirim cookie untuk dihapus
  });
  if (!res.ok) throw new Error("Logout failed");
}

export async function getCurrentUser() {
  const res = await fetch(import.meta.env.VITE_API_URL + "/auth/me", {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) return null;
  return res.json();
}
