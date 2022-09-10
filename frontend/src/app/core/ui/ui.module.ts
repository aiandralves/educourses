import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { LogoComponent } from "./logo/logo.component";
import { TitleComponent } from "./title/title.component";

const declarations = [ButtonComponent, TitleComponent, LogoComponent];

@NgModule({
    declarations: [...declarations],
    exports: [...declarations],
})
export class UIModule {}
