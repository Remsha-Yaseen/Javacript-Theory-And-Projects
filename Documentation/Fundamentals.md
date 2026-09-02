Fundamentals
------------------



## 1. Constructors & Methods
* **String Constructor**: Wraps primitive values into objects (e.g., `new String("text")`).
* **`toString()` Method**: Converts values to strings with optional radix support (`2` to `36`).
* **Number Constructor**: Creates number objects and provides utilities like `toFixed()`.

## 2. Naming Conventions
* **Variables & Functions**: Use **camelCasing** (e.g., `isLoading`).
* **Booleans**: Use prefixes like `is`, `has`, or `can` (e.g., `hasPermission`).
* **Functions**: Use `get`/`set` prefixes and `handle` for event listeners.
* **Loops**: Use short iterators like `i`, `j`, or `k`.

## 3. Core Concepts
* **Sparse Arrays**: Arrays containing empty slots, distinct from explicit `undefined` values.
* **Linters & Formatters**: Code analysis via **ESLint** and style formatting via **Prettier**.
* **Memory Management**: Automated via JavaScript's **garbage collection**.
* **Closures**: Functions retaining access to their outer lexical scope after return.

## 4. Scoping, Hoisting & TDZ
* **`var`**: Function-scoped, redeclariable, and hoisted as `undefined`.
* **`let` & `const`**: Block-scoped and subject to the **Temporal Dead Zone** (throws `ReferenceError` if accessed before declaration).
* **Functions**: Fully hoisted (both name and body).

## 5. Modules
* **Imports & Exports**: Encapsulate and share code across files using named or default exports and imports.
