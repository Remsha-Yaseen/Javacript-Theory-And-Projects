
# JavaScript Dates 

## 1. The `Date` Object & Epoch
* **`new Date()`**: Creates a new Date instance representing the current date and time based on the system clock.
* **`Date.now()`**: Returns the number of milliseconds elapsed since the Unix epoch (January 1, 1970, 00:00:00 UTC).

## 2. Date Getter Methods
* **`getDate()`**: Returns the day of the month as an integer (`1` to `31`).
* **`getMonth()`**: Returns the month as a zero-based index (`0` for January through `11` for December).
* **`getFullYear()`**: Returns the four-digit year.

## 3. Date Formatting Methods
* **`toISOString()`**: Formats the date using the extended ISO 8601 standard format (`YYYY-MM-DDTHH:mm:ss.sssZ`).
* **`toLocaleDateString()`**: Formats dates according to local conventions.
  * Accepts an optional `locales` string (e.g., `"en-US"`, `"en-GB"`) and an `options` object to customize display (e.g., `weekday`, `year`, `month`, `day`).
