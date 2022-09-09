import { Module } from "@nestjs/common";
import { CategoriesModule } from "./modules/categories/categories.module";
import { CoursesModule } from "./modules/courses/courses.module";

@Module({
    imports: [CategoriesModule, CoursesModule],
})
export class AppModule {}
