import { ElectronApi } from "../../shared/ElectronApi";
import { writeInFile } from './core/writeInFile';

declare const electronApi: ElectronApi


window.addEventListener('DOMContentLoaded', ()=>{
    const inputText: HTMLInputElement | null = document.querySelector('#text');
    const inputFilename: HTMLInputElement | null = document.querySelector('#filename');
    const button: HTMLButtonElement | null = document.querySelector("button");
    button?.addEventListener('click', ()=> {
        const textValue = inputText?.value;
        const filename = inputFilename?.value;
        console.log("values", filename, textValue);
        
        if(textValue && filename){
            writeInFile({filename, data: textValue});
        }
    })
})

setTimeout(() => {
    
}, 2000); 