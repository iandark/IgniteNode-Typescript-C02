import express from "express";

import { createCourse } from "./routes";
import { categoriesRouter } from "./routes/categories.routes";

const app = express();
app.use(express.json());
app.get("/", createCourse);
app.use(categoriesRouter);

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});
app.listen(3333, () => console.log("Server is running!"));
