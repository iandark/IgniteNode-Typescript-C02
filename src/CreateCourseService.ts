/*
name - string
duration - number
educator - string
*/

interface Course {
    name: string;
    duration?: number;
    educator: string
}

export default class CreateCourseService {
    static execute({ duration = 8, educator, name}: Course) {
        console.log(name, duration, educator);

    }
}
