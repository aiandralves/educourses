import { Component, OnInit } from "@angular/core";

export type IHeader = {
    name: string;
    routerLink?: string;
};

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    isOpenMenu: boolean = false;

    public items: IHeader[] = [
        { name: "Home", routerLink: "#home" },
        { name: "About", routerLink: "#about" },
        { name: "Categories", routerLink: "#categories" },
        { name: "Courses", routerLink: "#courses" },
        { name: "Contact", routerLink: "#contact" },
    ];

    constructor() {}

    ngOnInit() {
        this._scrollHeader();
    }

    private _scrollHeader() {
        window.addEventListener("scroll", () => {
            const header = document.getElementById("header") as HTMLElement;
            if (scrollY >= 200) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        });
    }

    public menuToggle() {
        this.isOpenMenu = !this.isOpenMenu;
    }
}

