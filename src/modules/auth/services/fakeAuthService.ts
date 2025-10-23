import type { User } from "@/types";

const USERS: User[] = [
  {
    id: 1,
    username: "demoUser",
    email: "user@example.com",
    role: "user",
    token: "token-user",
  },
  {
    id: 2,
    username: "demoAdmin",
    email: "admin@example.com",
    role: "admin",
    token: "token-admin",
  },
  {
    id: 3,
    username: "demoOwner",
    email: "owner@example.com",
    role: "owner",
    token: "token-owner",
  },
];

export async function login(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find((u) => u.email === email);
      if (!user) return reject("User not found");
      if (password !== "123456") return reject("Invalid password");

      sessionStorage.setItem("user", JSON.stringify(user));
      resolve(user);
    }, 1000);
  });
}

export async function register(
  username: string,
  email: string,
  password: string,
): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (USERS.some((u) => u.email === email))
        return reject("Email already exists");

      const newUser: User = {
        id: USERS.length + 1,
        username,
        email,
        role: "user",
        token: "token-" + Math.random().toString(36).substring(2, 8),
      };

      USERS.push(newUser);
      sessionStorage.setItem("user", JSON.stringify(newUser));
      resolve(newUser);
    }, 1000);
  });
}

export async function forgotPassword(email: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find((u) => u.email === email);
      if (!user) return reject("Email not found");
      resolve("Password reset link sent to " + email);
    }, 1000);
  });
}

export async function logout() {
  sessionStorage.removeItem("user");
  return Promise.resolve();
}

export async function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = sessionStorage.getItem("user");
      resolve(data ? JSON.parse(data) : null);
    }, 1000);
  });
}
