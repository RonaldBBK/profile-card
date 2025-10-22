# Profile Card — Simple Responsive Component

A compact, responsive profile card built with plain HTML, CSS and a small JavaScript clock. Designed to be minimal, accessible and easy to customize.

## Features
- Clean, compact single-column profile card layout
- Avatar, name, bio, hobbies/dislikes and social links
- Live clock (updates every second) displayed in the card
- Lightweight: no frameworks required, uses Font Awesome for icons
- Responsive and keyboard-accessible focus styles

## Demo
Open `index.html` in your browser (or serve the folder with a static server) to view the profile card.

## Project structure
- index.html — main markup
- style.css — styles for the compact profile card
- index.js — small script that updates the live clock
- image/ — project images (avatar)

## Installation (Windows)
1. Clone or copy the project folder to a local path, e.g. `C:\Users\<you>\OneDrive\Desktop\hng-0`.
2. Open `index.html` in your browser:
   - Double-click `index.html` or
   - Right-click → Open with → choose a browser
3. (Optional) For live reload during development, install the VS Code Live Server extension and click "Go Live".

## Usage
- Edit `index.html` to change the name, bio, links or list items.
- Replace `image/LinkedIn photo.png` with your avatar (keep filename or update the src).
- Customize colors, spacing and layout in `style.css`.

## JavaScript (clock)
`index.js` finds the element with `data-testid="test-user-time"` and updates it every second:

- Ensure `index.js` is included once at the end of `index.html` (just before `</body>`).
- The script uses `DOMContentLoaded` to safely access DOM elements.

Example behavior:
- Shows a human-readable time string like `14:23:05` and updates every second.

## Troubleshooting
- Clock not visible:
  - Confirm `index.js` is loaded (open DevTools → Console/Network).
  - Ensure the file path is correct: `index.html` loads `index.js` from the same folder.
  - Confirm the DOM contains `<span data-testid="test-user-time"></span>`.
  - Avoid duplicate or empty `<script>` tags in the middle of the markup; the external script should be included once at the end of `index.html`.
- Icons not visible:
  - Confirm the Font Awesome kit script in the document head is reachable and the kit id is valid.
- CSS not applied:
  - Confirm `style.css` is in the same folder as `index.html` and linked correctly.

## Customization tips
- Change card width: adjust `--max-width` in `style.css`.
- Change colors: update `--accent`, `--bg`, `--card`, `--muted`.
- Turn the clock into a date/time display: modify `index.js` to use `new Date().toLocaleString()`.

## Contributing
Pull requests accepted for bug fixes, accessibility improvements, or new small features. Keep changes small and focused.

## License
Use and modify freely. Add a license file if you require a specific open-source license.
