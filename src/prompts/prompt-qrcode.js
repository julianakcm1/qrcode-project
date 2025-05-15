import chalk from "chalk";

const promptQRCODE = [
  {
    name: "link",
    description: chalk.yellow("Enter the link to generate the QRCODE"),
  },
  {
    name: "type",
    description: chalk.yellow("Choose the type of QRCODE (1 - normal) or (2 - terminal)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only between 1 and 2"),
    require: true,
  }
]

export default promptQRCODE;