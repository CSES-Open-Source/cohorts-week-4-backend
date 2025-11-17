import mongoose from "mongoose";
import { Counter } from "./models/Counter";

async function seed() {
  // TODO 0: Edit MongoDB connection string in seed.ts
  await mongoose.connect("mongodb://127.0.0.1:27017/counter");

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
