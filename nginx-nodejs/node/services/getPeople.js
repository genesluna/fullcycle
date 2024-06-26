import { connection } from "../db/connection.js";

export const getPeople = async () => {
  const people = await new Promise((resolve, reject) => {
    connection.query("SELECT * FROM people", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });

  return people;
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

  connection.end();

  return html.join("\n");
};

export const getPeopleCount = async () => {
  const count = await new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(id) as count FROM people",
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].count);
        }
      }
    );
  });

  return count;
};
