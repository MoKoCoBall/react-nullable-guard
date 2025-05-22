import { NullableListGuardProps } from "../types/NullableGuard";

export function NullableListGuard<T>({
  list,
  fallback = null,
  children,
}: NullableListGuardProps<T>) {
  if (!list || list.length === 0) return <>{fallback}</>;
  return <>{children(list)}</>;
}
