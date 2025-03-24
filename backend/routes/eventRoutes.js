import express from "express";
import EventItem from "../models/EventItem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await EventItem.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/", async (req, res) => {
  const { name, date } = req.body;
  if (!name || !date) {
    return res.status(400).json({ message: "ALL fields are required " });
  }
  
  try {
    const newEvent = new EventItem({ name, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
