import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CategoryController } from "./controllers/category.controller";
import { CourseController } from "./controllers/course.controller";
import { UIModule } from "./core/ui/ui.module";
import { LoaderService } from "./services/loader.service";
import { AboutComponent } from "./views/about/about.component";
import { CategoryComponent } from "./views/category/category.component";
import { TextareaComponent } from "./views/contact/components/textarea/textarea.component";
import { ContactComponent } from "./views/contact/contact.component";
import { CourseComponent } from "./views/course/course.component";
import { HomeComponent } from "./views/home/home.component";
import { FooterModule } from "./views/shared/footer/footer.module";
import { HeaderComponent } from "./views/shared/header/header.component";
import { InputComponent } from "./views/shared/input/input.component";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt);

const modules = [HttpClientModule, RouterModule, UIModule, FooterModule];

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

const providers = [LoaderService, CategoryController, CourseController];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, ...modules],
    exports: [...declarations, ...modules],
    providers: [
        ...providers,
        {
            provide: LOCALE_ID,
            useValue: "pt-BR",
        },
    ],
})
export class SharedModule {}
