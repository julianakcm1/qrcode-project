import { message } from "prompt";

const mainPrompt = [
  {
    name: "select",
    description: "Choose the tool (1 - QR CODE or 2 - PASSWORD)",
    pattern: /^[1-2]+$/,
    // REGEX: ^inicio +$mais final
    message: "Choose only between 1 and 2",
    require: true
  }
]