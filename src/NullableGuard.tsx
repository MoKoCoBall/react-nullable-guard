import { NullableGuardProps } from "../types/NullableGuard";

export function NullableGuard<T>({
  value,
  fallback = null,
  children,
}: NullableGuardProps<T>) {
  if (value === null || value === undefined) return <>{fallback}</>;
  return <>{children(value)}</>;
}
