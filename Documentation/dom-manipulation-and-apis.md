
# DOM Manipulation & Web APIs
----------

## 1. Core DOM & Selectors
* **DOM**: Document Object Model representing HTML nodes hierarchically.
* **Selectors**: 
  * `getElementById("id")`: Retrieves a unique element.
  * `querySelector("selector")`: Returns the first matching element.
  * `querySelectorAll("selector")`: Returns a NodeList of matching elements.

## 2. Content & Node Manipulation
* **Content Properties**: `innerText` (visible text), `textContent` (all plain text), and `innerHTML` (HTML markup).
* **Element Operations**: `document.createElement()`, `parent.appendChild()`, `parent.removeChild()`, and `element.setAttribute()`.

## 3. Events & Propagation
* **Event Listeners**: Attached via `element.addEventListener(type, listener)` and removed with `removeEventListener()`.
* **Bubbling & Delegation**: Events bubble up to parent nodes; delegation listens on a parent to handle child events efficiently.
* **Special Events**: `DOMContentLoaded` (fires when HTML is parsed) and `change` (for input updates).

## 4. Styling, Timers & Animation
* **Styles & Classes**: Direct inline styling via `element.style` or dynamic class modification using `element.classList` (`add`, `remove`, `toggle`).
* **Timers**: `setTimeout()` for delayed actions and `setInterval()` / `clearInterval()` for recurring tasks.
* **Visuals**: `requestAnimationFrame()` for smooth loops, **Web Animations API**, and the **Canvas API** (`ctx.fillRect()`).

## 5. Modals & Dialogs
* **Dialog Element**: Native `<dialog>` support with `showModal()` (blocks background interaction) and `close()`.
