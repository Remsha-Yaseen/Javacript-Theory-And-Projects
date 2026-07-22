

// 1. Parse Shipment Function
function parseShipment(rawData) {
  const parsedItems = [];
  const seenSkus = new Set();

  for (let i = 0; i < rawData.length; i++) {
    // Split the pipe-separated string
    const parts = rawData[i].split("|");
    
    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]); // Convert qty to a number
    const expires = parts[3];
    // Default to "general" if zone is missing or empty string
    const zone = parts[4] && parts[4].trim() !== "" ? parts[4] : "general";

    // Ignore duplicate SKUs
    if (!seenSkus.has(sku)) {
      seenSkus.add(sku);
      parsedItems.push({ sku, name, qty, expires, zone });
    }
  }

  return parsedItems;
}

// 2. Plan Restock Function
function planRestock(pantry, shipment) {
  const actions = [];

  // Create a Set of existing SKUs in the pantry for efficient lookups
  const pantrySkus = new Set();
  for (let i = 0; i < pantry.length; i++) {
    pantrySkus.add(pantry[i].sku);
  }

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    let type = "";

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantrySkus.has(item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

// 3. Group By Zone Function
function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    // Initialize the zone array if it doesn't exist yet
    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

// 4. Clone Pantry Function (Deep Copy)
function clonePantry(pantry) {
  const cloned = [];

  for (let i = 0; i < pantry.length; i++) {
    // Create a new object to copy properties over deep-style
    cloned.push({
      sku: pantry[i].sku,
      name: pantry[i].name,
      qty: pantry[i].qty,
      expires: pantry[i].expires,
      zone: pantry[i].zone
    });
  }

  return cloned;
}

// --- Orchestrate and Execute together ---

// Mocking initial data setup to verify functionality
const initialPantry = [
  { sku: "SKU123", name: "Flour", qty: 2, expires: "2027-01-01", zone: "pantry" },
  { sku: "SKU456", name: "Milk", qty: 1, expires: "2026-07-15", zone: "fridge" }
];

const rawShipmentData = [
  "SKU123|Flour|5|2027-06-01|pantry", // Existing (restock)
  "SKU789|Apples|0|2026-07-05|fridge", // Qty 0 (discard)
  "SKU999|Olive Oil|3|2028-12-01|",    // New, missing zone (donate -> general)
  "SKU123|Flour|10|2027-06-01|pantry"  // Duplicate SKU (ignored)
];

// Using the workflow functions step-by-step
const deepClonedPantry = clonePantry(initialPantry);
const parsedShipment = parseShipment(rawShipmentData);
const plannedActions = planRestock(deepClonedPantry, parsedShipment);
const finalGroupedResults = groupByZone(plannedActions);

// Log the final grouped result object to the console
console.log(finalGroupedResults);

