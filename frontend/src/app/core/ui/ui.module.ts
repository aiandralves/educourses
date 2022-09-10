import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { TitleComponent } from "./title/title.component";

const declarations = [ButtonComponent, TitleComponent];

@NgModule({
    declarations: [...declarations],
    exports: [...declarations],
})
export class UIModule {}

