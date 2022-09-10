import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UIModule } from "./core/ui/ui.module";
import { AboutComponent } from "./views/about/about.component";
import { HomeComponent } from "./views/home/home.component";
import { HeaderComponent } from "./views/shared/header/header.component";

const modules = [RouterModule, UIModule];

const declarations = [HeaderComponent, HomeComponent, AboutComponent];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, ...modules],
    exports: [...declarations, ...modules],
})
export class SharedModule {}
