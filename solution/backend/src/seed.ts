import mongoose from "mongoose";
import { Counter } from "./models/Counter";

async function seed() {
  await mongoose.connect(
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/counter"
  );

  console.log("Connected to database. Seeding...");

  // Clear previous data
  await Counter.deleteMany({});

  // Student-friendly sample counters
  const data = [{ name: "Hours Slept", value: -20 }];

  await Counter.insertMany(data);

  console.log("Seed complete. Added default counters.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
