export const ROLE_HIERARCHY = ["user", "admin", "owner"] as const;

export type Role = (typeof ROLE_HIERARCHY)[number];

export function hasAccess(userRole: Role, requiredRole: Role): boolean {
  if (!userRole) return false;
  const userLevel = ROLE_HIERARCHY.indexOf(userRole);
  const requiredLevel = ROLE_HIERARCHY.indexOf(requiredRole);
  return userLevel >= requiredLevel;
}
