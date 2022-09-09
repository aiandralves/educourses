import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
} from "@nestjs/common";
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

    @Put(":id")
    async update(@Param("id") id: string, @Body() data: CategoryDTO) {
        return this.categoriesService.update(+id, data).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }
}
