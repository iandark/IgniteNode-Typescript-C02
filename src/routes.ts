import { Request, Response } from "express";

import CreateCourseService from "./services/CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    educator: "Ian",
    name: "NodeJS",
  });

  return response.json({ message: "Hello Get!" });
}
