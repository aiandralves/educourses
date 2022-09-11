import { CourseDTO } from "./course.dto";

export class CategoryDTO {
    id?: number;
    name: string;
    icon?: string;

    course: CourseDTO;
}
