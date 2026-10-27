# Guideregion — ICT6001 Week 9

Responsive tourist guide website for a student web-design project.

## Files
- `index.html` — semantic page structure and content
- `style.css` — responsive layout, Grid/Flexbox, light/dark themes, and form styles
- `script.js` — mobile navigation, search filter, saved-place buttons, theme switch, and checklist generation
- `figma_layout_guide.md` — frame, grid, and styling guide for recreating the layout in Figma

## Run locally
Open `index.html` in a browser. An internet connection is used for Google Fonts and Unsplash images.

## Publish with GitHub Pages
1. Create a **public** repository on GitHub.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and `figma_layout_guide.md` to the repository root.
3. Make at least three commits with messages such as:
   - `feat: add semantic travel guide structure`
   - `feat: build responsive grid and route planner`
   - `feat: add mobile navigation and theme switch`
4. In the repository, open **Settings → Pages**.
5. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the provided public URL.

## Important notes
- The form validates the fields in the browser and downloads a local text checklist. It does not send email or create a real PDF because no backend/email service is configured.
- Ratings and example descriptions are illustrative student-project content, not verified live recommendations.
- The Figma design itself must be created in Figma; the accompanying guide specifies the dimensions and visual rules to reproduce.
