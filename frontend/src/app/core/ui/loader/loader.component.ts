import { Component, OnInit } from "@angular/core";
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
} from "@angular/router";
import { LoaderService } from "app/services/loader.service";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit {
    isLoading: Observable<boolean>;

    constructor(
        private _loaderService: LoaderService,
        private _router: Router,
    ) {}

    ngOnInit() {
        this._loader();
    }

    private _loader(): void {
        this.isLoading = this._loaderService.isLoading;

        this._router.events
            .pipe(
                filter(
                    (event) =>
                        event instanceof NavigationStart ||
                        event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof NavigationError,
                ),
            )
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this._loaderService.show();
                    return;
                }

                setTimeout(
                    function () {
                        this._loaderService.hide();
                    }.bind(this),
                    3000,
                );
            });
    }
}

