import express from "express";
import carRoutes from "./routers/carRoutes.js";

const PORT = 3211;

const app = express();

app.use(express.json());

app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
  console.log("Server is listening on PORT:" + PORT);
});
