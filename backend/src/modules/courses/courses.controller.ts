import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
} from "@nestjs/common";
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

    @Get(":id")
    async findOne(@Param("id") id: number) {
        return this.coursesService.findOne(+id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Put(":id")
    async update(@Param("id") id: number, @Body() data: CourseDTO) {
        return this.coursesService.update(+id, data).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id") id: number) {
        return this.coursesService.delete(+id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }
}
