import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCODE from "./services/qrcode/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, choise) => {
    if(choise.select == 1) await createQRCODE();
    if(choise.select == 2) console.log("\n- Chose the PASSWORD\n");
  })
  prompt.start();
}

main();