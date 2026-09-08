
# Form Validation & Submission

## 1. Constraint Validation API
* **`checkValidity()`**: Returns `true` if an element satisfies all HTML validation constraints, or `false` otherwise.
* **`reportValidity()`**: Triggers the browser's built-in validation feedback UI for invalid elements.
* **`validity` Property**: Object detailing specific constraint states (e.g., `patternMismatch`, `valueMissing`, `typeMismatch`).
* **`setCustomValidity()`**: Sets custom error messages to override default validation prompts.

## 2. Event Prevention
* **`preventDefault()`**: Stops the default browser behavior associated with an event, such as preventing a form from refreshing the page upon submission.

## 3. Form Submission & Attributes
* **Triggering Submissions**: Via a submit button, pressing `Enter` on an input, or calling `.submit()` / `.requestSubmit()` programmatically.
* **`action` Attribute**: Defines the target URL or path where form data is sent.
* **`method` Attribute**: Specifies the HTTP request method (`GET` for query parameters, `POST` for request bodies).
* **`enctype` Attribute**: Determines data encoding (`application/x-www-form-urlencoded`, `text/plain`, or `multipart/form-data` for file uploads).
