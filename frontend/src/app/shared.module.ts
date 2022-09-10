import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UIModule } from "./core/ui/ui.module";
import { AboutComponent } from "./views/about/about.component";
import { CategoryComponent } from "./views/category/category.component";
import { CourseComponent } from "./views/course/course.component";
import { HomeComponent } from "./views/home/home.component";
import { HeaderComponent } from "./views/shared/header/header.component";

const modules = [RouterModule, UIModule];

const declarations = [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    CourseComponent,
];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, ...modules],
    exports: [...declarations, ...modules],
})
export class SharedModule {}
