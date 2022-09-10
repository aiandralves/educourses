import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UIModule } from "app/core/ui/ui.module";
import { FooterCopyComponent } from "./components/footer-copy/footer-copy.component";
import { FooterInfoComponent } from "./components/footer-info/footer-info.component";
import { FooterMenuComponent } from "./components/footer-menu/footer-menu.component";
import { FooterSocialComponent } from "./components/footer-social/footer-social.component";
import { FooterSubscribeComponent } from "./components/footer-subscribe/footer-subscribe.component";
import { FooterTitleComponent } from "./components/footer-title/footer-title.component";
import { FooterComponent } from "./footer.component";

const declarations = [
    FooterComponent,
    FooterCopyComponent,
    FooterInfoComponent,
    FooterMenuComponent,
    FooterSubscribeComponent,
    FooterSocialComponent,
    FooterTitleComponent,
];

@NgModule({
    declarations: [...declarations],
    imports: [CommonModule, UIModule],
    exports: [...declarations],
})
export class FooterModule {}
