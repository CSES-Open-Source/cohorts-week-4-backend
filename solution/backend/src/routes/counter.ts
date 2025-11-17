import { Router, Request, Response } from "express";
import { Counter } from "./../models/Counter";

const router = Router();

// GET all counters
router.get("/", async (_req: Request, res: Response) => {
  const counters = await Counter.find();
  res.json(counters);
});

// POST create a counter
router.post("/", async (req, res) => {
  const { name } = req.body;
  const counter = await Counter.create({ name, value: 0 });
  res.json(counter);
});

// PATCH increment or decrement a counter
router.patch("/:id", async (req: Request, res: Response) => {
  const { newValue } = req.body;

  const updated = await Counter.findByIdAndUpdate(
    req.params.id,
    { value: newValue },
    { new: true }
  );

  res.json(updated);
});

// DELETE counter
router.delete("/:id", async (req: Request, res: Response) => {
  await Counter.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
