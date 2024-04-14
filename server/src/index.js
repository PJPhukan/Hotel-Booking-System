import dotenv from "dotenv";
dotenv.config();
import { ConnectDB } from "./db/index.database.js";
import { app } from "./app.js";

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `👁️  Hotel Booking Web application Running on http://localhost:${process.env.PORT}  👁️ `
      );
    });
  })
  .catch((error) => {
    console.log(`⁕⁕⁕ MONGO CONNECTION ERROR ⁕⁕⁕ `, error);
  });
