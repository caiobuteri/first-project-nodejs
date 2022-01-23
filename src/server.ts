import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(3335, () => console.log("Server is running!"));
