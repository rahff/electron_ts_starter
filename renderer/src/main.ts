import { writeInFile } from './core/writeInFile';


window.addEventListener('DOMContentLoaded', ()=>{
    const inputText: HTMLInputElement | null = document.querySelector('#text');
    const inputFilename: HTMLInputElement | null = document.querySelector('#filename');
    const button: HTMLButtonElement | null = document.querySelector("button");
    button?.addEventListener('click', ()=> {
        const textValue = inputText?.value;
        const filename = inputFilename?.value;
        if(textValue && filename){
            writeInFile({filename, data: textValue});
        }
    })
})
