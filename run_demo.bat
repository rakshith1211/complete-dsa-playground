@echo off
REM Script to build and run the C demo

echo Building and running C demo...
echo ================================

REM Create build directory if it doesn't exist
if not exist build mkdir build

REM Build the demo
mingw32-make main

REM Run the demo
build\dsa_main.exe

echo Demo completed!