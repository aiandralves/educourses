import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CourseDTO } from "./course.dto";

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) {}

    private readonly _includeCatgory = {
        category: {
            select: {
                name: true,
                icon: true,
            },
        },
    };

    async create(data: CourseDTO) {
        const courses = await this.prisma.course.create({
            data,
        });

        return courses;
    }

    async findAll() {
        const courses = await this.prisma.course.findMany({
            include: this._includeCatgory,
        });

        return courses;
    }
}
