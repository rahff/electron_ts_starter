"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("electronApi", {
    fileSystemAdapter: {
        saveFile: (payload) => electron_1.ipcRenderer.invoke('file:save', payload)
    }
});
//# sourceMappingURL=preload.js.map