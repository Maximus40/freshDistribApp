const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1800,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.webContents.openDevTools()

  mainWindow.loadURL(`file://${__dirname}/buy/buy.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}
app.allowRendererProcessReuse = false
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});