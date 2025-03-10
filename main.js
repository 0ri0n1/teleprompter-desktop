const { app, BrowserWindow } = require('electron');
const path = require('path');

// Keep a global reference of the window object to prevent it from being garbage collected
let mainWindow;

function createWindow() {
  // Create the browser window with appropriate settings
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the teleprompter HTML file
  mainWindow.loadFile('teleprompter.html');

  // Uncomment to open DevTools for debugging
  // mainWindow.webContents.openDevTools();

  // Handle window closed event
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

// Create window when Electron is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

// On macOS, recreate window when dock icon is clicked
app.on('activate', function() {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
