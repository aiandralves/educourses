import { Component, OnInit } from "@angular/core";

@Component({
    selector: "footer-info",
    templateUrl: "./footer-info.component.html",
    styleUrls: ["./footer-info.component.scss"],
})
export class FooterInfoComponent implements OnInit {
    items: any[] = [
        {
            description: "Vitória da Conquista - BA",
            icon: "bx-current-location",
        },
        { description: "(+55) 7798865-9863", icon: "bxs-phone-call" },
        { description: "info@educourses.com.br", icon: "bx-envelope" },
        { description: "www.educourses.com.br", icon: "bx-globe" },
    ];

    constructor() {}

    ngOnInit(): void {}
}

