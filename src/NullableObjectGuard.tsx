import { NullableObjectGuardProps } from "../types/NullableGuard";

export function NullableObjectGuard<T>({
  object,
  fallback = null,
  children,
}: NullableObjectGuardProps<T>) {
  if (object === null || object === undefined) return <>{fallback}</>;
  return <>{children(object)}</>;
}
