import { connection } from "./connection.js";

export const seedDataBase = () => {
  console.log("Seeding Database...");

  const names = ["João", "Abel", "Juliana", "Niedja", "Carlos", "Bianca"];

  names.forEach((name) => {
    connection.query(
      "INSERT INTO people (name) VALUES (?)",
      [name],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
        }
      }
    );
  });

  connection.end();
};
