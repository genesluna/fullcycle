import { getPeopleCount } from "../services/getPeople.js";
import { connection } from "./connection.js";

export const seedDataBase = async () => {
  console.log("📋 Creating table if it does not exist...");
  await createTable();

  const peopleCount = await getPeopleCount();

  if (peopleCount > 0) {
    console.log("✅ Database already seeded.");
    return;
  }

  console.log("🌱 Seeding Database...");

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
  console.log("✅ Database seeded.");
};

const createTable = async () => {
  await new Promise((resolve, reject) => {
    connection.query("USE node", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
  await new Promise((resolve, reject) => {
    connection.query(
      "CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))",
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
};
