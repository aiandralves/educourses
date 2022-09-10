import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoaderService } from "app/services/loader.service";
import { ButtonComponent } from "./button/button.component";
import { LoaderComponent } from "./loader/loader.component";
import { LogoComponent } from "./logo/logo.component";
import { ScrollUpComponent } from "./scoll-up/scroll-up.component";
import { TitleComponent } from "./title/title.component";

const declarations = [
    ButtonComponent,
    TitleComponent,
    LogoComponent,
    ScrollUpComponent,
    LoaderComponent,
];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, RouterModule],
    exports: [...declarations],
    providers: [LoaderService],
})
export class UIModule {}
