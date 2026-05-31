#!/bin/bash
# Instalador de Gasto Fácil (sin Electron)
# Crea una app nativa que abre la web en tu navegador

APP_NAME="Gasto Fácil"
APP_DIR="/Applications/${APP_NAME}.app"
URL="https://my-app-desktop-front-production.up.railway.app/"

echo "Instalando ${APP_NAME}..."

# Crear estructura de la app
mkdir -p "${APP_DIR}/Contents/MacOS"
mkdir -p "${APP_DIR}/Contents/Resources"

# Script ejecutable principal
cat > "${APP_DIR}/Contents/MacOS/${APP_NAME}" << 'APPSCRIPT'
#!/bin/bash
open "https://my-app-desktop-front-production.up.railway.app/"
APPSCRIPT

chmod +x "${APP_DIR}/Contents/MacOS/${APP_NAME}"

# Info.plist
cat > "${APP_DIR}/Contents/Info.plist" << 'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>Gasto Fácil</string>
    <key>CFBundleDisplayName</key>
    <string>Gasto Fácil</string>
    <key>CFBundleIdentifier</key>
    <string>com.gastofacil.web</string>
    <key>CFBundleVersion</key>
    <string>0.1.1</string>
    <key>CFBundleShortVersionString</key>
    <string>0.1.1</string>
    <key>CFBundleExecutable</key>
    <string>Gasto Fácil</string>
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>LSMinimumSystemVersion</key>
    <string>10.13</string>
    <key>NSHighResolutionCapable</key>
    <true/>
</dict>
</plist>
PLIST

echo ""
echo "✅ Gasto Fácil instalado en /Applications"
echo "Podés abrirla desde el Finder o agregarla al Dock."
echo ""
echo "Abriendo la app ahora..."
open "${APP_DIR}"
