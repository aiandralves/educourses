import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UIModule } from "./core/ui/ui.module";
import { AboutComponent } from "./views/about/about.component";
import { CategoryComponent } from "./views/category/category.component";
import { TextareaComponent } from "./views/contact/components/textarea/textarea.component";
import { ContactComponent } from "./views/contact/contact.component";
import { CourseComponent } from "./views/course/course.component";
import { HomeComponent } from "./views/home/home.component";
import { FooterModule } from "./views/shared/footer/footer.module";
import { HeaderComponent } from "./views/shared/header/header.component";
import { InputComponent } from "./views/shared/input/input.component";

const modules = [RouterModule, UIModule, FooterModule];

const declarations = [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    CourseComponent,
    ContactComponent,
    InputComponent,
    TextareaComponent,
];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, ...modules],
    exports: [...declarations, ...modules],
})
export class SharedModule {}
