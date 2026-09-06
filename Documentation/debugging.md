
# Debugging & Error
----------------



## 1. Common Error Types
* **`SyntaxError`**: Triggered by structural code or grammar mistakes (e.g., missing brackets).
* **`ReferenceError`**: Occurs when accessing undefined variables or variables trapped in the temporal dead zone.
* **`TypeError`**: Caused by executing operations on incompatible data types (e.g., calling `.map()` on an object).
* **`RangeError`**: Triggered when a value is outside the allowable range of values (e.g., negative array length).

## 2. Exception Handling
* **`throw` Statement**: Generates custom user-defined exceptions to interrupt program flow when unexpected errors occur.
* **`try...catch...finally`**: Wraps risky code (`try`), captures errors (`catch`), and runs cleanup code regardless of success or failure (`finally`).

## 3. Debugging Tools & Techniques
* **`debugger` Statement**: Programmatically pauses code execution for DevTools inspection.
* **Breakpoints & Watchers**: Browser tools used to pause execution and monitor variable states over time.
* **Profiling**: Captures CPU usage, function calls, and performance bottlenecks.
* **Console Methods**: `console.dir()` for interactive object hierarchies and `console.table()` for displaying structured tabular data.
