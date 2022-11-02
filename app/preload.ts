import {contextBridge, ipcRenderer } from "electron";
import { PayloadFile } from "../shared/ElectronApi";

contextBridge.exposeInMainWorld("electronApi", {
    fileSystemAdapter: {
        saveFile: (payload: PayloadFile)=> ipcRenderer.invoke('file:save', payload)
    }
})