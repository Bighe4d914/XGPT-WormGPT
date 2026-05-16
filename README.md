# COBRA EYE

Standalone AI chat interface scaffold, designed to integrate with [Google Stitch](https://stitch.withgoogle.com).

## Project location

The project lives as a self-contained folder — no build tools or package manager required.

```
COBRA EYE/
├── index.html        # Chat UI entry point
├── css/
│   └── styles.css    # Dark-theme design tokens + layout
├── js/
│   └── app.js        # Message handling (connect your AI backend here)
└── assets/           # Place icons and images here
```

## Getting started

1. Open `index.html` directly in a browser.
2. Type a message and press **Enter** or click **Send**.
3. To wire up an AI backend, replace the stub reply in `js/app.js` where the `TODO` comment is.

## Google Stitch integration

Import or paste Stitch-exported components into `index.html` and `css/styles.css`.
CSS custom properties in `:root` serve as design tokens — map your Stitch color/spacing variables there.
