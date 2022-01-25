import express, { Request, Response } from "express";

import { categoriesRoutes } from "./Routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3335, () => console.log("Server is running!"));
