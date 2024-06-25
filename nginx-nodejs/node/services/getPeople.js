import { connection } from "../db/connection.js";

export const getPeople = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM people", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const getPeopleHTML = async () => {
  const people = await getPeople();
  const html = [];
  html.push("<h1>Full Cycle Rocks!</h1>");
  html.push("<ul>");
  people.forEach((person) => {
    html.push(`<li>${person.name}</li>`);
  });
  html.push("</ul>");
  return html.join("\n");
};
