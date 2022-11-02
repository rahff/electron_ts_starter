"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
const FileSystemManager_1 = require("./core/FileSystemManager");
let mainWindow;
electron_1.app.on('ready', () => {
    mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            preload: __dirname + "/preload.js"
        },
    });
    mainWindow.loadFile((0, path_1.resolve)(__dirname, `../renderer/index.html`));
    // mainWindow.webContents.openDevTools();
    // mainWindow.on("ready-to-show", () => mainWindow?.show());
    mainWindow.on("close", () => mainWindow = null);
});
electron_1.ipcMain.handle('file:save', (evt, payload) => {
    FileSystemManager_1.fileSystemManager.saveFile(payload);
});
//# sourceMappingURL=main.js.map