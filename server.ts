import { env } from "./src/env";
import { App } from "./src/app";
import { __middleware } from "./src/middleware";
import __routes from "./src/routes";

const dotenv = require('dotenv');
dotenv.config()

const PORT: number = env().port; // getting the port based on current environment.

/* Configure App instance*/
// making a new object for App class.
const app = new App(PORT, __middleware, __routes);

try {
  /* Connect to MongoDB*/
  const {user, pw, name, account} = env().db;
  const DB_URI = env().db.uri(user,pw,name,account);
  app.mongoDB(DB_URI);
} catch(e) {
  console.log(e);
  console.log("Failed to create DB Connection string");
}

app.listen();

// app 
// middlewares add krne hai.