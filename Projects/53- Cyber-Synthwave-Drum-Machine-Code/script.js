

// Element Selectors
const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');
const volumeSlider = document.getElementById('volume');

// Global Volume Level
let globalVolume = 0.5;

/**
 * Handles playing the audio clip, applying the volume setting,
 * updating the screen's text content, and triggering animations.
 */
const triggerAudio = (padElement) => {
  const audio = padElement.querySelector('.clip');
  if (!audio) return;

  // Reset playback position to allow rapid spamming of a pad
  audio.volume = globalVolume;
  audio.currentTime = 0; 
  audio.play();

  // Clean up formatting for display (e.g. "Kick-n'-Hat" to "Kick n' Hat")
  const sampleName = padElement.id.replace(/-/g, ' ');
  display.textContent = sampleName;

  // Add the class for styling active/triggered buttons
  padElement.classList.add('active');
  setTimeout(() => {
    padElement.classList.remove('active');
  }, 100);
};

// Click Event Listeners
drumPads.forEach(pad => {
  pad.addEventListener('click', () => triggerAudio(pad));
});

// Keydown Event Listeners - Robust Fallbacks for freeCodeCamp Test Runner
document.addEventListener('keydown', (e) => {
  let pressedKey = '';
  
  // 1. Try standard e.key first
  if (e.key) {
    pressedKey = e.key.toUpperCase();
  } else {
    // 2. Fallback to keyCode/which mapping to prevent crashes in simulated test events
    const keyCodeMap = {
      81: 'Q', 87: 'W', 69: 'E',
      65: 'A', 83: 'S', 68: 'D',
      90: 'Z', 88: 'X', 67: 'C'
    };
    const code = e.keyCode || e.which;
    pressedKey = keyCodeMap[code] || '';
  }
  
  const audioClip = document.getElementById(pressedKey);
  
  // Verify that the element is a valid audio clip
  if (audioClip && audioClip.classList.contains('clip')) {
    const targetPad = audioClip.parentElement;
    triggerAudio(targetPad);
  }
});

// Interactive Volume Control Slider Listener
volumeSlider.addEventListener('input', (e) => {
  globalVolume = e.target.value;
  display.textContent = `Volume: ${Math.round(globalVolume * 100)}%`;
});




