import allowedCharacters from "./utils/allowedCharacters.js";

async function handle() {
  let characters = [];
  let password = ''

  let passwordLength = process.env.PASSWORD_LENGTH;
  characters = await allowedCharacters();

  for(let i=0; i<passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;