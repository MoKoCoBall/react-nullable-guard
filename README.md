# NullableGuard

A simple React utility component that safely unwraps `T | null` props for children.  
No more manual null checks in your components – just wrap and use.

## ✨ Features

- Eliminate repetitive `if (!value) return null` checks
- Declarative: unwrap nulls with React children pattern
- Lightweight & tree-shakable
- Supports TypeScript with full type safety

---

## 📦 Installation

```bash
# npm
npm install @mokoco/nullable-guards

# yarn
yarn add @mokoco/nullable-guards
```

🚀 Usage

✅ Basic Example

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

If user is null, NullableGuard will render null safely.
If user has value, it will render the children with user as a non-null value.

🔐 Props

| Prop     | Type                        | Description                           |
| -------- | --------------------------- | ------------------------------------- |
| value    | `T \| null`                 | The nullable value you want to unwrap |
| children | `(value: T) => JSX.Element` | Render function with non-null `T`     |

🧪 Testing

This package is tested using **Jest** and **Vitest**.

```bash
# Run both test suites
npm test && npm run vitest
```

📄 License

MIT © mokoco
