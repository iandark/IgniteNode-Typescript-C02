/*
name - string
duration - number
educator - string
*/

interface ICourse {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  static execute({ duration = 8, educator, name }: ICourse) {
    console.log(name, duration, educator);
  }
}

export { CreateCourseService };
