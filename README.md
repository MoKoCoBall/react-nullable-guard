# Nullable Guards

[![npm version](https://badge.fury.io/js/@mokoco%2Fnullable-guards.svg)](https://www.npmjs.com/package/@mokoco/nullable-guards)
[![CI](https://github.com/mokoco/nullable-guards/actions/workflows/build.yml/badge.svg)]
(https://github.com/mokoco/nullable-guards/actions/workflows/build.yml)

Safely unwrap `T | null | undefined` in React with declarative guards.  
No more manual null checks in your components – just wrap and use.

---

## ✨ Features

- Eliminate repetitive `if (!value) return null` checks
- Declarative: unwrap nullable values with a function-as-children pattern
- Lightweight & tree-shakable
- TypeScript friendly with full type inference
- Includes guards for single values, arrays, and object fields

---

## 📦 Installation

```bash
# npm
npm install @mokoco/nullable-guards

# yarn
yarn add @mokoco/nullable-guards
```

---

## 🚀 Usage

### ✅ NullableGuard (Basic)

```tsx
import { NullableGuard } from "@mokoco/nullable-guards";

type User = { name: string; email: string };

function Profile({ user }: { user: User | null }) {
  return (
    <NullableGuard value={user}>
      {(u) => (
        <div>
          <h2>{u.name}</h2>
          <p>{u.email}</p>
        </div>
      )}
    </NullableGuard>
  );
}
```

Output Example:
When user is `null`:

```tsx
<Profile user={null} />
```

Render nothing `null`

When user is **present**:

```tsx
<Profile user={{ name: "SH", email: "SH@example.com" }} />
```

Renders:

```html
<div>
  <h2>SH</h2>
  <p>SH@example.com</p>
</div>
```

---

### ✅ NullableListGuard

```tsx
import { NullableListGuard } from "@mokoco/nullable-guards";

type Task = { id: number; title: string };

function TaskList({ tasks }: { tasks: Task[] | null }) {
  return (
    <NullableListGuard value={tasks}>
      {(list) => (
        <ul>
          {list.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </NullableListGuard>
  );
}
```

**Only renders when the list is non-null and has at least one item.**

---

### ✅ NullableObjectGuard

```tsx
import { NullableObjectGuard } from "@mokoco/nullable-guards";

type Post = { title: string | null; content: string | null };

function Article({ post }: { post: Post }) {
  return (
    <NullableObjectGuard value={post}>
      {(p) => (
        <article>
          <h1>{p.title}</h1>
          <p>{p.content}</p>
        </article>
      )}
    </NullableObjectGuard>
  );
}
```

**Only renders when all fields in the object are non-null.**

---

## 🌿 Props

| Component           | Prop     | Type                       | Description                             |
| ------------------- | -------- | -------------------------- | --------------------------------------- |
| NullableGuard       | value    | T \| null \| undefined     | A single nullable value                 |
|                     | children | (value: T) => JSX.Element  | Renders if value is not null            |
| NullableListGuard   | value    | T[] \| null \| undefined   | A nullable array                        |
|                     | children | (list: T[]) => JSX.Element | Renders if array is non-empty           |
| NullableObjectGuard | value    | { [k: string]: any }       | Object with potentially null fields     |
|                     | children | (value: T) => JSX.Element  | Renders only if all fields are not null |

---

## 🧪 Testing

This package is tested using `Jest`.

```bash
# Run test suite
npm test
```

---

## 📦 Release & Versioning

Managed by `Changesets`.
Versions are automatically bumped and published to npm when merged to main.

---

## 📜 Changelog

v1.0.0
Initial release

`NullableGuard`, `NullableListGuard`, `NullableObjectGuard` components

---

## 📄 License

MIT © mokoco
