import { Body, Controller, Get, NotFoundException, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoryDTO } from "./category.dto";

@Controller("categories")
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    async create(@Body() data: CategoryDTO) {
        return this.categoriesService.create(data).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Get()
    async findAll() {
        return this.categoriesService.findAll();
    }
}
