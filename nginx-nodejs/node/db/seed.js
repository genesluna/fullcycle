import { getPeopleCount } from "../services/getPeople.js";
import { connection } from "./connection.js";

export const seedDataBase = async () => {
  const peopleCount = await getPeopleCount();

  if (peopleCount > 0) {
    console.log("Database already seeded.");
    return;
  }

  console.log("Seeding Database...");

  const names = ["João", "Abel", "Juliana", "Niedja", "Carlos", "Bianca"];

  await Promise.all(
    names.map(async (name) => {
      connection.query(
        "INSERT INTO people (name) VALUES (?)",
        [name],
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      );
    })
  );
  console.log("Database seeded.");
};
