

# ARIA Accessibility
------------



## 1. Common ARIA Attributes
* **`aria-expanded`**: Conveys the open/closed state of a disclosure or toggle widget to assistive technologies.
* **`aria-haspopup`**: Indicates that an element triggers a pop-up (e.g., `menu`, `dialog`, or `true`).
* **`aria-checked`**: Reflects the checked state for custom checkboxes, radio buttons, or switches.
* **`aria-disabled`**: Marks an element as disabled specifically for screen readers (often paired with `tabindex="-1"`).
* **`aria-selected`**: Indicates the selected state in custom components like tab lists or grids.
* **`aria-controls`**: Associates a control element with the ID of the element it manipulates.

## 2. Live Regions & Dynamic Content
* **`aria-live`**: Designates dynamic regions; the `polite` value waits for current screen reader utterances to finish before announcing updates.
* **`contenteditable`**: Transforms standard elements into live text editors (combine with `aria-label` for accessible naming).

## 3. Focus Management Events
* **`focus` Event**: Fires when an element receives keyboard or programmatic focus.
* **`blur` Event**: Fires when an element loses focus.
