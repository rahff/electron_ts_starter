import { FileSystemAdapter, PayloadFile } from "../../shared/ElectronApi";
import * as fs from 'fs';



export class FileSystemManager implements FileSystemAdapter {

    saveFile(payload: PayloadFile): void {
        const { filename, data } = payload;    
        fs.writeFileSync(filename, data);
    }
}

export const fileSystemManager = new FileSystemManager();