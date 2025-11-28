import * as Car from "../data/car.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const cars = Car.getAllCars();
  res.json( cars );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const car = Car.getCarById(id);
  res.json(car);
});

router.post("/", (req, res) => {
  const { brand, color, lplate } = req.body;
  if (!brand || !color || !lplate)
    return res.status(400).json({ message: "Invalid Credentials" });
  Car.saveCar(brand, color, lplate);
  res
    .status(201)
    .json({ message: "Car succesfully added", id: res.lastInsertRowId });
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  const car = Car.getCarById(id);
  if (!car) return res.status(404).json({ message: "Car not found" });
  const { brand, color, lplate } = req.body;
  if (!brand) brand = car.brand;
  if (!color) color = car.color;
  if (!lplate) lplate = car.lplate;
  Car.updateCar(id, brand, color, lplate);
  res.json({ message: "Car succesfully updated" });
});

export default router;
