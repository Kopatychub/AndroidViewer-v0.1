const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
  ipcMain.on("minimizeApp", () => {
    win.minimize()
    })

    ipcMain.on("closeApp", () => {
        win.close()
    })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})