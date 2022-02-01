import express, { Request, Response } from "express";

import { router } from "./Routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3335, () => console.log("Server is running!"));
