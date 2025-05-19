import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("You chose password"));
  const password = await handle();
  console.log(chalk.hex('#FFA500').bold("Generated password: ") + (chalk.blue.bold(password)) + '\n');
}

export default createPassword;