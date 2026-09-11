
# JavaScript Maps & Sets Keynotes

## 1. Sets & WeakSets
* **Set**: A collection of unique values ensuring each element appears only once (useful for eliminating duplicates).
  * **Methods & Properties**: `add()`, `delete()`, `has()`, `clear()`, `keys()` / `values()` (aliases), `forEach()`, and `size`.
* **WeakSet**: A collection holding only weakly referenced *objects* (no primitives). Objects are automatically removed from memory when no longer referenced elsewhere.

## 2. Maps & WeakMaps
* **Map**: A key-value collection similar to standard objects but supports keys of any data type (including objects and functions) with optimized performance for frequent insertions and deletions.
  * **Methods & Properties**: `set()`, `get()`, `delete()`, `has()`, `clear()`, and `size`.
* **WeakMap**: A key-value collection where keys must be objects and are held with weak references, enabling automatic garbage collection.
