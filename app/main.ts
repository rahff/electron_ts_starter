import { BrowserWindow, app, ipcMain, IpcMainInvokeEvent} from 'electron';
import { resolve } from "path";
import { PayloadFile } from "../shared/ElectronApi";
import { fileSystemManager } from './core/FileSystemManager';


let mainWindow: BrowserWindow | null;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences:{
            nodeIntegration: true,
            preload: __dirname + "/preload.js"
        },
    })

    mainWindow.loadFile(resolve(__dirname ,`../renderer/index.html`));
    // mainWindow.webContents.openDevTools();
    // mainWindow.on("ready-to-show", () => mainWindow?.show());
    mainWindow.on("close", ()=> mainWindow = null)
})

ipcMain.handle('file:save', (evt: IpcMainInvokeEvent, payload: PayloadFile)=> {
    fileSystemManager.saveFile(payload);
})