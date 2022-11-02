export interface ElectronApi {
    fileSystemAdapter: FileSystemAdapter
}

export interface FileSystemAdapter {
    saveFile(payload: PayloadFile): void
}

export interface PayloadFile {
    filename: string;
    data: string;
}