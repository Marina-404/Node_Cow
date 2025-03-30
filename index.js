import cowsay from "cowsay";
import dotenv from "dotenv";

dotenv.config();

console.log(
    cowsay.say({
      text: `Hello ${process.env.NAME} de la ${process.env.CAMPUS}`
    })
  );