import  { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        educator: "Ian",
        name: "NodeJS"
    })

    return response.send();
}