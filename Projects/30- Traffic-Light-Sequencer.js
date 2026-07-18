
// --- Sample Configuration Objects (for testing) ---
const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 }, // Invalid duration
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true, // Triggers early termination
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: [] // Empty phases array
};


// --- Core Functions ---

/**
 * Simulates a traffic light sequence for a specified number of cycles.
 * @param {Object} config - The traffic light configuration object.
 * @param {number} cycles - The maximum number of sequence iterations.
 */
function runSequence(config, cycles) {
  // 1. Log and exit if there are no phases
  if (!config.phases || config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  // 2. Log and exit early if the system has a fault
  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  // 3. Loop through the sequence for the designated number of cycles
  for (let c = 0; c < cycles; c++) {
    for (let i = 0; i < config.phases.length; i++) {
      const phase = config.phases[i];
      
      // Check for invalid phase duration
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

/**
 * Generates an array of cumulative elapsed timestamps across cycles.
 * Processes all phases linearly without validation filtering.
 * @param {Object} config - The traffic light configuration object.
 * @param {number} cycles - The number of cycles to calculate.
 * @returns {number[]} Array of cumulative timestamps.
 */
function generateTimeline(config, cycles) {
  const timeline = [];
  
  if (!config.phases || config.phases.length === 0) {
    return timeline;
  }

  let cumulativeTime = 0;

  for (let c = 0; c < cycles; c++) {
    for (let i = 0; i < config.phases.length; i++) {
      cumulativeTime += config.phases[i].duration;
      timeline.push(cumulativeTime);
    }
  }

  return timeline;
}

