import { app } from "./app.js";
import dotenv from "dotenv";
import connect_DB from "./db/index.js";

// Load environment variables
dotenv.config({ path: './.env' });
 

const PORT = process.env.PORT || 4000;
// console.log(`Port from .env: ${PORT}`);

connect_DB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((err) => console.error("MongoDB connection error: ", err));
