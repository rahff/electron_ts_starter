import { writeInFile } from './core/writeInFile';
import { alertService } from './services/AlertService';


window.addEventListener('DOMContentLoaded', ()=>{
    const inputText: HTMLInputElement | null = document.querySelector('#text');
    const inputFilename: HTMLInputElement | null = document.querySelector('#filename');
    const button: HTMLButtonElement | null = document.querySelector("button");
    button?.addEventListener('click', ()=> {
        const textValue = inputText?.value;
        const filename = inputFilename?.value;
        if(textValue && filename){
            try {
                writeInFile({filename, data: textValue});
                alertService.makeAlert("success", `You have create ${filename}`);
                inputFilename.value = "";
                inputText.value = "";
            } catch (error: any) {
                alertService.makeAlert("error", error.message)
                .then((_)=>{
                    inputFilename.value = "";
                });
            }
        }
    })
})
