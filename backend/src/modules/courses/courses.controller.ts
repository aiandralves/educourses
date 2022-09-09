import { Body, Controller, Get, Post } from "@nestjs/common";
import { CourseDTO } from "./course.dto";
import { CoursesService } from "./courses.service";

@Controller("courses")
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Post()
    async create(@Body() data: CourseDTO) {
        return this.coursesService.create(data);
    }

    @Get()
    async findAll() {
        return this.coursesService.findAll();
    }
}
