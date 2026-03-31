# TRIO Quiz Game

TRIO is an interactive, browser-based web application built for hosting multi-round, competitive trivia tournaments. It's designed to be presented on a large screen or TV while a "referee" controls the game state asynchronously from their device, making it perfect for family gatherings or events.

## Features

- **Three Unique Rounds**:
  - **Round 1 (Ping-Pong)**: High-speed trivia questions involving turn-based "Strikes", steals, and attacks.
  - **Round 2 (Family Feud)**: Authentic Family Feud rules! Teams build an escalating "Bank", accumulating points by guessing the most popular answers, with steals allowed upon three strikes.
  - **Round 3**: Lightning fast trivia with specific score multipliers and a 'Clutch Mode' for dramatic tie-breakers.
- **Full Localization Support**: The UI naturally supports English (`en`) and Arabic (`ar`) out of the box, cleanly switching layouts, text, and datasets in real-time.
- **Robust Audio Engine**: Non-blocking audio triggers dynamically scale for ambient ticking, tension-building timers, right/wrong jingles, and team applause.
- **Dynamic Referee Dashboard**: Interactive UI cards track team scores manually with an "override" function by tapping the scores, allowing manual strike reductions, timers adjustments, or skipping if a question is problematic.

## Tech Stack

The app is built entirely using **Raw HTML, Vanilla CSS, and Modular Javascript**:
- **Zero build pipelines** required: No Webpack, React, or Vite overhead.
- **FlexBox/Grid Layouts** for flawless scaling across browsers ranging from narrow mobiles up to oversized 4k television formats. 
- Clean DOM state management encapsulated in standard ES6 JavaScript.

## Setup & Run

Because the project leverages zero dependencies, getting it up and running is as simple as launching a local server:

1. Clone the repository.
2. Serve the static folder (`/app`):
```bash
# Using Python
python -m http.server 8000
```
3. Open `http://localhost:8000/app/index.html` in any browser.

## Customizing Questions

Questions and translated formats are housed internally inside `app/js/data.js` and structure-mirrored in `app/js/questions.json`. Any updates generated or manually edited inside `data.js` will correctly mount inside the local game engine instantly!

## Developer Commands

For automated synchronization or generating English equivalents from Arabic structures, there are several Python helper templates locally inside the root folder (such as `build_db.py` or `translate_db.py`) for catalog parsing.
