@echo off
echo Creating a portable version of the Teleprompter Desktop app...

:: Create portable directory if it doesn't exist
if not exist "portable" mkdir portable

:: Copy the needed files
echo Copying application files...
xcopy "dist\win-unpacked\*.*" "portable\" /E /I /Y

echo Done! Your portable teleprompter app is in the 'portable' folder.
echo You can now distribute the entire 'portable' folder as your application.
pause 