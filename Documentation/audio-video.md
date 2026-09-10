
# JavaScript Audio & Video

## 1. Audio Constructor & Controls
* **`Audio()` Constructor**: Creates an `HTMLAudioElement` dynamically (optionally taking a source URL).
* **Methods & Properties**: `play()`, `pause()`, `currentTime`, `loop`, and `muted`.

## 2. Formats & Codecs
* **MIME Types**: Standardized identifiers for file types (e.g., `audio/mpeg` for MP3, `video/mp4` for MP4).
* **Codecs**: Compression algorithms (encoders/decoders) specified within MIME types to convert between analog and digital data.

## 3. Core Media APIs
* **`HTMLMediaElement` API**: Extends standard elements with playback control methods and events (`canplay`, `ended`, `waiting`).
* **Media Capture and Streams API**: Accesses hardware audio/video streams via `navigator.mediaDevices.getUserMedia()`.
* **Screen Capture API**: Records user screens via `getDisplayMedia()`.
* **MediaStream Recording API**: Captures and records `MediaStream` outputs.
* **Web Audio API**: Powers complex audio routing and processing using `AudioContext` and `AudioBuffer`.
