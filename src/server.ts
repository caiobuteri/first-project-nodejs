import express, { Request, Response } from "express";

import { categoriesRoutes } from "./Routes/categories.routes";
import { specificationRoutes } from "./Routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3335, () => console.log("Server is running!"));
