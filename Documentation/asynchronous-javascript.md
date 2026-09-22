
# Asynchronous JavaScript 
------


## 1. Core Concurrency Concepts
* **Synchronous vs. Asynchronous**: Synchronous code executes sequentially on the main thread, blocking execution until complete. Asynchronous code runs non-blocking operations in the background.
* **Event Loop & Runtime**: The JavaScript engine (e.g., V8) executes code, while the runtime environment provides browser APIs, the call stack, and task queues.
* **Callbacks**: Functions passed as arguments to be executed after an asynchronous operation completes.

## 2. The Fetch API & HTTP Methods
* **`fetch()`**: Initiates network requests and returns a Promise resolving to a `Response` object.
* **Common Methods**:
  * **`GET`**: Retrieves data (default method). Must parse response streams (e.g., `.json()`).
  * **`POST`**: Sends data to create a new resource (requires headers and a JSON stringified body).
  * **`PUT`**: Fully replaces an existing resource.
  * **`DELETE`**: Removes a specified server resource.

## 3. Promises & Asynchronous Control Flow
* **Promises**: Objects representing the eventual completion (fulfillment) or failure of an async operation.
* **Chaining (`.then()` / `.catch()`)**: Sequentially links asynchronous operations, allowing unified error handling at the end of the chain.
* **`async/await`**: Syntactic sugar built on top of promises making asynchronous code look synchronous.
  * **`async`**: Defines an asynchronous function returning a Promise.
  * **`await`**: Pauses function execution until the awaited Promise resolves.
  * **Error Handling**: Uses familiar `try...catch` blocks for cleaner error management.

## 4. Script Loading Attributes & Browser APIs
* **`async` Attribute**: Downloads scripts asynchronously in the background while parsing HTML, pausing HTML parsing immediately to execute the script once downloaded. Best for independent scripts.
* **`defer` Attribute**: Downloads scripts asynchronously while parsing HTML, deferring execution until the HTML document is fully parsed. Maintains script execution order.
* **Geolocation API**: Accesses user coordinates securely via `navigator.geolocation.getCurrentPosition()`.
