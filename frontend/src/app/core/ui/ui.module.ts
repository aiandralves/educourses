import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { LogoComponent } from "./logo/logo.component";
import { ScrollUpComponent } from "./scoll-up/scroll-up.component";
import { TitleComponent } from "./title/title.component";

const declarations = [
    ButtonComponent,
    TitleComponent,
    LogoComponent,
    ScrollUpComponent,
];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, RouterModule],
    exports: [...declarations],
})
export class UIModule {}
