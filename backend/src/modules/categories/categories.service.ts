import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CategoryDTO } from "./category.dto";

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) {}

    async create(data: CategoryDTO): Promise<CategoryDTO> {
        const category = await this.prisma.category.findFirst({
            where: { name: data.name },
        });

        if (category) {
            throw new Error("Já existe um nome para essa categoria!");
        }

        const categories = await this.prisma.category.create({
            data,
        });

        return categories;
    }

    async findAll(): Promise<CategoryDTO[]> {
        return await this.prisma.category.findMany();
    }

    async findOne(id: number) {
        const category = await this.prisma.category.findFirst({
            where: { id },
        });

        if (!category) {
            throw new Error("Categoria não encontrada!");
        }

        return await this.prisma.category.findFirst({
            where: { id },
        });
    }

    async update(id: number, data: CategoryDTO) {
        const category = await this.prisma.category.findUnique({
            where: {
                id,
            },
        });

        if (!category) {
            throw new Error("Essa categoria não existe!");
        }

        return await this.prisma.category.update({
            where: { id },
            data,
        });
    }

    async delete(id: number) {
        const category = await this.prisma.category.findFirst({
            where: { id },
        });

        if (!category) {
            throw new Error("Categoria não encontrada!");
        }

        return await this.prisma.category.delete({
            where: { id },
        });
    }
}
