import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCODE from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, choise) => {
    if(choise.select == 1) await createQRCODE();
    if(choise.select == 2) await createPassword();
  })
  prompt.start();
}

main();