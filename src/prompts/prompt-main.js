// import { message } from "prompt";

import chalk from "chalk";

// SCHEMA
const mainPrompt = [
  {
    name: "select",
    description: chalk.hex('#FFA500').bold("Choose the tool (1 - QR CODE) or (2 - PASSWORD)"),
    pattern: /^[1-2]+$/,
    // REGEX: ^inicio +$mais final
    message: chalk.red.italic("Choose only between 1 and 2"),
    require: true
  }
]

export default mainPrompt;