const { app, BrowserWindow, shell, session } = require('electron');

// Fix crash en macOS 15 con Intel: deshabilitar aceleración de hardware
app.disableHardwareAcceleration();

let mainWindow = null;

const APP_URL = 'https://my-app-desktop-front-production.up.railway.app/';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    autoHideMenuBar: true,
    show: false,
    backgroundColor: '#08090e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  const ua = mainWindow.webContents.getUserAgent().replace(/\sElectron\/[\d.]+/, '');
  mainWindow.webContents.setUserAgent(ua);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('did-fail-load', async (_event, errorCode, errorDescription) => {
    console.error('Failed to load app:', errorCode, errorDescription);

    if (errorCode === -310) {
      try {
        await session.defaultSession.clearStorageData({ storages: ['cookies'] });
        mainWindow.loadURL(APP_URL).catch(console.error);
      } catch (e) {
        console.error('Failed to clear cookies:', e);
      }
      return;
    }

    mainWindow.loadURL(
      `data:text/html;charset=utf-8,${encodeURIComponent(`
        <!DOCTYPE html>
        <html>
          <head><meta charset="UTF-8" />
            <style>
              body { margin:0; height:100vh; display:flex; align-items:center; justify-content:center; background:#08090e; color:#fff; font-family:Arial,sans-serif; }
              .card { max-width:420px; padding:28px; border-radius:18px; background:#11141d; border:1px solid #252b3a; text-align:center; }
              h1 { margin:0 0 10px; font-size:24px; }
              p { color:#9aa3b2; line-height:1.5; }
            </style>
          </head>
          <body>
            <div class="card">
              <h1>No se pudo cargar Gasto F\u00e1cil</h1>
              <p>Revis\u00e1 tu conexi\u00f3n a internet e intent\u00e1 abrir la app nuevamente.</p>
              <p style="font-size:12px;">${errorCode} - ${errorDescription}</p>
            </div>
          </body>
        </html>
      `)}`,
    );
  });

  mainWindow.loadURL(APP_URL).catch((error) => {
    console.error('loadURL error:', error);
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled rejection:', error);
});
