import { BrowserWindow, app, ipcMain, IpcMainInvokeEvent} from 'electron';
import { resolve, join } from "path";
import { PayloadFile } from "../shared/ElectronApi";
import { fileSystemManager } from './core/FileSystemManager';

const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

let mainWindow: BrowserWindow | null;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 1240,
        height: 920,
        webPreferences:{
            nodeIntegration: true,
            preload: __dirname + "/preload.js"
        },
    })

    if (serve) {
        require('electron-reloader')(module);
        mainWindow.loadURL('http://localhost:8080');
    }

    mainWindow.loadFile(resolve(__dirname ,`../renderer/index.html`));
    mainWindow.on("close", ()=> mainWindow = null)
})

ipcMain.handle('file:save', (evt: IpcMainInvokeEvent, payload: PayloadFile)=> {
    fileSystemManager.saveFile(payload);
})