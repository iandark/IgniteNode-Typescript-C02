/*
name - string
duration - number
educator - string
*/

interface ICOURSE {
  name: string;
  duration?: number;
  educator: string;
}

export default class CreateCourseService {
  static execute({ duration = 8, educator, name }: ICOURSE) {
    console.log(name, duration, educator);
  }
}
