


// 1. Normalize Units Function
function normalizeUnits(manifest) {
  // Create a shallow copy to prevent mutation of the original object
  const normalized = { ...manifest };
  
  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }
  
  return normalized;
}

// 2. Validate Manifest Function
function validateManifest(manifest) {
  const errors = {};

  // Validate containerId: Must exist and be a positive integer
  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else {
    const cid = manifest.containerId;
    if (typeof cid !== "number" || Number.isNaN(cid) || !Number.isInteger(cid) || cid <= 0) {
      errors.containerId = "Invalid";
    }
  }

  // Validate destination: Must exist and be a non-empty string (after trimming)
  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else {
    const dest = manifest.destination;
    if (typeof dest !== "string" || dest.trim() === "") {
      errors.destination = "Invalid";
    }
  }

  // Validate weight: Must exist and be a positive number
  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else {
    const w = manifest.weight;
    if (typeof w !== "number" || Number.isNaN(w) || w <= 0) {
      errors.weight = "Invalid";
    }
  }

  // Validate unit: Must exist and be exactly "kg" or "lb"
  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else {
    const u = manifest.unit;
    if (typeof u !== "string" || (u !== "kg" && u !== "lb")) {
      errors.unit = "Invalid";
    }
  }

  // Validate hazmat: Must exist and be a boolean
  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else {
    const h = manifest.hazmat;
    if (typeof h !== "boolean") {
      errors.hazmat = "Invalid";
    }
  }

  return errors;
}

// 3. Process Manifest Function
function processManifest(manifest) {
  const errors = validateManifest(manifest);
  const isValid = Object.keys(errors).length === 0;

  if (isValid) {
    // Fulfill validation success logs
    console.log(`Validation success: ${manifest.containerId}`);
    
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Fulfill validation error logs
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

