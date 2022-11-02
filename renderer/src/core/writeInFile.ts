import { ElectronApi, PayloadFile } from "shared/ElectronApi";

declare const electronApi: ElectronApi;


export const writeInFile = (payload: PayloadFile)=>{
    if(payload.filename.endsWith(".txt")){
        electronApi.fileSystemAdapter.saveFile(payload);
    }
}