// This file contains types for NullableGuard components.

export type NullableGuardProps<T> = {
  value: T | null | undefined;
  fallback?: React.ReactNode;
  children: (value: T) => React.ReactNode;
};

export type NullableListGuardProps<T> = {
  list: T[] | null | undefined;
  fallback?: React.ReactNode;
  children: (list: T[]) => React.ReactNode;
};

export type NullableObjectGuardProps<T> = {
  object: T | null | undefined;
  fallback?: React.ReactNode;
  children: (object: T) => React.ReactNode;
};
