import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCODE from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choise) => {
    if(err) console.log(err);

    if(choise.select == 1) await createQRCODE();
    if(choise.select == 2) await createPassword();
  })
  prompt.start();
}

main();