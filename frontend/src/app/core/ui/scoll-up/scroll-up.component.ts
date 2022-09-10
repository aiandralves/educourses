import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: "scroll-up",
    templateUrl: "./scroll-up.component.html",
    styleUrls: ["./scroll-up.component.scss"],
})
export class ScrollUpComponent implements OnInit {
    isShow: boolean;
    scrollTopShow = 200;

    ngOnInit() {}

    @HostListener("window:scroll")
    checkScroll() {
        const scrollPosition =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (scrollPosition >= this.scrollTopShow) this.isShow = true;
        else this.isShow = false;
    }

    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
}

