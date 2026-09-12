
# Local Storage, CRUD & Client-Side Storage
---------------



## 1. CRUD & HTTP Methods
* **CRUD**: Create, Read, Update, and Delete operations for managing data.
* **HTTP Methods**: Standard actions for web resources (`GET` to fetch, `POST` to create, `PUT` to replace fully, `PATCH` to update partially, `DELETE` to remove).

## 2. Web Storage API (`localStorage` & `sessionStorage`)
* **`localStorage`**: Persists data across browser sessions and reboots until explicitly cleared.
  * *Methods*: `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, `clear()`.
* **`sessionStorage`**: Stores data temporarily for the duration of a single browser tab or session.
  * *Methods*: Same as `localStorage`.

## 3. Cookies & Security
* **Cookies**: Small data pieces sent by servers to maintain state in stateless HTTP. Managed via `document.cookie`.
* **Cookie Flags**:
  * **Session Cookies**: Deleted when the browser or tab closes.
  * **Secure Cookies**: Transmitted exclusively over HTTPS.
  * **HttpOnly Cookies**: Blocked from JavaScript access to prevent Cross-Site Scripting (XSS) attacks.

## 4. Advanced Storage & Caching APIs
* **Cache API**: Stores network request/response pairs for offline support and performance optimization (part of Service Worker API).
* **IndexedDB**: Built-in browser database for efficiently storing large amounts of structured JavaScript objects.
* **Service Workers**: Background scripts that intercept network requests and manage caching for Progressive Web Apps (PWAs).

## 5. Security Anti-Patterns
* **Excessive Tracking**: Collecting unneeded user behavior data without consent.
* **Browser Fingerprinting**: Identifying users via unique device/browser characteristics rather than cookies.
* **Sensitive Data Storage**: **Never** store passwords, tokens, or sensitive credentials in unencrypted client-side storage like `localStorage`.
