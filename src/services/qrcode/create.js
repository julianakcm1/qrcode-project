import prompt from "prompt";
import promptQRCODE from "../../prompts/prompt-qrcode";

async function createQRCODE() {
    prompt.get(promptQRCODE, handle => {
        
    })

    prompt.start();
}

export default createQRCODE;