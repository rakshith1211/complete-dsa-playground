#!/usr/bin/env python3

import http.server
import socketserver
import os

# Set the port for the server
PORT = 8000

# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Change to that directory
os.chdir(script_dir)

# Create the server
Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)

print(f"Server started at http://localhost:{PORT}")
print("Press Ctrl+C to stop the server")

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
    httpd.server_close()