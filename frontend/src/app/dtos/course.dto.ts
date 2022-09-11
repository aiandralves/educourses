import { CategoryDTO } from "./category.dto";

export class CourseDTO {
    id?: number;
    title: string;
    description: string;
    imageUrl: string;
    time?: string;
    price: number;

    category: CategoryDTO;
}
