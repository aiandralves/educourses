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

    @Get(":id")
    async findOne(@Param("id") id: number) {
        return this.categoriesService.findOne(+id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() data: CategoryDTO) {
        return this.categoriesService.update(+id, data).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id") id: number) {
        return this.categoriesService.delete(+id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }
}
