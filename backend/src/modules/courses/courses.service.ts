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

    async findOne(id: number) {
        const course = await this.prisma.course.findFirst({
            where: { id },
        });

        if (!course) {
            throw new Error("Curso não encontrado!");
        }

        return await this.prisma.course.findFirst({
            where: { id },
        });
    }

    async update(id: number, data: CourseDTO) {
        const course = await this.prisma.course.findFirst({
            where: { id },
        });

        if (!course) {
            throw new Error("Curso não encontrado!");
        }

        return await this.prisma.course.update({
            where: { id },
            data,
        });
    }

    async delete(id: number) {
        const course = await this.prisma.course.findFirst({
            where: { id },
        });

        if (!course) {
            throw new Error("Curso não encontrado!");
        }

        return await this.prisma.course.delete({
            where: { id },
        });
    }
}
