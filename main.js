//main.js
const { app, BrowserWindow } = require('electron');

let mainWindow = null;
app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    console.log("open window")
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});