# Teleprompter Desktop App

A professional-grade teleprompter application packaged as a cross-platform desktop app using Electron. This application allows you to create, edit, and display teleprompter scripts with customizable settings for professional video production.

![Teleprompter App Screenshot](screenshot.png)

## Features

- **Real-time text scrolling** with adjustable speed
- **Fixed reading line** to guide your reading position
- **Customizable appearance** (font size, color, background, line spacing)
- **Adjustable reading line position** to match your camera setup
- **Text mirroring** for proper teleprompter reflection setups
- **Fullscreen mode** for distraction-free reading
- **Dark/light mode** to suit different environments
- **Import/export scripts** to easily save and load content
- **Keyboard shortcuts** for hands-free control during recording

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/teleprompter-desktop.git
   cd teleprompter-desktop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

### Development Mode

To run the app in development mode:

```bash
npx electron .
```

Or use the npm script:

```bash
npm start
```

### Building for Distribution

To create packaged applications for your current platform:

```bash
npm run dist
```

This will create installers in the `dist` folder.

For specific platforms:

```bash
# For Windows
npm run dist -- --win

# For macOS
npm run dist -- --mac

# For Linux
npm run dist -- --linux
```

## Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| **Space** | Play/Pause scrolling |
| **Esc** | Exit fullscreen |
| **↑/↓** | Adjust speed |
| **←/→** | Navigate through text |
| **Ctrl+M** | Toggle mirror mode |
| **Ctrl+F** | Toggle fullscreen |
| **Ctrl+/-** | Adjust font size |

## Project Structure

- `main.js` - Electron main process
- `preload.js` - Preload script for secure context bridge
- `teleprompter.html` - Main application HTML
- `package.json` - Project metadata and dependencies

## Technology Stack

- **Electron** - Cross-platform desktop app framework
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Babel** - JavaScript compiler for JSX

## Troubleshooting

### Electron Not Found

If you get an error like "'electron' is not recognized as an internal or external command":

1. Make sure you've installed dependencies with `npm install`
2. Try using `npx electron .` to run the app
3. Check if you're in the correct directory containing package.json

### Building Issues

If you encounter issues when building:

1. Make sure electron-builder is installed: `npm install --save-dev electron-builder`
2. Check your package.json for correct build configuration
3. Try running with verbose logging: `npm run dist -- --verbose`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on web technologies for cross-platform compatibility
- Inspired by professional teleprompter systems used in broadcasting 