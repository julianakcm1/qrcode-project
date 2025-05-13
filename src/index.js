import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, choise) => {
    if(choise.select == 1) console.log("\n- Chose the QRCODE\n");
    if(choise.select == 2) console.log("\n- Chose the PASSWORD\n");
  })
  prompt.start();
}

main();