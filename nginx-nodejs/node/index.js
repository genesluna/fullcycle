import express from "express";
import { seedDataBase } from "./db/seed.js";
import { getPeopleHTML } from "./services/getPeople.js";

const app = express();
const port = 3000;

// seedDataBase();

const html = await getPeopleHTML();

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});
