# Building the Teleprompter App into an Executable

Follow these steps to compile the Teleprompter app into Windows executable files:

## Prerequisites

Ensure you have:
- Node.js installed (v14 or higher)
- All project dependencies installed (`npm install`)

## Steps to Build

1. **Navigate to your project directory** (where package.json is located)

2. **Run the build command**:
   ```
   npm run build
   ```

3. **Wait for the build process to complete**
   This might take a few minutes. The process will download additional dependencies the first time you run it.

4. **Find the Built Application**
   After successful completion, you'll find the compiled application in the `dist` folder:
   - Installer: `dist/Teleprompter Desktop Setup x.x.x.exe` - Standard Windows installer
   - Portable: `dist/Teleprompter Desktop x.x.x.exe` - Standalone executable that doesn't require installation

## Customizing the Build

You can customize the build by editing the `build` section in `package.json`:
- Change the application name by editing `productName`
- Modify build targets in the `win.target` array
- Add an application icon by placing an `icon.ico` file in the project root and adding `"icon": "icon.ico"` to the `win` section

## Troubleshooting

If you encounter errors during the build:

1. **Missing dependencies**:
   ```
   npm install --save-dev electron-builder
   ```

2. **Permission issues**:
   - Run your terminal as administrator

3. **Other errors**:
   - Check the error message for specific details
   - Try running with verbose logging: `npm run build -- --verbose` 