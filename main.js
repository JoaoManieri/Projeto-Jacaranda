const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow = null;
app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    console.log("open window")
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

app.on('window-all-closed', () => {
    app.quit();
})

ipcMain.on('abrir-janela-sobre', () => {
    let infoWindow = new BrowserWindow({
        width: 300,
        height: 200,
        webPreferences: {
            nodeIntegration: true
        }
    });
    infoWindow.loadURL(`file://${__dirname}/src/app/info.html`);
})