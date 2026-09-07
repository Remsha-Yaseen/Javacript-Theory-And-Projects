
# JavaScript Regular Expressions
----------



## 1. Core Methods & Constructor
* **`/pattern/` & `RegExp`**: Define patterns literally or dynamically using the `RegExp` constructor.
* **`test()`**: Returns a boolean indicating whether a match exists in a string.
* **`match()` / `matchAll()`**: Retrieves matching results or an iterator for all matching groups.
* **`replace()` / `replaceAll()`**: Substitutes matched patterns with new strings.

## 2. Modifiers (Flags)
* **`i`**: Case-insensitive matching.
* **`g`**: Global matching (finds all instances rather than stopping at the first).
* **`m`**: Multi-line mode for `^` and `$` anchors.
* **`d`**: Generates indices for substring matches.
* **`u` / `v`**: Unicode and advanced property matching.
* **`y`**: Sticky matching from `lastIndex`.
* **`s`**: Dotall mode allowing `.` to match line breaks.

## 3. Character Classes & Quantifiers
* **Character Classes**: `.` (wildcard), `\d` (digits), `\w` (word characters), `\s` (whitespace), and uppercase variants for negations (`\D`, `\W`, `\S`).
* **Quantifiers**: `*` (0+), `+` (1+), `?` (0 or 1), `{n}` (exact), `{n,}` (n or more), and `{n,m}` (range).

## 4. Assertions & Groups
* **Anchors**: `^` (start of string/line) and `$` (end of string/line).
* **Lookarounds**: Positive/negative lookaheads (`(?=...)`, `(?!...)`) and lookbehinds (`(?<=...)`, `(?<!...)`).
* **Groups & Backreferences**: Capturing groups `(...)`, non-capturing groups `(?:...)`, and backreferences (`\1`, `$1`) for reusing matched patterns.
